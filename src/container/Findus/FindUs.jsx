import React from 'react';
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'></div>
    <div className='app__wrapper_img' >
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
