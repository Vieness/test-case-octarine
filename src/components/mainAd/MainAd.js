import React from 'react';
import './style.scss'
import play from '../../access/mainAd/play.svg'
import banner from '../../access/mainAd/banner.png'

const MainAd = () => {
    return (
        <section className={'section section-mainAd'}>
            <img className={'mainAd-image'} src={banner} alt="Banner"/>
            <div className="container mainAd-container">
                <div className={'mainAd'}>
                    <h1 className="mainAd-title">Zack Snyder's Justice League</h1>
                    <div className={'mainAd-info'}>
                        <span className={'mainAd-info--year'}>2021</span>
                        <span className={'mainAd-info--adult'}>18+</span>
                        <span className={'mainAd-info--duration'}>4h 2min</span>
                        <span className={'mainAd-info--rating'}>8.8</span>
                    </div>
                    <p className={'mainAd-text'}>Determined to ensure Superman's ultimate sacrifice was not in vain,
                        Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to
                        protect the world from an approaching threat of catastrophic proportions.</p>
                    <div className={'mainAd-btns'}>
                        <button className={'gradient-btn main-btn'}><img src={play} alt="Play"/>Watch</button>
                        <button className={'mainAd-btn'}>More information</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainAd;
