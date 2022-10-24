import React from "react";
import "./Skills.css";
import CircleBg from "../../components/circles";
import SvgHtml from "../../assets/svg-skills/html.svg";
import SvgCss from "../../assets/svg-skills/css.svg";
import SvgJs from "../../assets/svg-skills/js.svg";
import SvgReactjs from "../../assets/svg-skills/reactjs.svg";
import SvgVisual from "../../assets/svg-skills/visual.svg";
import SvgFigma from "../../assets/svg-skills/figma.svg";
import SvgGitHubSkills from "../../assets/svg-skills/git.svg";

const Techs = [
  {
    src: SvgHtml,
    name: "HTML",
  },
  {
    src: SvgCss,
    name: "CSS",
  },
];

export default () => {
  return (
    <>
      <CircleBg />
      <section className="section--skills" id="Skills">
        <div className="content--skills">
          <h1 className="title--skills">Habilidades</h1>
          <div className="content--cards-skills">
            {Techs.map(({name, src}) => {
             return (
              <div className="card--skills">
                  <div className="img--card-skills">
                    <img src={src} alt="Icone HTML" />
                  </div>
                  <p>{name}</p>
                </div>
              )
            })}

            {/* <div className="card--skills">
              <div className="img--card-skills">
                <img src={SvgHtml} alt="Icone HTML" />
              </div>
              <p>HTML</p>
            </div> */}

            {/* <div className="card--skills">
                <div className="img--card-skills">
                  <img src={SvgCss} alt="Icone HTML" />
                </div>
                <p>HTML</p>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
