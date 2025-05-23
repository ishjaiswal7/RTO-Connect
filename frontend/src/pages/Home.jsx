import React from 'react';

import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../pages/Services';
import RTOOfficeList from '../components/RTOOffices/RTOOfficeList';
import FaqList from '../components/Faq/FaqList';
import Feedbacks from "../components/Feedbacks/Feedbacks";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      {/* =============== hero section =============== */}
        <section className="hero__section pt-[60px] 2xl:h[800px]" >
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90ps] items-center justify-between">
              {/* ===== hero content ===== */}
              <div>
                <div className="lg:w-[570px]">  
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    RTO Connect<sup>©</sup> – Simplifying RTO Operations!
                  </h1>
                  <p className="text__para">
                    RTO Connect is your all-in-one solution for automating and streamlining RTO operations. 
                    From vehicle registrations and driving license applications to permit management and compliance
                    tracking, our app makes everything faster, easier, and more efficient.
                  </p>
                  <Link to='/apply-license'>
                    <button className='btn' >Apply Driving Licence</button>
                  </Link>
                </div>

                {/* ===== hero counter ===== */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      24/7
                    </h2>
                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Access</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      99%
                    </h2>
                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Paperless</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      2.5x
                    </h2>
                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Faster Processing</p>
                  </div>
                </div>
              </div>
              {/* ===== hero content end ===== */}

              <div className='flex gap-[30px] justify-end'>
                <div>
                  <img className="w-full" src={heroImg01} alt="hero-img1"  />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="hero-img2" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="hero-img3" className="w-full" />
                </div>
              </div>
            </div>
          </div> 
        </section>
      {/* =============== hero section end =============== */}
        <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Smart & Seamless RTO Automation
            </h2>
            <p className="text__para text-center">
              Simplify your RTO tasks with our digital platform. From license applications to vehicle registrations, 
              experience faster processing, paperless workflows, and hassle-free services—all at your fingertips! 🚗💨
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon01} alt="icon1" />
              </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Give Us a Feedback
              </h2>
              <p className="text-[16px] leadinf-7 text-textColor font-[400] mt-4 text-center">
                You can share your valuable feedback with us to help us improve our services.
              </p>
                <Link to='/feedback' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className=' group-hover:text-white w-6 h-5' />
              </Link>
            
              </div>
            </div>

            <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon02} alt="icon2" />
                </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leadinf-7 text-textColor font-[400] mt-4 text-center">
                  Quickly locate the nearest RTO office to access services without hassle.
                </p>
                <Link to='#rtooffices' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className=' group-hover:text-white w-6 h-5' />
                </Link>
              
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon03} alt="icon3" />
              </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text-[16px] leadinf-7 text-textColor font-[400] mt-4 text-center">
                Easily schedule your RTO visit at your convenience, avoiding long wait times.
              </p>
                <Link to='/apply-license' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className=' group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* =============== Services Section =============== 
      <section>
        <div className="container" id="service">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>World-Class Services, Tailored for You.</h2>
            <p className='text__para text-center'>
              Experience expert solutions with unmatched efficiency and reliability—delivered seamlessly, just for you.
            </p>
          </div>
          <ServiceList/> 
        </div>
      </section>
       =============== Services End =============== */}

      {/* =============== Feature Section =============== */}
        <section>
          <div className='container' >
            <div className='flex items-center justify-between flex-col lg:flex-row'>
              {/* ===== Feature Content ===== */}
              <div className='xl:w-[670px]'>
                <h2 className='heading'>
                  Simplify RTO Services
                  <br/> Anytime and Anywhere
                </h2>
                <ul className='pl-4'>
                  <li className='text__para'>
                    1. Book Your Appointment – Schedule your RTO visit online with ease.
                  </li>
                  <li className='text__para'>
                    2. Complete Your Process – Apply for a license, vehicle registration, or other RTO services seamlessly.
                  </li>
                  <li className='text__para'>
                    3. Track Your Status – Get real-time updates on your applications and approvals.
                  </li>
                </ul>
                <Link to="/services">
                  <button className='btn'>Learn More</button>
                </Link>
              </div>

              {/* ===== Feature Image ===== */}
              <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                <img src={featureImg} className='w-3/4' alt="feature-img" />
                <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[6px] lg:gap-3'>
                      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                        Weekdays
                      </p>
                      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                        10AM - 4PM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="videoicon"/>
                    </span>
                  </div>

                  <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBLueColor font-[500] mt-2 lg:mt-4 rounded-full">
                    Chief Officer
                  </div>
                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatarIcon} alt="avataricon"/>
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] foxt-[700] text-headingColor">
                      Karthik Ramraj 
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* =============== Feature Section End =============== */}
      {/* ===============Excellence in RTO Services Across Locations=============== */}
      <section>
        <div className="containter" id='rtooffices'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Excellence in RTO Services Across Locations</h2>
            <p className='text__para text-center'>
              We are committed to providing seamless and efficient services, ensuring hassle-free 
              vehicle registration, licensing, and compliance. With a customer-first approach, each 
              office upholds high standards of transparency and innovation in transport administration.
            </p>
          </div>
          <RTOOfficeList />
        </div>
      </section>
      {/* ===============Excellence in RTO Services Across Locations end =============== */}

      {/* =============== FAQ Section =============== */}   
      <section>
        <div className='container' id='faqs'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'><img src = {faqImg}  alt="FAQ Img"></img>
            </div>

            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Frequently Asked Questions</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/* =============== FAQ Section End =============== */}

      {/* =============== Reviews =============== */}
      <section>
        <div className='container' id='reviews'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What Our Users Say</h2>
            <p className='text__para text-center'>
              Seamless RTO services at your fingertips. Experience hassle-free, efficient, and reliable vehicle-related solutions.
            </p>
          </div>
          <Feedbacks/>
        </div>
      </section>
      {/* =============== Reviews End =============== */}
    </>

  );
};

export default Home;