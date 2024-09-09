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


class SuperUser implements PremiumUserProfile {
    getName(): string {
        return "Premium User Name";
    }

    getEmail(): string {
        return "premiumuser@example.com";
    }

    getAddress(): string {
        return "Premium User Address";
    }

    getPaymentInfo(): string {
        return "Premium User Payment Info";
    }
}


// Usage example
const premiumUser = new PremiumUser();
console.log(premiumUser.getName());
console.log(premiumUser.getAddress());