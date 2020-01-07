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
  const profiles = [
    {name: "Natsuki", age: 31},
    {name: "Yuma", age: 4},
    {name: "Noname"},
  ];
  return (
    <React.Fragment>
      {
        profiles.map( (profile, index) => {
          return  <User key={index} name={profile.name} age={profile.age} />  
        })
      }
    </React.Fragment>
  )
}

const User = props => {
  return <div>Hi, I am {props.name}, and {props.age} years old </div>
}

User.defaultProps = {
  age: 1
}

export default App;
