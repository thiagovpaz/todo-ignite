import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export { Input };
