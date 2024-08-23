# SOLID Principles in TypeScript

This repository provides examples and explanations of SOLID principles implemented in TypeScript. SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

## What are SOLID Principles?

SOLID is a mnemonic acronym introduced by Robert C. Martin, representing five principles of object-oriented programming and design. These principles, when applied together, aim to make software designs more understandable, flexible, and maintainable.

## Principles

1. [**S**ingle Responsibility Principle](./S-SingleResponsibility/README.md)
   - A class should have only one reason to change.

2. [**O**pen-Closed Principle](./O-OpenClosed/README.md)
   - Software entities should be open for extension, but closed for modification.

3. [**L**iskov Substitution Principle](./L-LiskovSubstitution/README.md)
   - Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

4. [**I**nterface Segregation Principle](./I-InterfaceSegregation/README.md)
   - Many client-specific interfaces are better than one general-purpose interface.

5. [**D**ependency Inversion Principle](./D-DependencyInversion/README.md)
   - High-level modules should not depend on low-level modules. Both should depend on abstractions.

## Repository Structure

Each principle has its own folder containing:
- A README.md file explaining the principle in detail
- A `good-example.ts` file demonstrating correct application of the principle
- A `bad-example.ts` file showing common mistakes or violations of the principle

## How to Use This Repository

1. Clone the repository:
   ```
   git clone https://github.com/your-username/solid-principles-typescript.git
   ```
2. Navigate to each principle's folder
3. Read the README.md for an explanation of the principle
4. Study the good and bad examples
5. Try to apply these principles in your own TypeScript projects

## Benefits of SOLID Principles

- Improved code readability and maintainability
- Easier debugging and testing
- More flexible and scalable software architecture
- Reduced coupling between modules
- Easier to extend and modify existing code

## Contributing

Contributions are welcome! If you'd like to improve the examples, explanations, or add more content, please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Resources

For more information on SOLID principles and TypeScript, check out these resources:

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [SOLID Principles in TypeScript](https://khalilstemmler.com/articles/solid-principles/solid-typescript/)
- [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) by Robert C. Martin

Happy coding, and remember: Keep it SOLID!