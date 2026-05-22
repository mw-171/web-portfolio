import { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";

export function SmoothImg({
  className,
  style,
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
    <div className="relative" style={style}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded" />
      )}
      <img
        {...props}
        ref={imgRef}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
        className={`${className || ""} transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
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
    <div className="relative w-full">
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded" />
      )}
      <Image
        {...props}
        ref={imgRef}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
        className={`${className || ""} transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
