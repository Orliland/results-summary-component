import { useEffect, useState } from "react";
const colors = ["red", "yellow", "green", "blue"];

const Subject = ({ info, color }) => {
  return (
    <div className={`subject subject--${color}`}>
      <img src={info.icon} alt="" className="subject__icon" />
      <span className={`subject__title subject__title--${color}`}></span>
      <div className="subject__result">
        <span className="subject__score">{info.score}</span>
        <span className="subject__score subject__score--secondary"> / 100</span>
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    loadData();
    setTimeout(() => {
      setDisplay(true);
    }, 200);
  }, []);

  async function loadData() {
    const res = await fetch("./data.json");
    const json = await res.json();
    setData(json);
  }

  return (
    <div className="results">
      <div className="summary">
        <span className="summary__title">Your Result</span>
        <div className="result">
          <span className="result__score">76</span>
          <span className="result__base">of 100</span>
        </div>
        <div className="summary__body">
          <span className="summary__label">Great</span>
          <p className="summary__msg">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
      <div className="subjects">
        <h2 className="subjects__title">Summary</h2>
        {data.map((element, key) => {
          return <Subject info={element} key={key} color={colors[key]} />;
        })}
        {display && (
          <a href="#" className="btn">
            Continue
          </a>
        )}
      </div>
    </div>
  );
};

export default App;
