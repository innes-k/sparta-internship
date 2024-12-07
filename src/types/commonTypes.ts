export interface ButtonLinkProps {
  to: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
  children: React.ReactNode;
}
