//Server related code
import _ from "lodash";
import { Meteor } from "meteor/meteor";
import { image, helpers } from "faker";

import { Employees } from "../imports/collections/employees";

Meteor.startup(() => {
  //Generating Fake data - faker

  const numberRecords = Employees.find({}).count();
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

  Meteor.publish("employees", function (per_page) {
    return Employees.find({}, { limit: per_page }); //limitng it to per_page records
  }); //to not show all the 5000 records at once
});
