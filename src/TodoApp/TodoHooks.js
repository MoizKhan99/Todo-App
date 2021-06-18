import react from 'react'


function TodoHooks(){
    const todo = ['moiz' , 'anas' , 'sabih'];


    return(
        <div>
            <ul>
                {todo.map(() => <li>{todo}</li>)}
            </ul>
        </div>
    )
}

export default TodoHooks;