import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
