import React from 'react';

function Button({ children, className, type, onClick, style }) {
  return (
    <button
      type={type}
      className={className}
      disabled={false}
      onClick={onClick}
      style={style}
    >
      {/* {isSubmiting ? (
          <>
            <span className="loading loading-spinner"></span>
          </>
        ) : (
          children || children
        )} */}
      {children}
    </button>
  );
}

export default Button;
