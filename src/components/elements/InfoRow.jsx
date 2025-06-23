import React from 'react';

function InfoRow({ label, value, className = '' }) {
  return (
    <div className={className}>
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-black">{value}</span>
    </div>
  );
}

export default InfoRow;
