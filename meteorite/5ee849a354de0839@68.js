// https://observablehq.com/@unkleho/checkbox-with-color-key@68
import define1 from "./e93997d5089d7165@2303.js";

function _1(md){return(
md`# Checkbox with color key

Modified [@jashkenas/inputs](https://observablehq.com/@jashkenas/inputs) library checkbox to include a color key`
)}

function _ch(checkbox){return(
checkbox({
  title: "Colors",
  description: "Please select your favorite colors",
  options: [
    { value: "r", label: "Red", color: "red" },
    { value: "o", label: "Orange", color: "orange"  },
    { value: "y", label: "Blue", color: "blue"  }
  ],
  value: ["r", "o"]
})
)}

function _3(ch){return(
ch
)}

function _checkbox(input,html){return(
function checkbox(config = {}) {
  let { value: formValue, title, description, submit, options } = Array.isArray(
    config
  )
    ? { options: config }
    : config;
  options = options.map(o =>
    typeof o === "string" ? { value: o, label: o } : o
  );
  const form = input({
    type: "checkbox",
    title,
    description,
    submit,
    getValue: input => {
      if (input.length)
        return Array.prototype.filter
          .call(input, i => i.checked)
          .map(i => i.value);
      return input.checked ? input.value : false;
    },
    form: html`
      <form>
        ${options.map(({ value, label, color }) => {
          const colorBlock = html`<span style="display: inline-block; background-color: ${color}; width: 1em; height: 1em; border-radius: 1em"></span>`;
          const input = html`<input type=checkbox name=input ${
            (formValue || []).indexOf(value) > -1 ? "checked" : ""
          } style="vertical-align: baseline;" />`;
          input.setAttribute("value", value);
          const tag = html`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${input}
           ${colorBlock}
           ${label}
          </label>`;
          return tag;
        })}
      </form>
    `
  });
  form.output.remove();
  return form;
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof ch")).define("viewof ch", ["checkbox"], _ch);
  main.variable(observer("ch")).define("ch", ["Generators", "viewof ch"], (G, _) => G.input(_));
  main.variable(observer()).define(["ch"], _3);
  main.variable(observer("checkbox")).define("checkbox", ["input","html"], _checkbox);
  const child1 = runtime.module(define1);
  main.import("input", child1);
  return main;
}
