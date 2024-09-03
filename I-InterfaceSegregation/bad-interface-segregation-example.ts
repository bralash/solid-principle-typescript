// bad-interface-segregation-example.ts

// UserProfile: Violates ISP by forcing classes to implement methods they don't need

interface UserProfile {
    getName(): string;
    getEmail(): string;
    getAddress(): string;
    getPaymentInfo(): string;
}


