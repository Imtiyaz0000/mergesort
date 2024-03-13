import { sort } from "./sort.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input id="input"></input>
    <button>lol</button>
    
  </div>
  <output />
`

async function start() {
  console.log("hi");
  const app = document.querySelector("div");
  const input = document.getElementById("input");
  const output = document.querySelector("output");
  output.textContent = input!.value;
}

const button = document.querySelector("button")
button?.addEventListener("click", start);