// AdvertisementManagement.js
import { useState } from "react";
import React from 'react';
// import Header from "../MainPage/Header";
// import Sidebar from "../MainPage/SideBar";
import IconBtn from "../../../../components/common/IconBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

 

const PostJob = () => {
    // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        sno: '',
        icon: '',
        companyName: '',
        jobTitle: '',
        jobDescription: '',
        requiredSkill: '',
        requiredExperience: '',
        jobLocation: '',
        applicationDates: '',
        status: '',
        action: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch()
        // Add your logic to handle form submission (e.g., send data to server, update state, etc.)
        console.log('Form data submitted:', formData);
      };
    // const OpenSidebar = () => {
    //   setOpenSidebarToggle(!openSidebarToggle);
    // };
    
  return (
    <div className="grid-container">
    {/* <Header OpenSidebar={OpenSidebar} /> */}
    {/* <Sidebar
      openSidebarToggle={openSidebarToggle}
      OpenSidebar={OpenSidebar} /> */}

    <div className="section-myProfile">
      <div className="main-myProfile">
        <div><IconBtn text={"Create Job Post"} 
          onclick={navigate}
        /></div>
    <div className="advertisement-management">
      <h2> POST JOB</h2>
      <form onSubmit={handleSubmit}>
      <label>
        S.NO:
        <input type="text" name="sno" value={formData.sno} onChange={handleChange} />
      </label>
      <label>
        ICON:
        <input type="text" name="icon" value={formData.icon} onChange={handleChange} />
      </label>
      <label>
        COMPANY NAME:
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
      </label>
      <label>
        JOB TITLE:
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
      </label>
      <label>
        JOB DESCRIPTION:
        <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange}></textarea>
      </label>
      <label>
        REQUIRED SKILL:
        <input type="text" name="requiredSkill" value={formData.requiredSkill} onChange={handleChange} />
      </label>
      <label>
        REQUIRED EXPERIENCE:
        <input type="text" name="requiredExperience" value={formData.requiredExperience} onChange={handleChange} />
      </label>
      <label>
        JOB LOCATION:
        <input type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} />
      </label>
      <label>
        APPLICATION START/END DATE:
        <input type="text" name="applicationDates" value={formData.applicationDates} onChange={handleChange} />
      </label>
      <label>
        STATUS:
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </label>
      <label>
        ACTION:
        <input type="text" name="action" value={formData.action} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
             
    </div>
        </div>
      </div>
  );
};

export default PostJob;
