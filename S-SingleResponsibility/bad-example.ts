//bad-example.ts

//UserManager: Violates SRP by handling both user management and email sending

// User model
interface User {
    id: string;
    name: string;
    email: string;
}

class UserManager {
    private users: User[] = [];

    // Add a user to the database
    addUser(user: User): void {
        this.users.push(user);
        console.log("User added successfully");

        this.sendWelcomeEmail(user.email);
    }

    getUser(userId: string): User | undefined {
        return this.users.find(user => user.id === userId);
    }

    sendWelcomeEmail(email: string): void {
        //Logic to send email.
        console.log(`Welcome email sent to ${email}`);
    }
}

// Usage

const userManager = new UserManager();

const newUser: User = {
    id: "1",
    name: "Emmanuel Asaber",
    email: "emmanuelasaber@gmail.com",
};
userManager.addUser(newUser);

const user = userManager.getUser("1");
if (user) {
    // The UserManager is now responsible for both user management and email sending
    // This makes the class less focused and harder to maintain
}
