import React from "react";

function Info({ userInfo, history }) {
  const clickHandler = () => {
    history.push(`/login/:${userInfo}`);
  };
  return (
    <>
      <div>info page</div>
      <button onClick={clickHandler}>go to {userInfo} login page</button>
    </>
  );
}

export default Info;
