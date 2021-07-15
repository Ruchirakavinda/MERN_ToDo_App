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

  useEffect(() =>{
    const fetchdata = async()=>{
      const result = await readTodos();
      console.log(result);

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

        <Preloader/>

        
      <div class="collection">
        <a href="#!" class="collection-item">Alvin</a>
        <a href="#!" class="collection-item active">Alvin</a>
        <a href="#!" class="collection-item">Alvin</a>
        <a href="#!" class="collection-item">Alvin</a>
      </div>
            
      </div>
    </div>
  

  );
}

export default App;
