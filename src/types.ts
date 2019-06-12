export type RedditPost = {
  subreddit?: string,
  author?: string,
  title?: string,
  subreddit_name_prefixed?: string,
  thumbnail?: string,
  preview?: string,
  id?: string,
  url?: string,
  permalink?: string,
  link?: string,
  comments?: Array<Object>,
  showComments?: boolean,
}

export type RedditComment = {
  id?: string,
  permalink?: string,
  author?: string,
  subreddit?: string,
  body?: string,
}

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
  userName?: string;
  email?: string;
  password?: string | Int32Array;
}

// TODO: add type for data, title, and comment