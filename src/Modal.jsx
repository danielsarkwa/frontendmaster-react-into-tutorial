import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// we don't want to rerender a new div so we need to get the same element
const Modal = ({ children }) => {
  const elRef = useRef(null); // this is a frozen object
  if (!elRef.current) {
    elRef.current = document.createElement("div"); // we create a single div and reference it multiple times
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // this is a clean up function which runs onces you unmount the component
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
