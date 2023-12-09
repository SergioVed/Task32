import './App.css';
import { useState } from 'react';
import { Button } from './components/button';
import { User } from './components/user';

function App() {
const [buttonValue, setButtonValue] = useState("I am not looged in")
const [inputValue, setInputValue] = useState()

  const [users, setUsers] = useState([])

  const Log = () => {
    const newUser = {
      name: inputValue,
      secondname: "Vediankin",
      isLoggedIn: !users[0]?.isLoggedIn
    }
    setUsers([newUser])
    setButtonValue(newUser.isLoggedIn ? "i am not logged in" : "I am logged in")
  }

  return (
    <>
      <div>
        {/* <button onClick={Log}>I am not logged in</button>
        <button onClick={notLog}>I am logged in</button> */}
        <Button onClickFunc={Log} value={buttonValue}/>
      </div>
      <div>
        <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}></input>
        {users.map((user) => (
          <div>
            {user.isLoggedIn ? (
              <p>U good <User name={user.name} secondname={user.secondname}/></p>

            ):(
              <p>Please log in <User name={user.name} secondname={user.secondname}/></p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
