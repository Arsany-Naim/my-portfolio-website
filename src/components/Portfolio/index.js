import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../../firebase';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        if (!db || !isFirebaseConfigured) {
            setPortfolio(portfolioData.portfolio || []);
            return;
        }

        try {
            const querySnapshot = await getDocs(collection(db, 'portfolio'));
            setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
        } catch (error) {
            setPortfolio(portfolioData.portfolio || []);
        }
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        const imageSrc = port.image || port.cover;
                        const title = port.name || port.title;

                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={imageSrc}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url, '_blank', 'noopener,noreferrer')}
                                        disabled={!port.url}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;