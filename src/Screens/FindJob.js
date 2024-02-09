import React from "react";
import Car1 from "../Pages/Car1";
import Exam2 from "../Pages/Exam2";
import Footer from "../Pages/Footer/Footer";
import Hero_Find_Job  from "../Pages/Find Job/Hero_Find_Job";
 import Job from "../Pages/Find Job/Position_find_Job";
import Card_Find_Job from "../Pages/Find Job/Card_Find_Job";
import "../Pages/Body.css"
import FilterButton from "../Pages/Find Job/Filter"

const FindJob = () => {
  return (
    <>
      
      <div><Hero_Find_Job/></div>
      <div><FilterButton/></div>
     <div><Job/></div>
      <div>
        <Exam2 />
      </div>
      <div><Card_Find_Job/></div>
      <div>
        <Car1 />
      </div>
      <div className="p-10 m-10">
        <Footer />
      </div>
    </>
  );
};

export default FindJob;
