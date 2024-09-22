import { Trash } from "lucide-react";
import { FC } from "react";
import "./Task.scss";

export type TaskProps = {
  id: string;
  task: string;
  finished?: boolean;
  onFinished?: () => void;
  onRemove?: () => void;
};

export const Task: FC<TaskProps> = ({
  task,
  finished,
  onFinished,
  onRemove,
}) => {
  return (
    <article className="task">
      <input
        type="checkbox"
        className="task-input"
        checked={finished}
        readOnly
      />
      <span className="task-text" onClick={onFinished}>
        {task}
      </span>
      <Trash className="task-icon" onClick={onRemove} />
    </article>
  );
};
