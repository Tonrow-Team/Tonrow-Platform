import "./src/components/headerComponent/index.scss";

import { whyTonrowGenerator } from "./src/components/whyTonrowComponent/whyTonrowComponent";
import baseButtonGenerator from "./src/components/buttonComponent/buttonComponent";
import buttonOptions from "./src/components/buttonComponent/configButtonComponent";
import { getHeaderDataByRole } from "./src/components/headerComponent/validate";
import header from "./src/components/headerComponent/headerComponent";
import renderMap from "./src/components/mapComponent/mapComponent";

import './src/components/heroBannerComponent/index'
// import test from "./src/components/whatDoesTonrowDo/index";
// Define the default role
const defaultRole = "safir";
const customButton = baseButtonGenerator(buttonOptions);
document.body.appendChild(customButton);
