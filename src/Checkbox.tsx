// 체큽박스 공통컴포넌트

import React, { ChangeEventHandler, useState } from "react";

interface CheckboxType {
  obj: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({ obj, onChange }: CheckboxType) => {
  return (
    <>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        value={obj.checked}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Checkbox;
