import React from "react"

export default function PopOutImage() {
  return (
    <div className="display">
      <div className="image-display-container">
        <div className="clip outline outline-5 outline-tertiary"></div>
        <div className="image-display">
          <StaticImage
            src="../images/temp_photo.png"
            alt="Julian Salvador"
            layout="constrained"
            formats={["auto", "avif", "webp"]}
            loading="eager"
            placeholder="dominantColor"
          />
        </div>
      </div>
    </div>
  )
}
