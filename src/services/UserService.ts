export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "Matheus",
    email: "mat@test.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log("DB atualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUser = (value: string) => {
    const userindex = this.db.findIndex((user) => {
      user.name === value || user.email === value;
    });
    this.db.slice(userindex);
    console.log("DB atualizado", this.db);
  };
}
