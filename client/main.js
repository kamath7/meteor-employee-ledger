import React from "react";
import ReactDOM from "react-dom";

//On meteor loadup render app to DOM

const App = () => {
  return (
    <div>
      <h1>Hello Kams</h1>
    </div>
  );
};

// export default App;

Meteor.startup(() => {
  //Rendering the app
  ReactDOM.render(<App />, document.querySelector(".container"));
});
