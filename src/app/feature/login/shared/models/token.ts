export class Token {
  accessToken: string;
  user: User;

  constructor(accessToken: string, user: User) {
    this.accessToken = accessToken;
    this.user = user;
  }
}

export class User {
  email: string;
  id: number;

  constructor(email: string, id: number) {
    this.email = email;
    this.id = id;
  }
}
