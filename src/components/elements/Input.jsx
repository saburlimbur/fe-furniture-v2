/* eslint-disable react/no-unknown-property */
function Input({
  type,
  name,
  id,
  value,
  onChange,
  onBlur,
  className,
  placeholder,
  autoComplete,
  icons,
  required,
  min,
  max,
  maxLength,
  minLength,
  children,
}) {
  return (
    <div>
      {children} {/* icon */}
      <input
        icons={icons}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
}

export default Input;
