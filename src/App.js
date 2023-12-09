import './App.css';
import { useState } from 'react';
import { Button } from './components/button';
import { User } from './components/user';

function App() {
  // Цей приклад робив майже самостійно
  // 3 приклади бо я просто практикувався
  const [users, setUsers] = useState([])
  const [buttonValue, setButtonValue] = useState("Click")

  function log () {
    const newUser = {
      name: "Sergio",
      isLoggedIn: !users[0]?.isLoggedIn
    }
    setUsers([newUser])
    setButtonValue(newUser.isLoggedIn ? <p>I am not logged in</p> : <p>I am logged in</p>)
  }

return(
  <>
    <div>
      {users.map((user) => (
        <div>
          {user.isLoggedIn ? (<p>U good <User name={user.name}/></p>) : (<p>U need to log in <User name={user.name}/></p>)}
        </div>
      ))}
    </div>
    <div>
      <Button onClickFunc={log} value={buttonValue}/>
    </div>
  </>
)
//   const [users, setUsers] = useState([{name: "Sergio", isLoggedIn: true}])

//   function Log () {
//     setUsers(users.map((user) => (
//       {...user, isLoggedIn: true}
//     )))
//   }

//   function notLog () {
//     setUsers(users.map((user) => (
//       {...user, isLoggedIn: false}
//     )))
//   }

// return(
//   <>
//     <div>
//       {users.map((us) => (
//         <div>
//           {us.isLoggedIn ? (<p>U good {us.name}</p>) : (<p>U need to log in {us.name}</p>)}
//         </div>
//       ))}
//     </div>
//     <div>
//       <Button onClickFunc={Log} value={"I am logged in"}/>
//       <Button onClickFunc={notLog} value={"I am not logged in"}/>
//     </div>
//   </>
// )

  // ----------------------------------------------------------------------------------------------------

// const [buttonValue, setButtonValue] = useState("I am not looged in")
// const [inputValue, setInputValue] = useState()

//   const [users, setUsers] = useState([])

//   const Log = () => {
//     const newUser = {
//       name: inputValue,
//       secondname: "Vediankin",
//       isLoggedIn: !users[0]?.isLoggedIn
//     }
//     setUsers([newUser])
//     setButtonValue(newUser.isLoggedIn ? "i am not logged in" : "I am logged in")
//   }

//   return (
//     <>
//       <div>
//         {/* <button onClick={Log}>I am not logged in</button>
//         <button onClick={notLog}>I am logged in</button> */}
//         <Button onClickFunc={Log} value={buttonValue}/>
//       </div>
//       <div>
//         <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}></input>
//         {users.map((user) => (
//           <div>
//             {user.isLoggedIn ? (
//               <p>U good <User name={user.name} secondname={user.secondname}/></p>

//             ):(
//               <p>Please log in <User name={user.name} secondname={user.secondname}/></p>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
}

export default App;
