/** @jsxImportSource theme-ui */
import React from "react"

const CompskillCard = (props) => {
  const { imageSrc, name, imageId, imgStyles = {} } = props.skill
  return (
    <div className="col-xs-6 col-md-4 col-lg-3" sx={{ mb: "8px" }}>
      <div className="album-item" sx={{ height: "250px", border: "1px solid #dee2e6", borderRadius: "0.25rem", overflow: "hidden", alignItems: "center", justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
        <img src={imageSrc} alt={name} className="img-thumbnail" id={imageId} sx={{ border: "none !important", margin: "auto", height: "auto", display: "block", maxHeight: "200px", maxWidth: "calc(100% - 20px)", ...imgStyles }} />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default CompskillCard
