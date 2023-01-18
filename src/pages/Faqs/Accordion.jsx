import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className="accordion">
      <div className="accordion_question">
        <button className="accordionToggle" onClick={() => setIsActive(!isActive)}>
          {title} <div>{isActive ? "-" : "+"}</div>
        </button>
      </div>
      {isActive && <div className="accordion_answer">{content}</div>}
    </div>
    </>
    
  );
};

export default Accordion;
