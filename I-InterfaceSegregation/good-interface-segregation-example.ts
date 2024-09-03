// good-interface-segregation-example.ts

// Separate interfaces to adhere to ISP

interface BasicUserProfile {
    getName(): string;
    getEmail(): string;
}

interface PremiumUserProfile extends BasicUserProfile {
    getAddress(): string;
    getPaymentInfo(): string;
}

class BasicUser implements BasicUserProfile {
    getName(): string {
        return "Basic User Name";
    }

    getEmail(): string {
        return "basicuser@example.com";
    }
}

