# db-modelling-exercise

## Decisions for model designs:

Followed key principles: 
+ encapsulation of possible states 
+ type safety to prevent invalid states
+ ease of extendibility

### 1. Separation of User States (LoggedOut and LoggedIn):
+ Why?: Differentiates between authenticated and non-authenticated user states clearly. This is fundamental because the available actions and data visibility drastically change based on the user's authentication status.
+ Benefit: Ensures that operations requiring authentication cannot mistakenly be allowed in a logged-out state, enhancing security and user experience by design.

### 2. Asynchronous Data Handling (UserData and ErrorState):
+ Why?: Reflects the asynchronous nature of fetching user data and loading content on the accounts and support pages. By including null states and distinct error types, the model accounts for loading, success, and failure states.
+ Benefit: Facilitates the implementation of responsive UIs that can accurately represent loading states and provide feedback on errors, improving user satisfaction and reducing confusion.

### 3. Page Specific States (AccountsPage and SupportPage):
+ Why?: Tailors the state to the needs of individual pages, acknowledging that different pages have unique requirements and states (e.g., accounts data vs. chat state).
+ Benefit: Simplifies state management within the app by localizing state changes to relevant components, making the codebase more maintainable and scalable.

### 4. Comprehensive Account Modeling (RegularAccount and PocketAccount):
+ Why?: Distinguishes between different account types to encapsulate their specific properties, like the multiple currencies in pocket accounts.
+ Benefit: Increases the model's flexibility to accommodate varied banking products and simplifies the addition of new account types in the future without disrupting existing structure.

### 5. Chat State Flexibility:
+ Why?: Captures the dynamic nature of the chat feature across different user interactions (minimized, open, full-screen) and its availability across all pages.
+ Benefit: Allows for a consistent and seamless user experience with the chat feature, ensuring that users can access chat functionality no matter where they are in the app, and the UI can dynamically adapt to user actions.

### 6. Enumerations and Interfaces for Extensibility:
+ Why?: Using enums for currencies and interfaces for account types and chat states makes the model extensible and easy to update or expand.
+ Benefit: Future changes, such as adding new currencies or account types, can be done with minimal impact on the existing code, adhering to the Open/Closed Principle of software development.

### 7. AppState as a Single Source of Truth:
+ Why?: Consolidating the entire app's state into a single structure simplifies state management and data flow throughout the application.
+ Benefit: Enhances predictability and debuggability of the app's behavior by centralizing state changes, making it easier to track and update the app's state in response to user actions.

This structured approach to modeling the netbank app's state is designed to leverage TypeScript's type system for ensuring correctness, facilitating clear and predictable data flow, and providing a solid foundation for developing a robust and user-friendly application.