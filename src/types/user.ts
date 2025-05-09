export interface User {
  name: string;
  email: string;
  image: string;
  usedLanguages: string[];
  follows: [
    {
      user: string;
      date: Date;
    },
  ];
  followers: [
    {
      user: string;
      date: Date;
    },
  ];
  meta: {
    likes: number;
    streak: number;
    xp: number;
    challengesCompleted: number;
  };
}
