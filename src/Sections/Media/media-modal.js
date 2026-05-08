import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./media-modal.css";

function MediaModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="media-modal__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="media-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="media-modal__header">
          <h2 className="media-modal__title">{title}</h2>
          <button
            type="button"
            className="media-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="media-modal__body">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default MediaModal;