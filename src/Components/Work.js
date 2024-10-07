import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur lorem lorem lorem lorem lorem lorem lorem lorem lorem loremloere lorem lorem",
        },
        {
            image: ChooseMeals,
            title: "Choose how often",
            text: "Lorem ipsum dolor sit amet consectetur lorem lorem lorem lorem lorem lorem lorem lorem lorem loremloere lorem lorem",
        },
        {
            image: DeliveryMeals,
            title: "Fast deliveries",
            text: "Lorem ipsum dolor sit amet consectetur lorem lorem lorem lorem lorem lorem lorem lorem lorem loremloere lorem lorem",
        }
    ]
    return (
        <div className="work-section-wrapper">
            <div className="work-sectioon-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-subheading">How It Works</h1>
                <p className="primary-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quo fuga sint ullam in velit fugiat necessitatibus rem blanditiis expedita. Illum fuga eaque, quisquam rem nemo reprehenderit! Laborum, deserunt necessitatibus.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data)=> {
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Work