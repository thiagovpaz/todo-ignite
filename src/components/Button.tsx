import { PlusCircle } from 'phosphor-react';

import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Criar
      <PlusCircle size={16} />
    </button>
  );
}

export { Button };
