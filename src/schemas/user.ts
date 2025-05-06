import mongoose, { Model } from 'mongoose';
const { Schema, model, models } = mongoose;
import type { IUser } from '@/types/schemas';

const UserSchema = new Schema<IUser>({
  name: String,
  email: String,
  image: String,
  usedLanguages: { type: [String], default: [] },
  follows: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      date: { type: Date, default: Date.now },
    },
  ],
  followers: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      date: { type: Date, default: Date.now },
    },
  ],
  comment: {
    body: String,
    date: { type: Date, default: Date.now },
  },
  meta: {
    likes: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    challengesCompleted: { type: Number, default: 0 },
  },
  date: { type: Date, default: Date.now },
});

const User: Model<IUser> =
  'User' in models ? (models.User as Model<IUser>) : model<IUser>('User', UserSchema);

export default User;
