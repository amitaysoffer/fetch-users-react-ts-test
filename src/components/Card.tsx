import { utilBoxShadowAppearance } from "../utils/appearance";

export type SizeProps = "sm" | "md" | "lg";

export type CardProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  shadowSize?: SizeProps;
  roundedSize?: SizeProps;
  className?: string;
  element?: keyof JSX.IntrinsicElements;
};

export default function Card({
  children,
  onClick,
  shadowSize = "md",
  roundedSize = "md",
  className,
  element: Tag = "div",
  ...props
}: CardProps) {
  const defaultClasses = "p-2";
  const cardStyles = utilBoxShadowAppearance(shadowSize, roundedSize);
  const classes = `${className} ${defaultClasses} ${cardStyles} }`;
  return (
    <Tag className={classes} {...props} onClick={onClick}>
      {children}
    </Tag>
  );
}
