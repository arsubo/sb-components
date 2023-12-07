import { AllCaps } from "../stories/MyLabel.stories";
import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label Size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * allCaps all letters
   */
  allCaps?: boolean;
  /**
   *  Label Colors
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font Color Label
   */
  fontColor?: string;
}

export const MyLabel = ({ label, size, color, fontColor }: Props) => {
  return (
    <span
      className={[`${size}`, `${color}`].join(" ")}
      style={{ color: fontColor }}
    >
      {AllCaps ? label.toUpperCase() : label}
    </span>
  );
};
