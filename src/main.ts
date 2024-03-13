import { sort } from "./sort.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input id="input"
  </div>
`

async function start() {
  await sort([1])
}