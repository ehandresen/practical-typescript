import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
// import './fundamentals/union-type.ts';
// import './fundamentals/any.ts';
// import './fundamentals/undefined.ts';
// import './fundamentals/arrays.ts';
// import './fundamentals/objects.ts';
// import './fundamentals/function.ts';
// import './fundamentals/type.ts';
// import './fundamentals/interface/interface.ts';
// import './fundamentals/interface/merging.ts';
// import './fundamentals/interface/challenge.ts';
import './fundamentals/tuple.ts';
import './fundamentals/enum.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
