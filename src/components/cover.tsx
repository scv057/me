import React, { useCallback, useEffect, useRef, useState } from "react";
import naruto from "../../static/images/naruto.jpg";

interface IProps {
  title: string;
  desc: string;
  width?: number;
  height?: number;
}

const Cover: React.FC<IProps> = ({
  title,
  desc,
  width = 100,
  height = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleFont = "48px serif";
  const descFont = "24px serif";
  const [imgReady, setImgReady] = useState(false);

  const loadImg = useCallback(() => {
    const img = new Image();
    img.onload = () => {
      setImgReady(true);
    };
    img.onerror = () => {
      img.src =
        "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
    };
    img.src = naruto;
    return img;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let img = loadImg();
    if (!imgReady) return;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 100, 100, 0, 0, 100, 100);
    ctx.fillStyle = "green";
    ctx.font = titleFont;
    ctx.fillText(title, 0, 0);
    ctx.font = descFont;
    ctx.fillText(desc, 0, 50);
  }, [canvasRef, title, desc, imgReady]);

  return <canvas width={width} height={height} ref={canvasRef} />;
};

export default Cover;
