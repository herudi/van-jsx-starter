import { createHost } from "van-jsx";
import viteLogo from "/vite.svg";

export function App() {
  const state = { count: 0 };
  const Host = createHost();

  Host.controller = ({ btn, count }) => {
    btn.onclick = () => {
      count.innerText = (state.count += 1).toString();
    };
  };

  return (
    <Host>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + Van-jsx</h1>
      <div>
        <button ref="btn">
          count is <span ref="count">{state.count}</span>
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
    </Host>
  );
}
