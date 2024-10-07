import React from 'react'
import profilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-setion-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quo fuga sint ullam in velit fugiat necessitatibus rem blanditiis expedita. Illum fuga eaque, quisquam rem nemo reprehenderit! Laborum, deserunt necessitatibus.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={profilePic} alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quo fuga sint ullam in velit fugiat necessitatibus rem blanditiis expedita. Illum fuga eaque, quisquam rem nemo reprehenderit! Laborum, deserunt necessitatibus.
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonials