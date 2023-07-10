import React from "react";
import './style.scss';

const SimpleProject = (prop) => {
    const renderData = prop.data;
    return (
        <div className="project-containter">

            <div className="projectText">
                <h1>{renderData.id+' '+ renderData.title}</h1>
                <div className="descript">
                    <p>{renderData.description}</p>
                    <span>{renderData.tehnologies.join(', ')}</span><br />
                </div>

                <a href="#">More shots from this project ↗</a>
            </div>
            <div className="projectImg">
                <img src="#" alt="Project-Img" />
            </div>

        </div>
    )

}
export default SimpleProject;