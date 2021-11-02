import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form.js';
//import List from './components/List'




class App extends React.Component {
  constructor(){
  super()

  //01
  this.state = {
    tasks: []
   }
  }

  addTask(e){ ("")
  // this.setState({tasks: [{ description: "Description de ma tache", status: "To do" },this.state.tasks]})
  // console.log(this.state.tasks);
  }
  


render(){
  return(

 //afficher le form
<Form addTask ={this.addTask}/>

//<List tasks={this.state.tasks}
//onClickdelete={this.deleteTask}
///>

  )
  }}
export default App;
