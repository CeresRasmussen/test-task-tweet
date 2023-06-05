import { ThreeCircles } from "react-loader-spinner";
// import { createPortal } from "react-dom";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.Overlay}>
      {/* <div className={css.Modal}> */}
      <ThreeCircles
        height="100"
        width="100"
        color="#471ca9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      {/* </div> */}
    </div>
    // document.querySelector("loader-root")
  );
};
