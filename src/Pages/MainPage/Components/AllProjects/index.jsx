import React from "react";
import SingleProject from "../SingleProject";
import './style.scss';

const AllProjects = () =>{
    const projects = [
        {
            id:'01',
            title:'Movies Site ',
            description:'Goblin concept digital sculpture with human-like skin.Learned a lot of quick tips and look development.',
            tehnologies:['React','VueJS','JSON','SASS'],
            img:'img1'
        },
        {
            id:'02',
            title:'Movies Site ',
            description:'Goblin concept digital sculpture with human-like skin.Learned a lot of quick tips and look development.',
            tehnologies:['React','VueJS','JSON','SASS'],
            img:'img1'
        }
    ];
    return(
        <div className="projects-container">
            {projects.map(project =><SingleProject data={project} />)}
        </div>
    )
}
export default AllProjects;