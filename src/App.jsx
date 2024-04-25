import "bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleReduce = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  return (
    <>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">useState Usage</p>
          <p class="subtitle">
            A simple counter project showing how useState works. Built with
            React+Vite, styled with Bulma CSS.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div class="card">
            <div class="card-content">
              <p class="title">
                Counter: <span className="has-text-warning">{value}</span>
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <button class="button is-success" onClick={handleIncrease}>
                  Increase by 1
                </button>
              </p>
              <p class="card-footer-item">
                <button class="button is-info" onClick={handleReduce}>
                  Reduce by 1
                </button>
              </p>
              <p class="card-footer-item">
                <button class="button is-danger" onClick={handleReset}>
                  Reset
                </button>
              </p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
