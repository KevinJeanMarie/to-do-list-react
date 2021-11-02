import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component {
    constructor(){
        super();

        //03 mettre une value dans le form: valeur de l'input = a rien (task: "")
        this.state= {
            task: "",
            tasks: []
        }
    }
// définir la méthode handletaskdescription
    handleTaskDescriptiononChange(e) {
        //console.log(e.target.value)
        this.setState({ task: e.target.value
        }) }
        //console.log(this.state.task);

        handleSubmit(e) {
            e.preventDefault()
            this.setState({task:""})
            this.props.addTask(this)
        }

        deleteTask(e){
            e.preventDefault();
            const array = this.state.tasks;
            const index = array.indexOf(e.target.value);
            array.splice(index, 1);
            this.setState({
                tasks: array
            })
        }
      
        modifyTask(e) {
            e.preventDefault();
            this.setState({edit:e})
        }

      //faire la meme chose avec le onChange (bind(this) pour faire référence a l'action, l'element et le component)
      addTask(e){
        // annule l'événement s'il est annulable
        e.preventDefault();
        
        //pour récupérer le tableau
        this.setState({ 
            task: "",
            tasks: [...this.state.tasks, this.state.task]
         }); //() => console.log(this.state));
      
      }
    

    renderTodo(){
        return this.state.tasks.map((list) => {
         return (
          <div className="list-group-item col-4"
            for="task" key={list}>
             {list}<button className="btn btn-outline-success" onClick={this.modifyTask.bind(this)}>Modifier</button>
             {list}<button className="btn btn-outline-danger" onClick={this.deleteTask.bind(this)}>Supprimer</button>
             

            </div>   
            
            
         );
      }
   );
 }

    render() {
      return (

//02
          <>
              <h1>To do list</h1><form className="row g-3">
                  <div className="col-4">
                      <label for="Todolist" className="visually-hidden">Email</label>
                      <input value={this.state.task} type="text" readonly className="form-control" onChange={this.handleTaskDescriptiononChange.bind(this)}></input>
                  </div>

                  <div className="col-auto">
                      <button type="submit" className="btn btn-primary mb-3" onClick={this.addTask.bind(this)}>Ajouter à ma liste</button>
                  </div>
              </form><div className="list-group">
                  {this.renderTodo()}
              </div></>          
      )
    }
}


export default Form; 