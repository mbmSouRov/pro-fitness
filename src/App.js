import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <QusAndAns></QusAndAns>
    </div>
  );
}

const QusAndAns = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How Does React Works?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              React uses a declarative paradigm that makes it easier to reason
              about your application and aims to be both efficient and flexible.
              It designs simple views for each state in your application, and
              React will efficiently update and render just the right component
              when your data changes.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Props VS State
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Props:</strong> Props are known as properties it can be
              used to pass data from one component to another. Props cannot be
              modified, read-only, and Immutable.
              <br />
              <strong>State:</strong> The state represents parts of an
              Application that can change. Each component can have its State.
              The state is Mutable and It is local to the component only.
              <br />
              <br />
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              useEffect Use Case?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>useEffect use cases</strong>
              <br /> Running once on mount: fetch API data
              <br />
              Running on state change: validating input field
              <br />
              Running on state change: live filtering
              <br />
              Running on state change: trigger animation on new array value{" "}
              <br />
              Running on props change: update paragraph list on fetched API data
              update <br />
              Running on props change: updating fetched API data to get BTC
              updated price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
