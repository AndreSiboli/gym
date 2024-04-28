import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  src: string | StaticImageData | null;
  alt?: string;
  style?: CSSProperties | null;
}

export default function Img(props: PropsType) {
  const { src = "", alt = "", style } = props;

  function defineFit() {
    if (!style) return { objectFit: "cover" } as CSSProperties;
    else if (!style?.objectFit)
      return { ...style, objectFit: "cover" } as CSSProperties;
    return style;
  }

  return (
    <Image
      src={src ? src : ""}
      alt={alt}
      style={defineFit()}
      fill
      sizes="100vw"
    />
  );
}
