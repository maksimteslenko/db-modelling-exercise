// Acts as the central point that brings together the entire application's state, 
// tying in user authentication, page-specific states, and chat states into a unified whole.

// The top-level application state
interface AppState {
    userState: UserState;
    activePage: AppPage;
    chatState: ChatState;
}
  
  // Usage example to represent a specific state of the application
const exampleState: AppState = {
    userState: {
        type: "loggedIn",
        data: {
            email: "user@example.com",
            name: "John Doe"
        },
        error: null
    },
    activePage: {
        type: "accounts",
        content: null, // or your accounts data AccountData
        loading: false,
        error: null
    },
    chatState: {
        type: "closed"
    }
};