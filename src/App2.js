import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bio from './task_1/Bio';
import FamousPainting from './task_1/FamousPainting';
import PaintingList from './task_1/PaintingList';
import NotFound from './task_1/NotFound';
import Navigation from './task_2/Navigation';


export default function App2() {
    const [isContentVisible, setContentVisible] = useState(true);

    const toggleContent = () => {
        setContentVisible(prevState => !prevState);
    };

    return (
        <Router>
            <fieldset className='App2'>
                <legend>TASK 2</legend>
                <button onClick={toggleContent}>
                    {isContentVisible ? 'Hide' : 'Show'}
                </button>
                <Navigation />
                <div style={{ display: isContentVisible ? 'block' : 'none' }}>
                    <Routes>
                        <Route path="/" element={<Bio />}></Route>
                        <Route path="/famous-painting" element={<FamousPainting />}></Route>
                        <Route path="/gallery" element={<PaintingList />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </div>
            </fieldset>
        </Router>
    );
}
