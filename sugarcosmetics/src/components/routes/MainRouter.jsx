import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../pages/navbar/Header';
import Footer from '../pages/footer/Footer'
import Makeup from '../pages/makeup/MakeUp'
import BreshesData from '../pages/Breshes/BreshesData'
import Lips from '../pages/makeup/Lips'
import Face from '../pages/makeup/Face'
import Payment from '../pages/Payment/Payment'
import MakeupKit from '../pages/Trending/MakeupKit'
import {MerchStation }from '../pages/Trending/MerchStation'
import {BestSellers}from '../pages/Trending/BestSellers'
import Slider from '../pages/Home/Slider/Slider';
import Cartsugar from '../pages/CartPage/Cartsugar';
import FaceBrushes from '../pages/Breshes/FaceBrushes';
import EyeBrushes from '../pages/Breshes/EyeBrushes';

export const MainRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Slider />} />
        <Route path={"/makeup"} element={<Makeup />} />
        <Route path={"/lips"} element={<Lips />} />
        <Route path={"/face"} element={<Face />} />
        <Route path={"/brushes"} element={<BreshesData />} />
        <Route path={"/trending"} element={<Makeup />} />
        <Route path={"/sugarmerchstation"} element={<MerchStation />} />
        <Route path={"/bestsellers"} element={<BestSellers />} />
        <Route path={"/makeupkits"} element={<MakeupKit />} />
        <Route path={"/cart"} element={<Cartsugar />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/facebrushes"} element={<FaceBrushes />} />
        <Route path={"/eyebrushes"} element={<EyeBrushes />} />
      </Routes>
      <Footer />
    </>
  );
}
