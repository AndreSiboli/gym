import styles from "@/styles/utils/Message.module.scss";

interface PropsType {
  data: { title: string; text: string };
}

export default function Message(props: PropsType) {
  const { title, text } = props.data;

  return (
    text && (
      <div className={styles.message}>
        <span>{title}</span>
        <p>{text}</p>
      </div>
    )
  );
}
