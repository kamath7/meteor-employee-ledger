import React from "react";
import ReactDOM from "react-dom";

import EmployeeList from './components/employee-list'
//On meteor loadup render app to DOM

const App = () => {
  return (
    <div>
      <EmployeeList/>
    </div>
  );
};

// export default App;

Meteor.startup(() => {
  //Rendering the app
  ReactDOM.render(<App />, document.querySelector(".container"));
});
