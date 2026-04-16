import { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";

export function SmoothImg({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <img
      {...props}
      ref={imgRef}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      className={`${className || ""} transition-all duration-500 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export function SmoothNextImage({ className, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <Image
      {...props}
      ref={imgRef}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      className={`${className || ""} transition-all duration-500 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
