import React from 'react';
import './style.scss'
import genre1 from '../../access/genres/hearts 1.svg'
import genre2 from '../../access/genres/cinema 1.svg'
import genre3 from '../../access/genres/documentary 1.svg'
import genre4 from '../../access/genres/killer 1.svg'
import genre5 from '../../access/genres/rocket 1.svg'
import genre6 from '../../access/genres/ghost 1.svg'
import genre7 from '../../access/genres/smile 1.svg'
import genre8 from '../../access/genres/castle 1.svg'

const genres = [
    {id: 1, src: genre1, text: 'Romance', alt: 'Genre 1'},
    {id: 2, src: genre2, text: 'Drama', alt: 'Genre 2'},
    {id: 3, src: genre3, text: 'Historical', alt: 'Genre 3'},
    {id: 4, src: genre4, text: 'Action', alt: 'Genre 4'},
    {id: 5, src: genre5, text: 'Sci-fi', alt: 'Genre 5'},
    {id: 6, src: genre6, text: 'Horror', alt: 'Genre 6'},
    {id: 7, src: genre7, text: 'Comedy', alt: 'Genre 7'},
    {id: 8, src: genre8, text: 'Documentary', alt: 'Genre 8'}
]

const Genres = () => {
    return (
        <section className={'section'}>
            <div className="container">
                <h2 className="section-h2">
                    <a href="#">Popular Genres ></a>
                </h2>
                <div className="genres">
                    {genres.map(genre => (
                        <div className={'genres-item'} key={genre.id}>
                            <img className={'genres-img'} src={genre.src}  alt={genre.alt}/>
                            <h3 className={'genres-title'}>{genre.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Genres;
