import type { TextInputProps } from "../types/commonTypes";

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`mt-1 block w-full rounded-md shadow-sm text-black p-1 ${className}`}
      />
    </div>
  );
};

export default TextInput;
