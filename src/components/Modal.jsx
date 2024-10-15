// LoginModal.js

import { useEffect, useState } from "react";
import Button from "./Button";

const Modal = ({
  toggleModal,
  children,
  title = "Hello",
  del = false,
  btn_del = false,
}) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (del || btn_del) {
      setFlag(true);
    }
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {btn_del && (
          <Button
            className="absolute top-3 right-3"
            closeImg
            onClick={toggleModal}
          />
        )}

        <h2 className="mb-4 text-xl font-bold text-center text-gray-800">
          {title}
        </h2>
        {children}
        {flag && (
          <div className=" ">
            {del && (
              <div className="">
                <Button title={"Cancel"} onClick={toggleModal} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
