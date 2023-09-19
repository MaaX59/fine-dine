import React from 'react';
import {images} from '../../constants'
import  {SubHeading} from '../../components'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app_wrapper_img_reverse'>
<img src={images.chef} alt="chef"/>
    </div>
    <div className='app__wrapper_info'>
    <SubHeading title="chef´s Word" />
    <h1 className='headtext__cormorant'> What We Belive In</h1>

    </div>
  </div>
);

export default Chef;
