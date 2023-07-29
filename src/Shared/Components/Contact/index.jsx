import React,{useState} from "react";
import "./style.scss";
import DialogBox from "./DialogBox/index";

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="contactContainer">
      <div className="linkContact">

      <button id="contactLink" onClick={handleOpenDialog}>I am thrilled to answer to <br /> your next project  ↗ </button>
     
      <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} />
        
      </div>
      <div>
        <div className="email">makifkarasu@outlook.com</div>
        <div className="resume">View Resume</div>
      </div>
    </div>
  );
};

export default Contact;
