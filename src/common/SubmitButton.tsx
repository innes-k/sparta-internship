interface SubmitButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  type = "submit",
  isDisabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
