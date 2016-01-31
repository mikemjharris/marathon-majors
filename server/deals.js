Meteor.publish('sponsors', function () {
  return Sponsors.find({});
});
