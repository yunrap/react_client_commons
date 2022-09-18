import React, { ChangeEvent, EventHandler, useState } from "react";
import { useMemo } from "react";
import Checkbox from "./Checkbox";

interface Data {
  name: string;
  order: number;
  checked: boolean;
}

const MyCheckBoxList: Data[] = [
  {
    order: 0,
    name: "Angular",
    checked: false,
  },
  {
    order: 1,
    name: "React",
    checked: false,
  },
  {
    order: 2,
    name: "Java",
    checked: false,
  },
];

const CheckboxTest = () => {
  const [data, setData] = useState(MyCheckBoxList);

  const onChange = (index: number) => {
    let setCheckData = [...data];
    if (setCheckData[index].checked === true) {
      setCheckData[index].checked = false;
    } else {
      setCheckData[index].checked = true;
    }
    setData(setCheckData);

    console.log(data);
  };

  const isVerified = useMemo(() => {
    return data.every((d) => d.checked);
  }, [data]);

  return (
    <div className="App">
      {/* <input type="checkbox"></input> */}
      {data.map((v, index) => (
        <li key={index}>
          <Checkbox obj={v} onChange={() => onChange(index)}></Checkbox>
        </li>
      ))}
      <button disabled={!isVerified}>Final button</button>
    </div>
  );
};

export default CheckboxTest;
