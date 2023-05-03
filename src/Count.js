// // useReducer simple
// import React, { useReducer, useState } from "react";

// export default function Count() {
//   const [count, dispatchCount] = useReducer(countReducer, 10);
//   //const [value state, dispatch type action ]
//   //   useReducer( function content state and action , 10 default value state);

//   function countReducer(state, action) {
//     if (action === "INCREMENT") {
//       return state + 1;
//     } else {
//       return state - 1;
//     }
//   }

//   // const [count , setCount] = useState(0)
//   return (
//     <div>
//       Count :{count}
//       <button onClick={() => dispatchCount("INCREMENT")}>Increment</button>
//       <button onClick={() => dispatchCount("DECREMENT")}>Decrement</button>
//     </div>
//   );
// }

//  / useReducer and type action and  parametre of object
// import React, { useReducer } from "react";

// export default function Count() {
//   const [state, dispatchCount] = useReducer(countReducer, { count: 0 });
//   //const [value state, dispatch type action ]
//   //   useReducer( function content state and action , 10 default value state);

//   function countReducer(state, action) {
//     if (action.type === "INCREMENT") {
//       return { count: state.count + action.payload };
//     } else if (action.type === "DECREMENT") {
//       return { count: state.count - 1 };
//     } else if (action.type === "RESET") {
//       return { count: 0 };
//     }
//   }

//   // const [count , setCount] = useState(0)
//   return (
//     <div>
//       Count :{state.count}
//       <button onClick={() => dispatchCount({ type: "INCREMENT", payload: 2 })}>
//         Increment
//       </button>
//       <button onClick={() => dispatchCount({ type: "DECREMENT" })}>
//         Decrement
//       </button>
//       <button onClick={() => dispatchCount({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// }
