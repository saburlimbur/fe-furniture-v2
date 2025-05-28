import Input from '../elements/Input';
import Label from '../elements/Label';

function InputField({
  label,
  htmlFor,
  type,
  name,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  autoComplete,
  children,
  icons,
}) {
  return (
    <div>
      <Label
        htmlFor={htmlFor}
        className="block mb-2 text-xs font-semibold text-[#111827]"
      >
        {label}
      </Label>
      <Input
        icons={icons}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default InputField;
