import React, { useState, useEffect } from "react";

interface TooltipProps {
  className?: string;
  content: string;
  children: React.ReactNode;
}

function Tooltip({ className, content, children }: Readonly<TooltipProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice(true);
      globalThis.removeEventListener("touchstart", detectTouch);
    };
    globalThis.addEventListener("touchstart", detectTouch, { once: true });

    return () => {
      globalThis.removeEventListener("touchstart", detectTouch);
    };
  }, []);

  const toggleVisibility = () => {
    if (!isTouchDevice) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className="relative flex items-center">
      <div
        onMouseOver={() => !isTouchDevice && setIsVisible(true)}
        onFocus={() => !isTouchDevice && setIsVisible(true)}
        onMouseOut={() => !isTouchDevice && setIsVisible(false)}
        onBlur={() => !isTouchDevice && setIsVisible(false)}
        onClick={toggleVisibility}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`absolute z-10 p-1.5 text-white text-sm rounded-md ${className}`}
          style={{
            top: "90%",
            left: "50%",
            transform: "translateX(-50%) translateY(10px)",
            marginBottom: "10px",
            whiteSpace: "nowrap",
            borderRadius: "4px",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
