class Config {
  static dbUser = "ankit";
  static dbPassword = "secret";
  static apiToken = "abcd";

  static cache = "000";

  hasInCache() {
    return Config.cache;
  }

  static {
    console.log("initialized");
  }
}
const config = new Config();
console.log(config.hasInCache());

// class User {
//   static id = 1;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.id = User.id++;
//   }

//   static compareByAge(user1, user2) {
//     return user1.age - user2.age;
//   }
// }

// const user1 = new User("ankit", 22);
// const user2 = new User("rakesh", 30);
// const user3 = new User("john", 20);

// const users = [user1, user2, user3];
// // users.sort(User.compareByAge);

// console.log(users);
