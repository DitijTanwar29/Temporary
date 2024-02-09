import React from "react";
import Car1 from "../Pages/Car1";
import Exam2 from "../Pages/Exam2";
import Footer from "../Pages/Footer/Footer";
import Hero_FindJob  from "../Pages/Find Job/Hero_FindJob";
 import Job from "../Pages/Find Job/Position_findJob";
import Card_FindJob from "../Pages/Find Job/Card_FindJob";
import "../Pages/Body.css"
import FilterButton from "../Pages/Find Job/Filter"

const FindJob = () => {
  return (
    <>
      
      <div><Hero_FindJob/></div>
      <div><FilterButton/></div>
     <div><Job/></div>
      <div>
        <Exam2 />
      </div>
      <div><Card_FindJob/></div>
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
