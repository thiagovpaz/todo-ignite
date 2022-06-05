import { useCallback, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { TaskItem } from './components/TaskItem';

import styles from './App.module.css';

import logo from './logo.svg';
import clipboard from './clipboard.svg';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState('');

  const countTasksDone = useMemo(() =>
    tasks.filter(t => t.done).length, [tasks]);

  const handleAddTask = useCallback(() => {
    const newTask = {
      id: uuid(),
      title: task,
      done: false
    }

    if(task) {
      setTasks([...tasks, newTask]);
      setTask('');
    }
  }, [task]);

  const handleToggleTask = useCallback((id: string) => {
    const updatedTasks = tasks.map((t) => {
      if(t.id === id) {
        return {
          ...t,
          done: !t.done
        };
      }
      return t;
    });

    setTasks(updatedTasks);
  }, [tasks]);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }, [tasks])

  return (
    <main>
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
      </header>

      <div className={styles.container}>
        <div className={styles.addContainer}>
          <Input value={task} onChange={setTask} />
          <Button onClick={handleAddTask} />
        </div>

        <div className={styles.taskHeader}>
          <div className={styles.taskCount}>
            Tarefas criadas <span>{tasks.length}</span>
          </div>

          <div className={styles.taskDone}>
            Concluídas <span> {countTasksDone} de {tasks.length}</span>
          </div>
        </div>

        {tasks.length === 0 && (
          <div className={styles.noData}>
            <img src={clipboard} alt="No Data" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          )
        }
        {tasks.map(task => <TaskItem
          key={task.id}
          task={task}
          onToggleTask={handleToggleTask}
          onRemoveTask={handleDeleteTask}
        />)}
      </div>
    </main>
  );
}

export { App };
