import { states } from "./data.js";

const templateSource = await fetch("./template.hbs");
const source = await templateSource.text();
const template = Handlebars.compile(source);
const html = template(states);
document.getElementById("app").innerHTML = html;
