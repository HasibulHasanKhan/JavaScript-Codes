// The constructor can also perform operations like logging, validation, or calculations.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance > 0 ? balance : 0;

    console.log(
      `Account created for ${this.owner} with balance ${this.balance}`
    );
  }
}

const account1 = new BankAccount("Hasib", 33332);

// The constructor can also perform oprating like logging, validation, or calculation.

class User {
  constructor(username) {
    this.username = username;
    this.welcomeMessage();
  }

  welcomeMessage() {
    console.log(`Welcome, ${this.username}`);
  }
}

const user1 = new User("Alex");
