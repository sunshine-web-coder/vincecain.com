import React, { useState } from "react";
import PrimaryLayout from "../../layouts/PrimaryLayout";
import Accordion from "./Accordion";
import { faqs } from "./data";
import "./faqs.scss";

const Faqs = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <PrimaryLayout>
      <div className="faqs">
        <div className="inFaqs">
          <div className="faqs_title">
            <h2>FREQUENTLY ASK QUESTIONS</h2>
          </div>
          <div className="faqs_content">
            <div className="accordion_container">
              <div className="accordion">
                <div className="accordion_question">
                  <button className="accordionToggle" onClick={() => setIsActive(!isActive)}>
                  How are you doing today? <div>{isActive ? "-" : "+"}</div>
                  </button>
                </div>
                {isActive && (
                  <div className="accordion_answer">
                    Lorem ipsum dolo mnjknljk njbjjikj jniljji jkjlijioi kjlmmd
                    sdkJSDJNN DJKDKADNJD DJSDJJD sit amet consectetur
                    adipisicing elit. Velit eaque nobis quasi mollitia optio
                    iusto quidem sit sequi eos recusandae!
                  </div>
                )}
              </div>
              {faqs.map(({ question, answer, activeAccord }) => (
                <Accordion title={question} content={answer} activeAccord={activeAccord}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Faqs;
