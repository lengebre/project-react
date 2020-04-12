import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){
  const [isRed, setRed]= useState(false);
  const[count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1);
    setRed(!isRed);
  };
  const[user, setUser] =useState([
    {name: "Ed", message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sed?"},
    {name: "John", message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum animi rerum odit modi itaque quidem nesciunt placeat voluptatibus. "},
    {name: "Mike", message: "Lorem ipsum dolor sit amet consectetur adipisicing."}

  ])

  return(
    <div className="app">

    {user.map(user=>(
      <Tweet name={user.name} message={user.message}/>
    ))}
    {/* <button onClick={increment}> Change Color</button>
    <h1>{count}</h1>
    <h1 className={isRed ? 'red' : ""}>Toggle Color</h1> */}
    </div>
  )
};

export default App;