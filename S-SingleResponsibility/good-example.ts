//good-example.ts

//UserManager: Responsible for user-related operations

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
        console.log("User added successfully");
    }

    getUser(userId: string): User | undefined {
        return this.users.find(user => user.id === userId);
    }
}


class EmailService {
    sendEmail(to: string, subject: string, body: string): void {
        console.log(`Email sent to ${to} with subject ${subject} and body ${body}`);
    }
}


// User model
interface User {
    id: string;
    name: string;
    email: string;
}

const userManager = new UserManager();
const emailService = new EmailService();

const newUser: User = {
    id: "1",
    name: "Emmanuel Asaber",
    email: "emmanuelasaber@gmail.com",
};

userManager.addUser(newUser);
const retrievedUser = userManager.getUser("1");
if(user) {
    emailService.sendEmail(user.email, "Welcome to our app", "Thank you for signing up!");
}
