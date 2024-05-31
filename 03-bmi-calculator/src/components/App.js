import { useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Output from "./Output";

export default function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  function handleWeight(weight) {
    setWeight(weight);
  }

  function handleHeight(height) {
    setHeight(height);
  }

  const BMI = (weight / (height / 100) ** 2).toFixed(1);

  return (
    <div className="app">
      <Header />
      <Input
        weight={weight}
        height={height}
        onWeight={handleWeight}
        onHeight={handleHeight}
      />
      <Output BMI={BMI} />
    </div>
  );
}
