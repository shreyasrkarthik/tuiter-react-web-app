import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return (<TodoItem todo={todo} />);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;