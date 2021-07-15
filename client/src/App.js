import { useEffect, useState } from 'react';
import { readTodos } from './functions';
import Preloader from './components/Preloader';
import { createTodos } from './api';

function App() {

  const [todo, setTodo] = useState(
    {
      title : '',
      content : ''
    }
  )

  const [todos, setTodos] = useState(null)

  useEffect(() =>{
    const fetchdata = async()=>{
      const result = await readTodos();
      setTodos(result)

    }
    fetchdata()
  }, [])

  const  onSubmitHandler =  async (e)=>{
    e.preventDefault();
    const result =  await createTodos(todo)
    console.log(result)
  }


  return (
    <div className="container">
      <div className="row">

        <pre>{JSON.stringify(todo)}</pre>
        
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate"
              onChange={e=>setTodo({
                ...todo,
                title: e.target.value
              })} />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="icon_telephone" type="tel" className="validate" 
              onChange={e=>setTodo({
                ...todo,
                content: e.target.value
              })}/>
              <label htmlFor="icon_telephone">Content</label>
            </div>
          </div>

          <div className="row right-align ">
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>

        {
          !todos? <Preloader/> : todos.length>0?
          <div className="collection">
            {todos.map(todo=>(
              <li key={todo._id} className="collection-item">
                <ul>
                  <h5>{todo.title}</h5>
                  <div className="row"><p>{todo.content}</p>
                  <a href="#!" className="secondary-content">
                  <i className="material-icons">delete</i>
                  </a></div>
                </ul>
              </li>
            ))}
          </div> : <div><h6>Nothing to Do...</h6></div>

        }

        
      

            
      </div>
    </div>
  

  );
}

export default App;
