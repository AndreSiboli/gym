import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  src: string | StaticImageData;
  alt?: string;
  style?: CSSProperties;
}

export default function Img(props: PropsType) {
  const { src = "", alt = "", style = {} } = props;

  return (
    <Image
      src={src ? src : ""}
      alt={alt}
      style={{ objectFit: "cover", ...style }}
      fill
      sizes="100vw"
    />
  );
}
