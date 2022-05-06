import React from 'react'
import Slider from './Slider/Slider'
import TestSlide from "./Slider/TestSlide";

import Reffer from './Slider/Reffer';
export default function Home() {
  return (
    <>
      <div style={ {height:"2500px"} }>
        <Slider />
        {/* <TestSlide  /> */}
        <Reffer />
      </div>
    </>
  );
}

