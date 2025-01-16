import styles from "./Heading.module.scss";

interface HeadingProps {
  levels?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Heading: React.FC<HeadingProps> = ({ levels, children, style }) => {
  const Tag = levels || "h1";
  return (
    <Tag className={styles.heading} style={style}>
      <h1 className="">{children}</h1>
    </Tag>
  );
};

export default Heading;
