import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bio from './task_1/Bio';
import FamousPainting from './task_1/FamousPainting';
import PaintingList from './task_1/PaintingList';
import NotFound from './task_1/NotFound';

export default function App1() {
    
    const [isContentVisible, setContentVisible] = useState(true);

    const toggleContent = () => {
        setContentVisible(prevState => !prevState);
    };

    return (
        <fieldset className='App1'>
            <legend>TASK 1</legend>
            <button onClick={toggleContent}>
                {isContentVisible ? 'Hide' : 'Show'}
            </button>
            <Router>
                <div style={{ display: isContentVisible ? 'block' : 'none' }}>
                    <Routes>
                        <Route path="/" element={<Bio />} />
                        <Route path="/famous-painting" element={<FamousPainting />} />
                        <Route path="/gallery" element={<PaintingList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </fieldset>
    );
}
