// src/Button.jsx
import React from 'react';

function Button({ label, variant, onClick }) {
  // Компонент Button использует props: label, variant и onClick
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
