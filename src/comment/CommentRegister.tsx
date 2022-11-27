import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import Parser from "html-react-parser";
import { stat } from "fs";
import { text } from "node:stream/consumers";

const CommentRegister = () => {
  const [state, setState] = useState({ html: "", tagName: "div" });
  const ref = useRef<any>(null);

  useEffect(() => {
    // console.log(state.html.length);

    checkCountTxt(state.html.length); // 자리수 체크
  }, [state]);

  const checkCountTxt = (lengthTxt: number) => {
    console.log("글자수 체크");

    const max_length = 4;
    console.log(lengthTxt);
    if (lengthTxt > max_length) {
      let contentVal = state.html.substring(0, max_length);

      setState({ ...state, html: contentVal });
    }
  };

  return (
    <>
      <h2>글작성하기</h2>
      <ContentEditable
        innerRef={ref}
        html={state.html}
        disabled={false}
        onChange={(event: any) =>
          // setState((prev) => ({ ...prev, html: event.target.value }))
          setState({ ...state, html: event.target.value })
        }
      />

      <h2>
        <div>{Parser(state.html)}</div>
      </h2>
    </>
  );
};

export default CommentRegister;
