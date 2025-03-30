const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");// Middleware for authentication
const DLTestResult = require("../models/DLTestResult"); // Import the DLTestResult model
//Index of Routes in this page
// 1. DL Test Result Submission by User
// 2. Submit Driving License Application by User
// 3. Fetch all applications with user details for Admin
// 4. Approve or Reject application by Admin

//DL Test Result Submission by User
router.post("/savetestresult", authMiddleware, async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const { scorePercentage } = req.body;
    if (scorePercentage === undefined) {
      return res.status(400).json({ message: "Missing scorePercentage" });
    }

    if (scorePercentage < 60) {
      return res.status(200).json({ message: "Test failed. Not stored in DB." });
    }

    const testResult = new DLTestResult({
      userId: req.user.id,
      scorePercentage,
      timestamp: new Date(),
    });

    await testResult.save();
    console.log("Test result saved in DB:", testResult);
    return res.status(201).json({ message: "Test result saved successfully", testResult });

  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Internal server error", error: error.toString() });
  }
});


//For User
// Submit Driving License Application
router.post("/apply", authMiddleware, async (req, res) => {
    try {
      const { testDate, aadharNumber, dob, bloodGroup } = req.body;
  
      if (!testDate || !aadharNumber || !dob || !bloodGroup) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Create application linked to logged-in user
      const newApplication = new Application({
        userId: req.user.id, // Extracted from the authentication middleware
        testDate,
        aadharNumber,
        dob,
        bloodGroup,
      });
  
      await newApplication.save();
      res.status(201).json({ message: "Application submitted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error submitting application", error });
    }
});
  

//For Admin
// Get all applications with user details
router.get("/fetchapplications", async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("userId", "name email role") // Populating user details
      .select("applicationDate testDate status aadharNumber dob bloodGroup"); // Selecting only necessary fields

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications", error });
  }
});

//For Admin
// Approve or Reject application
router.put("/updateapplicationstatus/:id", async (req, res) => {
  const { status } = req.body;

  if (!["Pending", "Approved", "Rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid status. Allowed values: Pending, Approved, Rejected" });
  }

  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate("userId", "name email role"); // Populate user details

    if (!application) return res.status(404).json({ message: "Application not found" });

    res.status(200).json({ message: `Application status updated to ${status}`, application });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
});


module.exports = router;
