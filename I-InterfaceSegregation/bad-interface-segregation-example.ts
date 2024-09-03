// bad-interface-segregation-example.ts

// UserProfile: Violates ISP by forcing classes to implement methods they don't need

interface UserProfile {
    getName(): string;
    getEmail(): string;
    getAddress(): string;
    getPaymentInfo(): string;
}

class StandardUser implements UserProfile {
    getName(): string {
        return "User name";
    }

    getEmail(): string {
        return "user@example.com";
    }

    // BasicUser does not need these methods, but is forced to implement them
    getAddress(): string {
        throw new Error("Basic user does not have an address");
    }

    getPaymentInfo(): string {
        throw new Error("Basic user does not have payment info");
    }
}



