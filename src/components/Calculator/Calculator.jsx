import { useRef, useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  let [BMI, setBMI] = useState();
  let [BMIStatus, setBMIStatus] = useState("");

  const heightFeetInput = useRef(null);
  const heightInchesInput = useRef(null);
  const weightInput = useRef(null);

  useEffect(() => {
    if (BMI) {
      findStatus();
    }
  }, [BMI]);

  const findStatus = () => {
    if (BMI < 18.5) {
      setBMIStatus("Underweight");
    } else if (BMI >= 18.5 && BMI < 25) {
      setBMIStatus("Normal");
    } else if (BMI >= 25 && BMI < 30) {
      setBMIStatus("Overweight");
    } else {
      setBMIStatus("Obesity");
    }
  };

  const onCalculateClick = () => {
    if (!heightFeetInput.current.value.trim()) return;
    if (!heightInchesInput.current.value.trim()) return;
    if (!weightInput.current.value.trim()) return;
    // BMI = (weight in pounds) / (height in inches)^2 * 703
    const heightInInches =
      parseInt(heightFeetInput.current.value) * 12 +
      parseInt(heightInchesInput.current.value);
    const calculatedBMI =
      Math.round(
        (parseInt(weightInput.current.value) /
          (heightInInches * heightInInches)) *
          703 *
          10
      ) / 10;
    setBMI(calculatedBMI);
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <div className="calculator">
        <div className="height-input">
          <p>Height</p>
          <div className="inputs">
            <input type="text" placeholder="feet" ref={heightFeetInput} />
            <input type="text" placeholder="inches" ref={heightInchesInput} />
          </div>
        </div>
        <div className="weight-input">
          <p>Weight</p>
          <input type="text" placeholder="pounds" ref={weightInput} />
        </div>
        <button className="calculate-btn" onClick={onCalculateClick}>
          Calculate
        </button>
      </div>
      <div className="display">
        <h2>Your BMI is:</h2>
        <h1>{BMI}</h1>
        <p className={BMIStatus.toLowerCase()}>{BMIStatus}</p>
      </div>
    </div>
  );
}

export default Calculator;
