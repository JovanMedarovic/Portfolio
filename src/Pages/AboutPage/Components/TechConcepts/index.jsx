import React from "react";
import "./style.scss";

const TechConcepts = () => {
  return (
    <div className="contectsContainer">
      <div>
        <div className="softwareConceptTitle">Main Software </div>
        <div className="softwareConceptContent">
          Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer,
          Blender, Forger
        </div>
      </div>
      <div>
        <div className="skillConceptTitle">Main Skills</div>
        <div className="skillConceptContent">
          {" "}
          Organic and Polygonal Modeling, UV Layout, Texturing, Retopology,
          Ilustration, Sound Design
        </div>
      </div>
    </div>
  );
};

export default TechConcepts;
