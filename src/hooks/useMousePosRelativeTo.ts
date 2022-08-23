import { useEffect, useState } from "react";

const useMousePosRelativeTo = (
  posRelatedTo: string
): { x: number; y: number } => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent, rect: DOMRect) => {
    setMousePos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  useEffect(() => {
    const relatedObject = document.getElementById(posRelatedTo);

    if (relatedObject) {
      const rect = relatedObject.getBoundingClientRect();
      relatedObject.addEventListener("mousemove", (event) => {
        handleMouseMove(event, rect);
      });

      return () => {
        relatedObject.removeEventListener("mousemove", (event) => {
          handleMouseMove(event, rect);
        });
      };
    }
  }, []);

  return mousePos;
};

export default useMousePosRelativeTo;
