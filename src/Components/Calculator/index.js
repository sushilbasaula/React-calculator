import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const operators = ["+", "-", "%", "*", "/"];
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];

  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const handleButtonClick = (val) => {
    if (val === "AC") {
      return setDisplayValue("");
    }
    if (val === "←") {
      return setDisplayValue(displayValue.slice(0, -1));
    }
    /*   if (val === "=") {
      const lastCharacter = displayValue.slice(-1);

      if (operators.includes(lastCharacter)) {
        // stringToDisplay = stringToDisplay.slice(0, -1);
        setDisplayValue(displayValue.slice(0, -1));
      }
      // return displayTotal(stringToDisplay);
    } */

    if (val === "=") {
      const lastChar = displayValue[displayValue.length - 1];
      let displayStr = displayValue;

      if (operators.includes(lastChar)) {
        displayStr = displayValue.slice(0, -1);
      }
      /* const total = eval(displayStr).toString();

      setStr(total); */

      setDisplayValue(eval(displayStr).toString());

      return;
    }

    if (operators.includes(val)) {
      setLastOperator(val);

      if (!displayValue) {
        return;
      }

      const lastChar = displayValue[displayValue.length - 1];
      let temStr = displayValue;
      if (operators.includes(lastChar)) {
        temStr = displayValue.slice(0, -1);
      }
      setDisplayValue(temStr + val);
      // console.log(displayValue);
      return;
    }
    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = displayValue.lastIndexOf(lastOperator);

        const lastNumberSet = displayValue.slice(operatorIndex + 1);

        if (lastNumberSet.includes(".")) {
          return;
        }
      }

      if (!lastOperator && displayValue.includes(".")) {
        return;
      }
    }

    setDisplayValue(displayValue + val);
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};
