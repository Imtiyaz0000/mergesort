import { sort } from "./sort.ts";

async function start() {
  console.log("hi");
  //const app = document.querySelector("div");
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  try {
  let result: number[][] = await sort(eval(input?.value));
  output!.textContent = "[" + result + "]";
  }
  catch (e) {
    output!.textContent = "error: " + e;
  }
}

const button = document.getElementById("button")
button?.addEventListener("click", start);