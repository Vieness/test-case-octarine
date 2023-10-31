import React from 'react';
import './style.scss'
import opening from '../../access/premiere/Opening 1.jpg'
import opening2 from '../../access/premiere/Opening 2.png'

const Premiere = () => {
    return (
        <section className={'section'}>
            <div className="container">
                <div className="openings">
                    <div className="openings-item">
                        <img className={'openings-item--image'} src={opening} alt="Opening"/>
                    </div>
                    <div className="openings-item">
                        <img className={'openings-item--image'} src={opening2} alt="Opening"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Premiere;
