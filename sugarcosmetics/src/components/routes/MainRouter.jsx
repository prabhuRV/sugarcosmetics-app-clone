import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../pages/navbar/Header';
import Makeup from '../pages/makeup/MakeUp'
import BreshesData from '../pages/Breshes/BreshesData'
import Lips from '../pages/makeup/Lips'
import Face from '../pages/makeup/Face'
import MakeupKit from '../pages/Trending/MakeupKit'
export const MainRouter = () => {
  return (
     <>
     
       <Header/>
      <Routes>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/makeup"} element={<Makeup/>}/>
        <Route path={"/lips"} element={<Lips/>}/>
         <Route path={"/face"} element={<Face/>}/>
        <Route path={"/brushes"} element={<BreshesData/>}/>
          <Route path={"/trending"} element={<Makeup/>}/>
     
      </Routes>
     </>
  )
}
