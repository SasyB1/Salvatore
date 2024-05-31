export interface iTodos {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface iUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
}

export type iTodoUser = iTodos & iUsers;
