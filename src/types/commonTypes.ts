export interface ButtonLinkProps {
  to: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
  children: React.ReactNode;
}

export interface TextInputProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  required?: boolean;
  className?: string;
}
