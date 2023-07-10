import React from "react";
import './style.scss';

const SimpleProject = () => {
    return (
        <div className="project-containter">
            
            <div className="projectText">
                <h1>01 / PROJECT NAME</h1>
                <div className="descript">
                      <p>Goblin concept digital sculpture with human-like skin.
                 Learned a lot of quick tips and look development.</p>
                <span>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</span><br />
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