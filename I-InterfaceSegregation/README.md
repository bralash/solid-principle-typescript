# Interface Segregation Principle (ISP)

## Overview

The Interface Segregation Principle (ISP) is one of the SOLID principles of object-oriented design. ISP states that a client should not be forced to implement an interface it doesn't use. This principle promotes the creation of smaller, more specific interfaces that are tailored to the needs of the clients.

## Problem with Violating ISP

When a class is forced to implement methods that it doesn't need, it leads to bloated interfaces and a more rigid design. This can make the system harder to maintain, as changes to the interface may impact classes that don't even use the added methods.

## Good Example

In the `good-interface-segregation-example.ts` file, we demonstrate a proper implementation of ISP:

- **BasicUserProfile** interface: Defines the basic operations (getName, getEmail) needed by basic users.
- **PremiumUserProfile** interface: Extends the `BasicUserProfile` and adds methods needed by premium users (getAddress, getPaymentInfo).

This approach ensures that classes only implement the methods they need, making the code more modular and easier to maintain.

## Bad Example

In the `bad-interface-segregation-example.ts` file, we show a violation of ISP:

- **UserProfile** interface: This interface defines methods that are not needed by all types of users. For example, `BasicUser` is forced to implement methods like `getAddress` and `getPaymentInfo`, which it doesn't need.

This violation leads to unnecessary implementation complexity and makes the system harder to maintain.

## Benefits of Applying ISP

1. **Reduced Complexity**: By splitting interfaces into smaller, specific ones, classes only implement what they need.
2. **Improved Flexibility**: Interfaces are more adaptable to change since modifications to one interface do not affect unrelated classes.
3. **Easier Maintenance**: Changes in the system are less likely to cause unintended consequences.

## Conclusion

By following the Interface Segregation Principle, you create more flexible, modular, and maintainable TypeScript code. Ensure that your interfaces are client-specific and avoid forcing classes to implement unnecessary methods.
