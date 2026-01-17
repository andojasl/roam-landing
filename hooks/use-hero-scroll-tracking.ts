"use client";

import { useState, useEffect, RefObject } from "react";

interface UseHeroScrollTrackingResult {
  isNavbarVisible: boolean;
  showLogoAndCta: boolean;
}

export function useHeroScrollTracking(
  heroLogoRef: RefObject<HTMLElement | null>
): UseHeroScrollTrackingResult {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [showLogoAndCta, setShowLogoAndCta] = useState(false);

  // Track scroll position for navbar visibility (>50px)
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY > 50);
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for hero logo (triggers navbar logo AND CTA visibility)
  useEffect(() => {
    if (!heroLogoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show navbar logo and CTA when hero logo exits viewport
        setShowLogoAndCta(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    observer.observe(heroLogoRef.current);

    return () => observer.disconnect();
  }, [heroLogoRef]);

  return {
    isNavbarVisible,
    showLogoAndCta,
  };
}
