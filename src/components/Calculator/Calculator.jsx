import "./Calculator.css";

function Calculator() {
  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <div className="calculator">
        <div className="height-input">
          <p>Height</p>
          <div className="inputs">
            <input type="text" placeholder="feet" />
            <input type="text" placeholder="inches" />
          </div>
        </div>
        <div className="weight-input">
          <p>Weight</p>
          <input type="text" placeholder="pounds" />
        </div>
        <button className="calculate-btn">Calculate</button>
      </div>
      <div className="display">
        <h2>Your BMI is:</h2>
        <h1>24</h1>
        <p>Healthy</p>
      </div>
    </div>
  );
}

export default Calculator;
