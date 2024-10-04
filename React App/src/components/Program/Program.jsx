import React from 'react';
import './program.css';
import img1 from '../../assets/dsa.png'
import img2 from '../../assets/front.png'
import img3 from '../../assets/frontend.png'

const Program = () => {
  return (
    <div className="program">
      <p>
        Our program is designed to connect universities with NGOs to foster collaboration and drive positive change in the community. Through our initiatives, we aim to promote sustainable development, provide valuable resources, and create a network of support for various social causes. Join us in making a difference!
      </p>
      <div className="gallery">
        <a  target='_blank' href="https://devsnest.in/lms?id=35&course_type=dsa&course_module_id=1&slug=hello-user&question_id=106">
        <div className="gallery-item">
          <img src={img1} alt="Program 1" />
          <div className="caption">Data Structures</div>
        </div>
        </a>
       <a  target='_blank' href="https://devsnest.in/backend-challenges">
        <div className="gallery-item">
          <img src={img2} alt="Program 2" />
          <div className="caption">Backend</div>
        </div>
       </a>
        <a target='_blank' href="https://devsnest.in/lms?id=77&course_type=frontend&course_module_id=2&slug=ul-challenge&question_id=42">
          <div className="gallery-item">
          <img src={img3} alt="Program 3" />
          <div className="caption">Frontend</div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Program;