import React from "react";

export default function CompskillCard(props) {
  const { imageSrc, name, imageId } = props.skill;
  return (
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
      <div className="album-item sk-flex-col sk-jc-spb sk-ai-c">
        <img src={imageSrc} alt={name} className="img-thumbnail" id={imageId} />
        <p>{name}</p>
      </div>
    </div>
  );
}
