// input 공통 컴포넌트
import React from "react";

export type InputComponentProps = {
  placeholderText: string;
  type: string;
  onKeyUpFn: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ErrorText?: boolean;
};

export default function InputComponent(props: InputComponentProps) {
  return (
    <>
      <input
        className="adminInput"
        name={props.type}
        type={props.type}
        placeholder={props.placeholderText}
        onKeyUp={props.onKeyUpFn}
        onChange={props.onChange}
      />
    </>
  );
}
