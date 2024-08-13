import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bio from './task_1/Bio';
import FamousPainting from './task_1/FamousPainting';
import NotFound from './task_1/NotFound';
import Navigation from './task_2/Navigation';
import Gallery from './task_3/Gallery';
import Painting from './task_3/Painting';
import PaintingList from './task_3/PaintingList';


export default function App3() {

  const [isContentVisible, setContentVisible] = useState(true);

  const toggleContent = () => {
      setContentVisible(prevState => !prevState);
  };

  return (
    <Router>
      <fieldset className='App3'>
        <legend>TASK 3</legend>
        <button onClick={toggleContent}>
                {isContentVisible ? 'Hide' : 'Show'}
            </button>
        <Navigation />
        <div style={{ display: isContentVisible ? 'block' : 'none' }}>
        <Routes>
          <Route path="/gallery" element={<Gallery />}>
            <Route index element={<PaintingList />} />
            <Route path=':title' element={<Painting />}></Route>
          </Route>
          <Route path="/" element={<Bio />}></Route>
          <Route path="/famous-painting" element={<FamousPainting />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </div>
      </fieldset>
    </Router>
  );
}
