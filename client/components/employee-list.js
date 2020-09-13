import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee-detail';

const EmployeeList = (props) => {
    //props.employees would be available as an array
    return (
        <div>
            <div className="employee-list">
                {props.employees.map((employee,i) => <EmployeeDetail key={i} employee={employee}/>)}
            </div>
        </div>
    )
}

export default createContainer(()=>{
    //setup subscription
    Meteor.subscribe('employees'); //subscribing to the published employees from the server side

    //return an object. Whatever returned will be sent to Employeelist as props
    return {
        employees: Employees.find({}).fetch()
    }

},EmployeeList); //creating a container
