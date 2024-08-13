import React from 'react';
import { useParams } from 'react-router-dom';
import paintings from './paintings';

export default function Painting() {
  const params = useParams();
  const Title = params.title;
  const painting = paintings.find(p => p.title === Title);
  if (painting === undefined)
    return <p>No picture with this title</p>
  else
    return (
      <article>
        <img className = "imgFromGallery"
          src={painting.img}
          alt={painting.title + ' by Martin LaRoche'}
        />
        <section>
          <div><b>Title: </b> {painting.title}</div>
          <div><b>Year: </b> {painting.year}</div>
          <div><b>Description: </b> {painting.description}</div>
        </section>
      </article>

    )
}
