import React from 'react'
import Navbar from './Navbar'
import BannerImage from "../Assets/home-banner-image.png";
import BannerBackground from "../Assets/home-banner-background.png"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src= {BannerBackground} alt=""/>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your favourite Food Delivered Hot & Fresh    
                    </h1>    

                    <p ClassName="primary-text" >
                        Healthy switcher chefs do all the prep work,
                        like peeding, chopping & marinationhg so you 
                        can cook a fresh food.
                    </p>
                    <button className="secondary-button">
                        Order NOw  <FiArrowRight />
                    </button>
                </div>   
                <div className="home-image-container">
                    <img src={BannerImage} alt='' />
                </div>
            </div>
        </div>
    )
} 

export default Home