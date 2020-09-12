//Server related code
import _ from "lodash";
import { Meteor } from "meteor/meteor";
import { image, helpers } from "faker";

import { Employees } from "../imports/collections/employees";

Meteor.startup(() => {
  //Generating Fake data - faker

  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if (!numberRecords) {
    //Generating fake data here if there are no records found
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar(),
      });
    }); //alternative to for loop using Lodash
  }

  Meteor.publish('employees',function(){
      return Employees.find({},{limit:20}) //limitng it to 20 records
  }) //to not show all the 5000 records at once
});
