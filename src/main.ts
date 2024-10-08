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
// import './fundamentals/tuple.ts';
// import './fundamentals/enum.ts';
// import './fundamentals/type/type-assertion.ts';
// import './fundamentals/modules/modules.ts';
// import './fundamentals/modules/import.ts';
// import './fundamentals/type-guards/typeof.ts';
// import './fundamentals/type-guards/equality&in.ts';
// import './fundamentals/type-guards/instanceof.ts';
// import './fundamentals/fetch-data.ts';
// import './fundamentals/generics/intro.ts';
// import './fundamentals/generics/function&interface.ts';
// import './fundamentals/generics/create-array.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
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
