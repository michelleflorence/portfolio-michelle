import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary";
  outlined?: boolean;
  children: React.ReactNode;
}

const Button = ({
  color = "primary",
  outlined = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[`color-${color}${outlined ? "-outline" : ""}`]}
        ${className ?? ""}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
