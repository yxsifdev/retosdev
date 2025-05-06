import { Types, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  usedLanguages: string[];
  follows: {
    user: Types.ObjectId;
    date: Date;
  }[];
  followers: {
    user: Types.ObjectId;
    date: Date;
  }[];
  comment: {
    body: string;
    date: Date;
  };
  meta: {
    likes: number;
    streak: number;
    xp: number;
    challengesCompleted: number;
  };
  date: Date;
}
