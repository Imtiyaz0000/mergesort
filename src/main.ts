const worker = new Worker(new URL('./sort.ts', import.meta.url))

const input = document.getElementById("input");
const output = document.getElementById("output");

function start() {
  // @ts-ignore
  worker.postMessage(input?.value);
  // @ts-ignore
  input!.value = "";
}

worker.onmessage = (sorted: MessageEvent) => {
  output!.textContent = String(sorted.data);
}



const button = document.getElementById("button")
button?.addEventListener("click", start);