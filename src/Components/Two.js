// import React from "react";

// function Two(props) {
//   return (
//     <div>
//       <h1 style={{ color: props.theme === "dark" ? "white" : "blue" }}>
//         hi from two
//       </h1>
//       <p>theme : {props.theme}</p>
//     </div>
//   );
// }

// export default Two;

// // ================ react context api=======================================

// import React from "react";
// import ThemeContext from "../Context/ThemeContext";

// function Two(props) {
//   return (
//     <div>
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//           <>
//             <h1 style={{ color: theme === "dark" ? "white" : "blue" }}>
//               hi from two
//             </h1>
//             <p>theme : {theme}</p>
//           </>
//         )}
//       </ThemeContext.Consumer>
//     </div>
//   );
// }

// export default Two;

//  // useContext

import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function Two(props) {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h1 style={{ color: themeContext.theme === "dark" ? "white" : "blue" }}>
        hi from two
      </h1>
      <p>theme : {themeContext.theme}</p>
    </div>
  );
}

export default Two;
