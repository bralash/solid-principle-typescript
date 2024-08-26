# Open-Closed Principle (OCP)

## Definition

The Open-Closed Principle states that **software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification**. This means you should be able to extend a class's behavior without modifying its existing code.

## Key Concepts

1. **Open for Extension**: New behavior can be added to meet changing requirements.
2. **Closed for Modification**: Existing code remains unchanged, reducing the risk of introducing new bugs.
3. **Abstraction**: Use interfaces and abstract classes to define contracts.
4. **Polymorphism**: Leverage polymorphism to allow for different implementations.

## Importance in TypeScript

In TypeScript, adhering to OCP helps in:

- Creating more flexible and scalable systems
- Reducing the risk of bugs in existing code
- Promoting the use of interfaces and abstract classes
- Encouraging the use of composition over inheritance

## Examples

### Good Example

In the `good-example.ts` file, we demonstrate a proper implementation of OCP:

- `Shape` interface: Defines a contract for various shapes
- Concrete shape classes (e.g., `Rectangle`, `Circle`): Implement the `Shape` interface
- `AreaCalculator` class: Works with the `Shape` interface, allowing for easy extension with new shapes

This approach allows adding new shapes without modifying existing code.

### Bad Example

The `bad-example.ts` file shows a violation of OCP:

- `AreaCalculator` class: Directly works with concrete shape classes
- Adding a new shape requires modifying the `AreaCalculator` class

This approach requires modifying existing code to add new functionality, violating the OCP.

## Benefits of Applying OCP

1. **Flexibility**: Easily extend the system with new functionality.
2. **Maintainability**: Reduce the risk of breaking existing code when adding new features.
3. **Reusability**: Promote code reuse through abstractions.
4. **Testability**: Easier to test individual components in isolation.

## Common Pitfalls

- Over-engineering: Don't create abstractions for scenarios that are unlikely to change.
- Ignoring YAGNI (You Aren't Gonna Need It): Only apply OCP when you have a genuine need for flexibility.
- Misusing inheritance: Prefer composition over inheritance when possible.

## Conclusion

By following the Open-Closed Principle, you create more flexible and maintainable TypeScript code. Remember, the goal is to design your systems in a way that allows for extension without requiring modification of existing code. This principle often works hand-in-hand with other SOLID principles to create robust, scalable software architectures.