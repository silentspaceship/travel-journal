import React from "react";

import { useState, useEffect } from "react";

export function ProgressiveImg({ placeholderSrc, src, ...props }) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  const stateClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      className={`post-picture ${stateClass}`}
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
    />
  );
}
