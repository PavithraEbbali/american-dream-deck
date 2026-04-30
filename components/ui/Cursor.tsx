"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      requestAnimationFrame(animate);
    };

    const onMouseEnterButton = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      follower.style.width = "60px";
      follower.style.height = "60px";
      follower.style.borderColor = "#C9A84C";
    };

    const onMouseLeaveButton = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.width = "40px";
      follower.style.height = "40px";
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const buttons = document.querySelectorAll("button, a, .hover-reveal");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", onMouseEnterButton);
      btn.addEventListener("mouseleave", onMouseLeaveButton);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}