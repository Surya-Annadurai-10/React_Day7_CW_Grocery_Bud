import { useRef } from "react";
import styles from "./Popup.module.css";

const Popup = (props) => {
  const popRef = useRef(null);
  const innerRef = useRef(null);

  if (props.pop) {
    innerRef.current.style.transition = "5s linear";
    innerRef.current.style.width = "100%";
    console.log(innerRef.current.style.width);

    popRef.current.style.top = "2%";
    innerRef.current.style.width = "0%";
    setTimeout(() => {
      setTimeout(() => {
        innerRef.current.style.width = "100%";
        innerRef.current.style.transition = "0.1s ease-out";
      }, 2000);
      //  popRef.current.style.transition = "0.5s cubic-bezier(.14,-0.95,.66,1.93)"
      popRef.current.style.top = "-10%";
      // innerRef.current.style.transitionDelay = "3s"
    }, 5000);
  }

  const onClear = () => {
    console.log(innerRef.current.width);

    innerRef.current.style.width = "100%";
    innerRef.current.style.width = "0%";

    setTimeout(() => {
      setTimeout(() => {
        innerRef.current.style.width = "100%";
        innerRef.current.style.transition = "0.1s ease-out";
      }, 2000);
      //  popRef.current.style.transition = "0.5s cubic-bezier(.14,-0.95,.66,1.93)"
      popRef.current.style.top = "-10%";
      // innerRef.current.style.transitionDelay = "3s"
    }, 5000);
  };

  return (
    <>
      <div ref={popRef} className={styles.popupbox}>
        <div className={styles.top}>
          <img
            className={styles.img}
            src="https://media.gettyimages.com/id/1444222828/vector/checkbox-icon.jpg?s=1024x1024&w=gi&k=20&c=uiwWGi8eAC6BaqD51dn660y9mLSKsHBZW6M0iD7VtcM="
            alt=""
          />
          <p className={styles.para}>Item {props.word}</p>
        </div>
        <div ref={innerRef} className={styles.inner}></div>
        <button onClick={onClear} className={styles.clear}>
          x
        </button>
      </div>
    </>
  );
};

export default Popup;
