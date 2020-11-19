import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const style = css`
  display: block;
  margin: 0 auto;
  border-color: #9fa6b2;
`;

const Loader = () => {
  return (
    <React.Fragment>
      <div className={`flex justify-center items-center h-screen`}>
        <ClipLoader css={style} size={80} color={"#123abc"} />
      </div>
    </React.Fragment>
  );
};

export default Loader;
