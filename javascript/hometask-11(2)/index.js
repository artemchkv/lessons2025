class NotificationMessage {
    static showCorrect() {
        console.log("Password is correct");
    }
    static showIncorrect() {
        console.log("Password is incorrect");
    }
}

class PasswordChecker {
    constructor(password) {
        this.password = "123";
    }
    verifyPassword(inputPassword) {
        if (inputPassword === this.password) {
            NotificationMessage.showCorrect();
        } else {
            NotificationMessage.showIncorrect();
        }
    }
}

var password = prompt("Enter your password:");
if (password !== null) {
    const checker = new PasswordChecker();
    checker.verifyPassword(password);
}