
import React from 'react';

function Button({ label, variant, onClick }) {
  
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
