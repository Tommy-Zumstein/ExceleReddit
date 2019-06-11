export type User = {
  userName: string;
  email: string;
}

export type UserInfo = {
  userId: string;
  user: User;
  blocked: Array<Object>;
  friends: Array<Object>;
  hidden: Array<Object>;
  mine: Array<Object>;
  multi: Array<Object>;

}

export type UserStatus = {
  user: UserInfo;
  refreshToken: string;
}

export type LoginInfo = {
  userName: string;
  email: string;
  password: string | Int32Array;
}

// TODO: add type for data, title, and comment