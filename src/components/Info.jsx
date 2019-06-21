import React from "react";

const Info = props => {
  const { bio, imgSrc, text } = props;
  return (
    <div className={bio ? "info bioInfo" : "info shortInfo"}>
      <img className={bio ? "bioImg" : ""} alt="avatar" src={imgSrc} />
      <div className={bio ? "bioText" : "text"}>{text}</div>
    </div>
  );
};

export default Info;
