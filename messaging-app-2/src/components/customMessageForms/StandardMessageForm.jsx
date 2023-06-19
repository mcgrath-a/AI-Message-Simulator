import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const StandardMessageForm = () => {
  const [message, setMessage] = useState("");
  const [attachement, setAttachement] = useState("");
  const [preview, setPreview] = useState("");

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt="message-form-preview"
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className="message-form-icon"
            onClick={() => {
              setPreview("");
              setAttachement("");
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className=""
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
