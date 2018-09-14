// Homework:

// 4 Pillars of Object-Oriented Programming

// Abstraction
// A simplification of complexity into a reusable and easy interface.
// Reduces duplication. Should reflect reality. Should be extensible.

// Encapsulation
// A method of bundling data and the methods that use the data together.
// Provides privacy, and protects the global scope from pollution.

// Polymorphism
// Instances of different data types sharing the same interface or properties.

// Inheritance
// An instance of a class getting properties and mehods from its parent class.

// Principles of SOLID

// SOLID is an acronym that stands for 5 principles of programming best practices:
// Single Responsibility Principle, Open/Closed Principle, Liskov Substitution 
// Principle, Interface Segregation Principle, Dependency Inversion Principle.

// Single Responsibility Principle
// Every class should have a single responsibility.
// There should not be a lot of if/else logic.
// The class should not change from its original responsibility.
// Use layers in your application to split out responsibilities.

// Open/Closed Principle
// Open to extension, closed to modification.
// Whatever already exists will not be affected by any additions.
// No existing code is changed.

// Liskov Substitution Principle
// Objects in a program should be replaceable with instances of their subtypes.
// For example, if a method takes a "mammal" paramter, a "cow" argument should work.

// Interface Segregation Principle
// Many client-specific interfaces are better than one general-purpose interface.
// Prevents implementing unused methods. Provides low coupling and high cohesion.
// Basically, the Single Responsibility Principle of interfaces (vs. classes).

// Dependency Inversion Principle
// Interfaces should depend on other interfaces, not specifics of classes.
// Classes should depend on interfaces, not oher classes. Loose coupling.

// SOLID is the opposite of STUPID: Singleton, Tight Coupling, Untestability,
// Premature Optimization, Indescriptive Naming, Duplication.

// References
// https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/
// https://developer.mozilla.org/en-US/docs/Glossary