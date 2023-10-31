import React from 'react';
import './style.scss'

import actor1 from '../../access/actors/1.jpg'
import actor2 from '../../access/actors/6.jpg'
import actor3 from '../../access/actors/2.jpg'
import actor4 from '../../access/actors/3.jpg'
import actor5 from '../../access/actors/4.jpg'
import actor6 from '../../access/actors/5.jpg'

const actors = [
    {id: 1, src: actor1, text: 'Samantha Bowen', alt: 'Actor 1'},
    {id: 2, src: actor2, text: 'Rhys Birch', alt: 'Actor 2'},
    {id: 3, src: actor3, text: 'James Holloway', alt: 'Actor 3'},
    {id: 4, src: actor4, text: 'Joshua Walton', alt: 'Actor 4'},
    {id: 5, src: actor5, text: 'Patrick Elliott', alt: 'Actor 5'},
    {id: 6, src: actor6, text: 'Morgan O\'Neill', alt: 'Actor 6'},
]


const Actors = () => {
    return (
        <section className={'section'}>
            <div className="container">
                <h2 className="section-h2">
                    <a href="#">Popular Actors & Directors ></a>
                </h2>
                <div className="actors">
                    {actors.map(actor => (
                        <div className={'actors-item'} key={actor.id}>
                            <img className={'actors-img'} src={actor.src}  alt={actor.alt}/>
                            <h3 className={'actors-title'}>{actor.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Actors;
