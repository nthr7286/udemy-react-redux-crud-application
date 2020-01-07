import React from 'react';

// class App extends Component {
//   render() {
//     // return <h1>Hello, world!</h1>
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked!")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />  
      <Cat />  
      <Cat />  
      <Cat />  
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
