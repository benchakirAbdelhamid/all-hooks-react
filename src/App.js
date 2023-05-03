// // ==============================class
// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     console.log("mounted");
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   countUp = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.countUp}>+</button>
//         <h1>{this.state.counter}</h1>
//       </div>
//     );
//   }
// }
// export default App;

// // ============================== function ==> useState
// import React, { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [title, setTitle] = useState("");

//   const amountRed = useRef();

//   useEffect(() => {
//     amountRed.current.focus();
//   });

//   const handleCounter = () => {
//     setCounter(counter + 1);
//   };

//   const handleTitle = () => setTitle("hello word");

//   useEffect(() => {
//     console.log("useEffect");
//   });

//   useEffect(() => {
//     console.log("useEffect  input");
//   }, [title]);

//   // useEffect(() => {
//   //   console.log("useEffect  input counter");
//   // }, [counter]);

//   return (
//     <div>
//       <input ref={amountRed} />
//       <br />
//       <button onClick={handleCounter}>+</button>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <br />
//       <button onClick={handleTitle}>change title</button>
//       <h1>{counter}</h1>
//       <h1>{title}</h1>
//     </div>
//   );
// }

//  // ===================================
// import React from "react";
// import { LoginFormC, LoginFormF } from "./LoginForm";

// function App() {
//   return (
//     <div>
//       <LoginFormC />
//       <LoginFormF />
//     </div>
//   );
// }

// export default App;

// // // ================problem react simple vs react context api====useContext and api function component===========================================
// import React, { Component } from "react";
// import One from "./Components/One";
// import ToggleTheme from "./Components/ToggleTheme";
// import ThemeContext from "./Context/ThemeContext";
// class App extends Component {
//   state = {
//     theme: "dark",
//   };

//   toggleTheme = () => {
//     this.setState({
//       theme: this.state.theme === "dark" ? "light" : "dark",
//     });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{
//           theme: this.state.theme,
//         }}
//       >
//         <div
//           style={{ background: this.state.theme === "dark" ? "blue" : "cyan" }}
//         >
//           <h1>hi from app</h1>
//           <One theme={this.state.theme} />
//           <ToggleTheme toggleThemeBtn={this.toggleTheme} />
//         </div>
//       </ThemeContext.Provider>
//     );
//   }
// }

// export default App;

// // ================ react context api class=======================================
// import React, { Component } from "react";
// import One from "./Components/One";
// import ToggleTheme from "./Components/ToggleTheme";
// import ThemeContext from "./Context/ThemeContext";
// class App extends Component {
//   state = {
//     theme: "dark",
//   };

//   toggleTheme = () => {
//     this.setState({
//       theme: this.state.theme === "dark" ? "light" : "dark",
//     });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{
//           theme: this.state.theme,
//           toggleThemeBtn: this.toggleTheme,
//         }}
//       >
//         <div
//           style={{ background: this.state.theme === "dark" ? "blue" : "cyan" }}
//         >
//           <h1>hi from app</h1>
//           <One />
//           <ToggleTheme />
//           {/* <ToggleTheme toggleThemeBtn={this.toggleTheme} /> */}
//         </div>
//       </ThemeContext.Provider>
//     );
//   }
// }

// export default App;

//  // useContext and createContext
// import React from "react";
// import Header from "./Header";
// import Login from "./Login";
// import { ThemeProvider } from "./ThemeContext";
// import ToggleTheme from "./ToggleTheme";

// function App() {
//   return (
//     <div>
//       <ThemeProvider>
//         <Header />
//         <ToggleTheme />
//         <Login />
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;

// //  // =====application useState & useContext & useEffect============================
// import React, { useContext } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import HeaderApp from "./HeaderApp";
// import LoginApp from "./LoginApp";
// import { AuthProvider, AuthContext } from "./AuthContext";
// function App() {
//   const authContext = useContext(AuthContext);

//   return (
//     <div className="container">
//       <HeaderApp />
//       {authContext.auth.email ? "welcome" : <LoginApp />}
//       {/* {console.log("============", authContext.auth.email)} */}
//     </div>
//   );
// }

// function AppWithStore() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

// export default AppWithStore;

// //====================== useRef reference

// import React from "react";
// import ClassComponent from "./ComponentRef/ClassComponent";
// import FunctionComponent from "./ComponentRef/FunctionComponent";

// export default function App() {
//   return (
//     <div>
//       <ClassComponent />
//       <br />
//       <FunctionComponent />
//     </div>
//   );
// }

// // //=====================useReducer
// import React from "react";
// import Count from "./Count";

// export default function App() {
//   return (
//     <div>
//       <Count />
//     </div>
//   );
// }

// // //=====================useCallback
// import React, { useState, useCallback } from "react";
// import Button from "./Button";

// function App() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount((s) => s + 1);
//   }

//   const incrementCallback = useCallback(increment, []);

//   return (
//     <div>
//       count: {count}
//       <Button onClick={incrementCallback}>Increment</Button>
//     </div>
//   );
// }

// export default App;

// // // //=====================usememo
// // change color text from 2 input vs 1 input

// import React, { useMemo, useState } from "react";

// const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

// export default function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState("");

//   const FullName = useMemo(
//     () => (
//       <div style={{ color: randomColour() }}>
//         first name : {firstName} <br /> last name : {lastName}
//       </div>
//     ),
//     [firstName, lastName]
//   );

//   return (
//     <div>
//       FullName : {FullName}
//       age : {age}
//       <br />
//       <input
//         value={firstName}
//         placeholder="first name"
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         value={lastName}
//         placeholder="last name"
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//         value={age}
//         placeholder="age"
//         type="number"
//         onChange={(e) => setAge(e.target.value)}
//       />
//     </div>
//   );
// }

// =================== custom Hooks
// 1) app simple
// import React, { useState , useEffect } from "react";
// const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);
// export default function App() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount((c) => c + 1);
//   }

//   function decrement() {
//     setCount((c) => (c > 0 ? c - 1 : c));
//   }
// useEffect(() => {
//   function handleBGColor() {
//     document.body.style.background = randomColour();
//   }

//   handleBGColor();
// }, []);
//   return (
//     <div>
//       count : {count}
//       <br />
//       <br />
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// // 2) custom hooks

// import React, { useEffect, useState } from "react";

// const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

// function useCount() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount((c) => c + 1);
//   }

//   function decrement() {
//     setCount((c) => (c > 0 ? c - 1 : c));
//   }

//   return {
//     count,
//     increment,
//     decrement,
//   };
// }

// function useDocumentBG() {
//   useEffect(() => {
//     function handleBGColor() {
//       document.body.style.background = randomColour();
//     }

//     // handleBGColor();

//     window.addEventListener("mousedown", handleBGColor);
//   }, []);
// }

// export default function App() {
//   const { count, increment, decrement } = useCount();
//   useDocumentBG();

//   return (
//     <div>
//       count : {count}
//       <br />
//       <br />
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

//====================== react router
// npm i formik yup ==> validation form

import React, { Component } from "react";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AboutPage from "./componentRouter/AboutPage";
import HomePage from "./componentRouter/HomePage";
import UsersPage from "./componentRouter/UsersPage";
import UserPage from "./componentRouter/UserPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link> - <Link to="/about">About</Link> -
        <Link to="/users">Users</Link>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" exact element={<UsersPage />} />
          <Route path="/users/:id/:name" exact element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
