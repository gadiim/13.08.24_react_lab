import React from 'react';
import { NavLink } from 'react-router-dom';
import paintings from './paintings';

export default function PaintingList() {
    return <div>
        <h4>Gallery</h4>
        <ul>
            {
                paintings.map(
                    function (item) {
                        return <li key={item.title}>
                            <NavLink to={`/gallery/${item.title}`}>
                                {item.title} ({item.year})
                            </NavLink>
                        </li>
                    }
                )
            }
        </ul>
    </div>;
}
