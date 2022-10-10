/*
1. [button] 자리수버튼활성화 : onChange시 자리수체크 => onKeyUp으로 자리수체크가 동작먹힘
2. [input] 동적포인트문구  : NumericFormat npm 설치
*/
import "./App.scss";
import { NumericFormat } from "react-number-format";

import React, { useState } from "react";

export default function Input() {
  const prefix = "p";

  const initialState = {
    name: "",
    pwd: "",
    point: "0p",
    isActive: false,
  };

  const [input, setInput] = useState(initialState);

  const onReset = () => {};

  const checkValid = () => {
    input.name.length >= 2 && input.pwd.length >= 2
      ? setInput({ ...input, isActive: true })
      : setInput({ ...input, isActive: false });
  };

  const handleInputValue = (e: any) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const resetInputPoint = () => {
    console.log(2);
    setInput({ ...input, point: "p" });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onKeyUp={checkValid}
        onChange={handleInputValue}
      />
      <input
        name="pwd"
        placeholder="비밀번호"
        onKeyUp={checkValid}
        onChange={handleInputValue}
      />
      <p></p>
      <button disabled={!input.isActive} onClick={onReset}>
        ok
      </button>
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
