/*
1. [button] 자리수버튼활성화 : onChange시 자리수체크 => onKeyUp으로 자리수체크가 동작먹힘
2. 관리자 가입신청 페이지 만들기
*/
import "../../src/App.scss";
import { NumericFormat } from "react-number-format";

import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Checkbox from "../Checkbox";
import { Data } from "../CheckboxTest";
import { useEffect } from "react";
import ErrorText from "./ErrorText";

export default function Input() {
  const prefix = "p";

  const MyCheckBoxList: Data[] = [
    {
      order: 0,
      name: "Angular",
      checked: false,
    },
    {
      order: 1,
      name: "개인정보 수집/이용 [필수]",
      checked: false,
    },
  ];

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

  // useEffect
  useEffect(() => {
    console.log(2);
  });

  const initialState = {
    name: "",
    pwd: "",
    point: "0p",
    isActive: false,
  };

  const [input, setInput] = useState(initialState);

  const checkValid = () => {
    input.name.length >= 2 && input.pwd.length >= 2
      ? setInput({ ...input, isActive: true })
      : setInput({ ...input, isActive: false });
  };

  const handleInputValue = (e: any) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const resetInputPoint = () => {
    console.log(2);
    setInput({ ...input, point: "p" });
  };

  return (
    <div>
      <h1>관리자 가입신청</h1>
      {data.map((v, index) => (
        <li key={index}>
          <Checkbox obj={v} onChange={() => onChange(index)}></Checkbox>
        </li>
      ))}
      <h3>법인/단체명</h3>
      <InputComponent
        type={"name"}
        placeholderText={"법인/단체명을 입력해주세요"}
        onKeyUpFn={checkValid}
        onChange={handleInputValue}
        ErrorText={true}
      />
      <p></p>
      <h3>대표자명</h3>
      <InputComponent
        type={"name"}
        placeholderText={"대표자명을 입력해주세요"}
        onKeyUpFn={checkValid}
        onChange={handleInputValue}
        ErrorText={true}
      />
      <h3>사업자번호</h3>
      <p></p>
      <InputComponent
        type={"tel"}
        placeholderText={"-하이폰없이 입력해주세요"}
        onKeyUpFn={checkValid}
        onChange={handleInputValue}
      />
      <button>가입여부</button>
      {/* <button disabled={!input.isActive} onClick={onReset}>
        ok
      </button> */}
      <p>
        ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
      </p>
      <div>
        포인트
        <NumericFormat
          displayType={"input"}
          suffix={"p"}
          value={input.point}
          onChange={handleInputValue}
          onFocus={resetInputPoint}
        />
      </div>
    </div>
  );
}
