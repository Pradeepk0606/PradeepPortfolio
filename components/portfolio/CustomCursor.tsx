"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with fine pointer and no reduced-motion preference
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    let targetX = -100;
    let targetY = -100;
    let followerX = -100;
    let followerY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("a, button, [data-cursor-hover], .dev-card");
      if (interactiveEl) {
        const textAttr = interactiveEl.getAttribute("data-cursor-text");
        if (textAttr) {
          setHoverText(textAttr);
        } else if (interactiveEl.closest(".dev-card")) {
          setHoverText("View");
        } else if (interactiveEl.tagName === "BUTTON" || interactiveEl.tagName === "A") {
          setHoverText("Open");
        } else {
          setHoverText(null);
        }
      } else {
        setHoverText(null);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const animateFollower = () => {
      // Smooth spring/lerp easing
      followerX += (targetX - followerX) * 0.18;
      followerY += (targetY - followerY) * 0.18;
      setFollowerPosition({ x: followerX, y: followerY });
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hoverText ? 0 : 1,
        }}
      />
      <div
        className={`custom-cursor-follower ${hoverText ? "is-hovering" : ""}`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      >
        {hoverText && <span>{hoverText}</span>}
      </div>
    </>
  );
}
