// LoginModal.js

import { useEffect, useState } from "react";
import Button from "./Button";

const Modal = ({
  className,
  toggleModal,
  children,
  title = "Hello",
  cancelBtn = false,
  btn_img = false,
  closeImg = false,
}) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (cancelBtn || btn_img) {
      setFlag(true);
    }
  }, [cancelBtn, btn_img]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {btn_img && (
          <Button
            className="absolute top-3 right-3"
            closeImg={closeImg}
            onClick={toggleModal}
          />
        )}

        <h2
          className={`mb-4 text-3xl font-bold text-center text-gray-800 ${className}`}
        >
          {title}
        </h2>
        {children}
        {flag && cancelBtn && (
          <div className="">
            <Button
              title={"Cancel"}
              className=" mt-2 w-full bg-red-800"
              onClick={toggleModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
