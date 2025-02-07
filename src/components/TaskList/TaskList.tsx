import React from 'react';

interface TaskListProps {
    task:{id:number, name:string}[];
}

const TaskList: React.FC<TaskListProps> = ({task}) => {
    return (
        <ul>
            {task.map((task) => (
                <li key={task.id}>{task.name}</li>
            ))}
        </ul>
    );
}
export default TaskList;