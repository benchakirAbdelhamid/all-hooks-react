// import React from "react";
// import ThemeContext from "../Context/ThemeContext";

// function ToggleTheme() {
//   return (
//     <div>
//       <ThemeContext.Consumer>
//         {({ theme, toggleThemeBtn }) => (
//           <button onClick={toggleThemeBtn}>
//             Toggle theme to {theme === "dark" ? "cyan" : "dark"}{" "}
//           </button>
//         )}
//       </ThemeContext.Consumer>
//     </div>
//   );
// }

// export default ToggleTheme;

// // =============class context=================

import React, { Component } from "react";
import ThemeContext from "../Context/ThemeContext";

class ToggleTheme extends Component {
  componentDidUpdate() {
    alert(this.context.theme);
  }
  render() {
    return (
      <div>
        <button onClick={this.context.toggleThemeBtn}>
          Toggle theme to {this.context.theme === "dark" ? "cyan" : "dark"}{" "}
        </button>
      </div>
    );
  }
}
ToggleTheme.contextType = ThemeContext;
export default ToggleTheme;
