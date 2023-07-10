import React from "react";
import './style.scss';

const SimpleProject = () => {
    return (
        <div className="project-containter">
            <div className="projectText">
                <h1>01|Project title</h1>
                <p>Deciption</p>
                <p>Tehnologies</p>
                <a href="#">More shots from this project ↗</a>
            </div>
            <div className="projectImg">
                <img src="#" alt="Project-Img" />
            </div>

        </div>
    )

}
export default SimpleProject;