import React from 'react';
import './style.scss'
import show1 from '../../access/trending/show1.jpg'
import show2 from '../../access/trending/show2.jpg'
import show3 from '../../access/trending/show3.jpg'
import show4 from '../../access/trending/show4.jpg'
import show5 from '../../access/trending/show5.jpg'
import show6 from '../../access/trending/show6.jpg'

import film1 from '../../access/trending/film1.jpg'
import film2 from '../../access/trending/film2.jpg'
import film3 from '../../access/trending/film3.jpg'
import film4 from '../../access/trending/film4.jpg'
import film5 from '../../access/trending/film5.jpg'
import film6 from '../../access/trending/film6.jpg'

const shows = [
    {id: 11, src: show1, alt: 'Show 1'},
    {id: 22, src: show2, alt: 'Show 2'},
    {id: 33, src: show3, alt: 'Show 3'},
    {id: 44, src: show4, alt: 'Show 4'},
    {id: 55, src: show5, alt: 'Show 5'},
    {id: 66, src: show6, alt: 'Show 6'}
]

const films = [
    {id: 1, src: film1, alt: 'Film 1'},
    {id: 2, src: film2, alt: 'Film 2'},
    {id: 3, src: film3, alt: 'Film 3'},
    {id: 4, src: film4, alt: 'Film 4'},
    {id: 5, src: film5, alt: 'Film 5'},
    {id: 6, src: film6, alt: 'Film 6'}
]

const Trending = () => {
    return (
        <>
            <section className={'section'}>
                <div className="container">
                    <h2 className="section-h2">
                        <a href="#">Trending TV Shows ></a>
                    </h2>
                    <div className="movies">
                        {shows.map(show => (
                            <div key={show.id} className="movies-item" >
                                <a key={show.id} href="#" className={'movies-item--link'}>
                                    <img key={show.id} className={'movies-item--img'}  src={show.src} alt={show.alt}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={'section'}>
                <div className="container">
                    <h2 className="section-h2">
                        <a href="#">Trending Movies ></a>
                    </h2>
                    <div className="movies">
                        {films.map(film => (
                            <div className="movies-item" key={film.id}>
                                <a href="#" className={'movies-item--link'}>
                                    <img className={'movies-item--img'}  src={film.src} alt={film.alt}/>
                                </a>
                            </div>
                        ))}
                    </div>
                    <button className={'gradient-btn movies-btn'}>See more</button>
                </div>
            </section>
        </>
    );
};

export default Trending;
