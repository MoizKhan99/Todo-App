import React from 'react'
import firebase from '../Configuration/firebase'

class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            todo : [{title: null , edit : false}],
            value : ''
        }

    }

 Submit = () =>{
     if(this.state.value === ''){
         alert('Enter Todo');
     }
     else{
        let obj = { title: this.state.value}
        firebase.database().ref('/').child('Todos').push(obj)
     this.state.todo.push(obj)
     this.setState({
         todo : this.state.todo,
     })
     this.setState({
         value : ''
     })
     alert("Todo Created Successfully");
    }
 }

 Delete_Btn = (index) =>{
  this.state.todo.splice(index,1)
  this.setState({
      todo : this.state.todo
  })
 }

 Edit_Btn = (index, val) =>{
     this.state.todo[index].edit = true;
     this.setState({
        todo : this.state.todo
     })

 }

 Handle_Change = (e , index) =>{
     this.state.todo[index].title = e.target.value;
     this.setState({
         todo: this.state.todo
     })
 }

 Update_Btn=(index)=>{
    this.state.todo[index].edit = false;
    this.setState({
       todo : this.state.todo
    })
}

Delete_All = () => {
  this.state.todo = ['']
  this.setState({
      todo : this.state.todo
  })
}


    render(){
        return(
            <div>
                <input type="text" value={this.state.email} placeholder="Enter Todo" onChange={(e)=> this.setState({ value : e.target.value}) } />
                <button onClick={this.Submit}>Add Todo</button>
                <button onClick={this.Delete_All}>Delete All</button>
                <ul>
                {this.state.todo.map((v,i) => <li key={i}>
                    {v.edit? <input type="text" onChange={(e)=>this.Handle_Change(e , i)} /> : v.title} 
                    {v.edit?
                <button onClick={()=> this.Update_Btn(i)}>Update</button>
                :
                <button onClick={()=> this.Edit_Btn(i,v)}>Edit</button>}
                <button onClick={()=> this.Delete_Btn(i)}>Delete</button> 
                </li>)}
                </ul>
            </div>
        )
    }
}

export default Todo;
