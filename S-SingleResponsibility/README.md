# Single Responsibility Principle (SRP)

## Definition

The Single Responsibility Principle states that **a class should have only one reason to change**. In other words, a class should have only one job or responsibility.

## Key Concepts

1. **Cohesion**: A class should have a single, well-defined purpose.
2. **Separation of Concerns**: Different responsibilities should be separated into different classes.
3. **Maintainability**: Classes with a single responsibility are easier to maintain and modify.
4. **Reusability**: Single-responsibility classes are often more reusable.

## Importance in TypeScript

In TypeScript, adhering to SRP helps in:

- Creating more modular and testable code
- Reducing the complexity of individual classes
- Improving code organization and readability
- Facilitating easier refactoring and maintenance

## Examples

### Good Example

In the `good-example.ts` file, we demonstrate a proper implementation of SRP:

- `UserManager` class: Handles user-related operations
- `EmailService` class: Manages email sending functionality

These classes have distinct, single responsibilities, making the code more maintainable and easier to understand.

### Bad Example

The `bad-example.ts` file shows a violation of SRP:

- `UserManager` class: Tries to handle both user management and email sending

This approach leads to a class with multiple responsibilities, making it harder to maintain and more prone to errors when modifying either user management or email functionality.

## Benefits of Applying SRP

1. **Improved Testability**: Single-responsibility classes are easier to test in isolation.
2. **Enhanced Readability**: Code is more self-explanatory when each class has a clear, single purpose.
3. **Easier Maintenance**: Changes to one aspect of functionality are less likely to affect others.
4. **Better Organization**: Codebase becomes more modular and well-structured.

## Common Pitfalls

- Over-segregation: Creating too many tiny classes can lead to unnecessary complexity.
- Misidentifying responsibilities: Ensure you're separating genuine responsibilities, not just dividing code arbitrarily.

## Conclusion

By following the Single Responsibility Principle, you create more robust, maintainable, and scalable TypeScript code. Remember, the goal is to have each class focused on doing one thing well, rather than trying to handle multiple concerns.