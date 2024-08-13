import React from 'react';
// import img from './img/photo.svg';

export default function FamousPainting() {
    return (
        <article>
            <img
                src="https://images.saatchiart.com/saatchi/313699/art/10443577/9506075-YLGKPAKM-7.jpg"
                // src="https://example.com/the-chimeras-vision.jpg"
                alt="The Chimera's Vision by Martin LaRoche"
            // style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
            />
            <section>
                <div><b>Title: </b> The Chimera's Vision</div>
                <div><b>Year: </b> 2285</div>
                <div><b>Description: </b>
                    This painting is considered Martin LaRoche's masterpiece, depicting a surreal vision of the Commonwealth, where mutated creatures blend with phantasmagorical figures in a haunting landscape. The work is known for its intricate details and the eerie glow that seems to emanate from within the canvas itself. It's a reflection of the artist's unique style, combining the horrors of the post-apocalyptic world with surrealistic elements.
                </div>
            </section>
        </article>
    );
}
