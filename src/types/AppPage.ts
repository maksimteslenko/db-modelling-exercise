// Dedicated to defining the structure of different pages within the app, 
// which includes the layout and state of account and support pages.

// Application pages defined
type AppPage = AccountsPage | SupportPage;

interface AccountsPage {
    type: "accounts";
    content: AccountData | null;
    loading: boolean;
    error: ErrorState | null;
}

interface SupportPage {
    type: "support";
    chatState: ChatState;
}