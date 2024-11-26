import { useState } from "react";
import Toast from "./components/Toast";
import { createPortal } from "react-dom";

const BlockModal = ({children}) => {
  const target = document.querySelector(".container.start");
  return createPortal(children,target)
}

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <div className="container start"></div>
      
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <BlockModal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </BlockModal>
      )}
    </div>
  );
};

export default Example;
