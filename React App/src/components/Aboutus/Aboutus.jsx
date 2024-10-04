import React from 'react';
import './Aboutus.css'; 
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const Aboutus = () => {
  return (

    <div className="about-us" id="about">
      <div className="about-us__text">
        <h4 className="about-us__subtitle">WHO ARE WE</h4>
       
       
        <div className="about-us__features">
          <div className="about-us__feature">
            <div>
              <p>At JTD, the primary goal is to prevent students from discontinuing their education due to socio-economic factors. Recognizing the challenges faced by rural communities, the foundation provides various forms of support, including scholarships, mentorship, and educational resources. By addressing financial constraints and other barriers, JTD empowers students to pursue their academic aspirations and break the cycle of poverty.</p>
            </div>
          </div>
          <div className="about-us__feature">
            <div>
              <p>Team JTD comprises a group of like-minded individuals who share a common vision of making a significant difference in rural education. This dedicated team works tirelessly to design and implement programs that cater to the unique needs of students in remote areas. By focusing on innovative teaching methods, infrastructure development, and community involvement, JTD ensures that students receive a quality education that prepares them for a better future.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us__images">
        <div className="about-us__large-images">
          <img src={img1} alt="Large 1" />
        </div>
        <div className="about-us__small-images">
          <img src={img2} alt="Small 1" />
          <img src={img3} alt="Small 2" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
