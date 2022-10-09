/*
1. onChange시 자리수체크 => onKeyUp으로 자리수체크가 동작먹힘
*/

import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Input() {
  const initialState = {
    name: "",
    pwd: "",
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
      <div>
        포인트
        <input
          name="point"
          type="text"
          placeholder="비밀번호"
          onKeyUp={checkValid}
          onChange={handleInputValue}
        />
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
  );
}
