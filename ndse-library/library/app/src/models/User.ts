import { model, Schema } from "mongoose";

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Не указан логин'],
  },
  password: {
    type: String,
    required: [true, 'Не указан пароль'],
  },
  email: {
    type: String,
    required: [true, 'Не указан email'],
  },
});

export const UserModel = model<User & Document>("User", userSchema)
