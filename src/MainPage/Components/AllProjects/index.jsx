import React from "react";
import SimpleProject from "../SingleProject";
import './style.scss';

const AllProjects = () =>{
    return(
        <div className="projects-container">
            <SimpleProject/>
            <SimpleProject/>
            <SimpleProject/>
        </div>
    )
}
export default AllProjects;