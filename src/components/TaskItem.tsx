import { CheckCircle, Circle, Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

interface ITaskItem {
  task: ITask;
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

const TaskItem:React.FC<ITaskItem> = ({ task, onToggleTask, onRemoveTask  }) => {
  return (
    <div className={task.done ? styles.taskDone : styles.task}>
      <div className={styles.check}>
        {task.done ?
          <>
            <div />
            <CheckCircle size={24} weight="fill" color="#5E60CE" onClick={ () => onToggleTask(task.id)} />
          </> :
          <Circle size={24} color="#4EA8DE" onClick={ () => onToggleTask(task.id)}/>
        }
      </div>
      <div className={styles.title}>{task.title}</div>

      <button
        title="Remove todo"
        className={styles.remove}
        onClick={() => onRemoveTask(task.id)}>
        <Trash  />
      </button>
    </div>
  );
}

export { TaskItem };
