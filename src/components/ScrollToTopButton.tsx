import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () =>
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-3 right-3">
        <button
          role="button"
          onClick={scrollToTop}
          className="flex border group border-slate-300 hover:bg-slate-200 pt-2.5 focus:outline-none items-center justify-center rounded w-10 h-10 sm:w-14 sm:h-14 text-white transform transition duration-500"
        >
          <div className="w-3 h-3 sm:w-5 sm:h-5 border-slate-300 group-hover:border-accent border-t-2 border-l-2 transform rotate-45 transition duration-500"></div>
        </button>
      </div>
    )
  );
};
