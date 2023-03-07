import './App.css';
import { useState } from 'react'

function App() {
  let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  let day = daylist[new Date().getDay()]
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  const handleDelete = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setToDos(
      toDos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    );
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false },
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo">
            <div className="left">
              <input
                onChange={() => handleCheck(todo.id)}
                checked={todo.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => handleDelete(todo.id)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}        
        <h1>Completed Task</h1>     
        {toDos
          .filter((todo) => todo.status)
          .map((todo) => (
            <div className="todo">
              <div className="left">
                <input
                  onChange={() => handleCheck(todo.id)}
                  checked={todo.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{todo.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => handleDelete(todo.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import { useState } from 'react';

// function App() {
//   let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
//   let day = daylist[new Date().getDay()];
//   const [toDos, setToDos] = useState([]);
//   const [toDo, setToDo] = useState('');

//   const handleDelete = (data) => {
//     setToDos(prevState => {
//       const updatedToDos = prevState.filter((list) => {
//         return list.id !== data.id
//       })

//       return updatedToDos.map((list) => {
//         if (list.id > data.id && list.status === data.status) {
//           return { ...list, status: !data.status }
//         }
//         return list
//       })
//     });
//   };

//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Whoop, it's {day} 🌝 ☕ </h2>
//       </div>
//       <div className="input">
//         <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
//         <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
//       </div>
//       <div className="todos">
//         {toDos.map((data) => {
//           return (
//             <div className="todo" key={data.id}>
//               <div className="left">
//                 <input
//                   onChange={(e) => {
//                     setToDos(prevState => {
//                       return prevState.map((list) => {
//                         if (list.id === data.id) {
//                           return { ...list, status: e.target.checked }
//                         }
//                         return list
//                       })
//                     });
//                   }}
//                   value={data.status}
//                   type="checkbox"
//                   name=""
//                   id=""
//                 />
//                 <p>{data.text}</p>
//               </div>
//               <div className="right">
//                 <i onClick={() => handleDelete(data)} className="fas fa-times"></i>
//               </div>
//             </div>
//           );
//         })}
//         <h1>Completed Task</h1>
//         {toDos.map((data) => {
//           if (data.status) {
//             return <h1 key={data.id}>{data.text}</h1>;
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import { useState } from 'react'
// function App() {
//   let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
//   let day = daylist[new Date().getDay()]
//   const [toDos, setToDos] = useState([])
//   const [toDo, setToDo] = useState('')

//   return (

//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Whoop, it's {day} 🌝 ☕ </h2>
//       </div>
//       <div className="input">
//         <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
//         <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
//       </div>
//       <div className="todos">

//         {
//           toDos.map((data) => {
//             return (<div className="todo">
//               <div className="left">
//                 <input onChange={(e) => {

//                   setToDos(toDos.filter(getdata => {
//                     if (getdata.id === data.id) {
//                       getdata.status = e.target.checked
//                     }
//                     return getdata
//                   }))
//                 }} value={data.status} type="checkbox" name="" id="" />
//                 <p>{data.text}</p>
//               </div>
//               <div className="right">
//                 <i onClick={(e) => {
//                   //delecting todo
//                   setToDos(toDos.filter((list) => {
//                     return list.id !== data.id
//                   }))

//                 }} className="fas fa-times"></i>
//               </div>
//             </div>)

//           })
//         }
//         <h1>Completed Task</h1>
//         {toDos.map((data) => {
//           if (data.status) {
//             return (<h1>
//               {data.text}
//             </h1>)
//           }
//           return null

//         })}
//       </div>
//     </div>

//   );
// }

// export default App;
