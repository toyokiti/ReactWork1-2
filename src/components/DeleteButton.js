
const DeleteButton = (props) =>{

    const onClickDelete = () => {
        const todos = props.todoList;
        // deleteボタンがクリックされたタスクをtodoListから削除
        todos.splice(props.index, 1);
        // TodoListを上書き
        props.setTodoList([...todos]);
    }   

    return (
        <button onClick = {()=>{onClickDelete()}}>削除</button>
    )
}
export default DeleteButton;