import { userSchema, userType } from './schema';

export const Users = new Mongo.Collection<userType>(`users`);

// @ts-ignore
Users.attachSchema(userSchema);
