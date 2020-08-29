import { check } from 'meteor/check';
import { userType } from './schema';
import { Users } from './users';

type UserArgs = {
  user: userType;
};

Meteor.methods({
  'user.create'({ user }: UserArgs) {
    this.unblock();
    check(user, Object);
    try {
      const id = Users.insert(user);
      return id;
    } catch (error) {
      throw new Meteor.Error('employees.create.error', error.message);
    }
  },
  'user.delete'({ user }: UserArgs) {
    this.unblock();
    check(user, Object);

    try {
      Users.remove(user._id);
    } catch (error) {
      throw new Meteor.Error('user.update.error', error.message);
    }
  },
  'user.update'({ user }: UserArgs) {
    this.unblock();
    check(user, Object);
    try {
      Users.update(
        { _id: user._id },
        {
          $set: user,
        }
      );
    } catch (error) {
      throw new Meteor.Error('user.update.error', error.message);
    }
  },
});
