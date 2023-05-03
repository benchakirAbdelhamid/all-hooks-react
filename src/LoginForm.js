// // // // ======  class vs function useState

// 1) class and state
// import React, { Component, useState } from "react";

// export class LoginFormC extends Component {
//   state = {
//     email: "",
//   };

//   handleEmailc = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h2>class example</h2>
//         <input value={this.state.email} onChange={this.handleEmailc} />
//         {this.state.email}
//       </div>
//     );
//   }
// }
// // 1) function and useState
// export function LoginFormF() {
//   const [email, serEmail] = useState("");
//   function handleEmailf(e) {
//     serEmail(e.target.value);
//   }
//   return (
//     <div>
//       <h2>class example</h2>
//       <input value={email} onChange={handleEmailf} />
//       {email}
//     </div>
//   );
// }

// // ====================useEffect===========================================
// class useEffect
import React, { Component, useEffect, useState } from "react";

export class LoginFormC extends Component {
  state = {
    email: "",
  };

  componentDidMount() {
    console.log("class componentDidMount");
  }

  componentDidUpdate() {
    console.log("class componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("class componentWillUnmount");
  }

  handleEmailc = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h2>class example</h2>
        <input value={this.state.email} onChange={this.handleEmailc} />
        {this.state.email}
      </div>
    );
  }
}
// 1) function and useEffect
export function LoginFormF() {
  const [email, serEmail] = useState("");
  // did update
  useEffect(() => {
    console.log("function did mound and update ");
  });
  // on change the email
  useEffect(() => {
    console.log("function did mound and update of element change state  ");
  }, [email]);

  function handleEmailf(e) {
    serEmail(e.target.value);
  }
  return (
    <div>
      <h2>class example</h2>
      <input value={email} onChange={handleEmailf} />
      {email}
    </div>
  );
}

// // ================react context api====useContext and api function component===========================================
