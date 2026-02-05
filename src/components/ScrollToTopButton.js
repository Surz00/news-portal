// import { useEffect, useState } from "react";

// export default function ScrollToTopButton() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 300) {
//         setShow(true);
//       } else {
//         setShow(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   if (!show) return null;

//   return (
//     <button
//       className="scroll-top-btn"
//       onClick={() =>
//         window.scrollTo({ top: 0, behavior: "smooth" })
//       }
//       aria-label="Scroll to top"
//     >
//       ↑
//     </button>
//   );
// }
import { useEffect, useState } from "react";
import "../styles/scrollToTopButton.css";
export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="scroll-top-btn"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
