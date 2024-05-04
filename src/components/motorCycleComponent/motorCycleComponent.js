import domGenerator from "dom-generator";
import "./index.scss";

import timeLine from "./timline";

function renderBreakMotor() {
  let motor = domGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "breakMotor" },
    children: [
      {
        tag: "div",
        attributes: { id: "animationMotor" },
        children: [
          {
            tag: "img",
            attributes: {
              src: "./public/images/motorC.svg",
              id: "motor",
            },
          },
          {
            tag: "img",
            attributes: { src: "./public/images/road.svg", id: "road" },
          },
        ],
      },
    ],
  });
  // return motor;
  timeLine();
  return motor;
}

export default renderBreakMotor;
