// This file focuses on the user's authentication state, including details for both logged-in and logged-out states, 
// along with the structure for user data and error handling.


// Basic user states defined
type UserState = LoggedOut | LoggedIn;

interface LoggedOut {
    type: "loggedOut";
}

interface LoggedIn {
    type: "loggedIn";
    data: UserData | null;
    error: ErrorState | null;
}

// User data structure
interface UserData {
    email: string;
    name: string;
}

// Error states defined
type ErrorState = UserSideError | ServerSideError;

interface UserSideError {
    type: "userSideError";
    message: string;
}

interface ServerSideError {
    type: "serverSideError";
    message: string;
}