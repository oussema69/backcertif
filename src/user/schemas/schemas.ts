import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    name: '',
    email: '',
    password: '',
});
