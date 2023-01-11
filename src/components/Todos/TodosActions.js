import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css'

function TodosActions({ resetTodo, deleteCompletedTodos, completedTodoExist }) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodo}>
                <RiDeleteBin2Line />
            </Button>
            <Button
                title="Clear completed Todos"
                onClick={deleteCompletedTodos}
                disabled={!completedTodoExist}
            >
                <RiRefreshLine />
            </Button>
        </div>
    );
}

export default TodosActions;
