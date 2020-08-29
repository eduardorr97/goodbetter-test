import { Users } from '../users';

Meteor.publish(
  'users',
  ({ selector = {}, fields = {}, sort = { createdAt: -1 } }) =>
    Users.find(selector, { fields, sort })
);
