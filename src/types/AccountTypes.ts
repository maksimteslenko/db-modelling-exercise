// Focuses on the financial aspects of the app, detailing the structure of user accounts and the 
// specific characteristics that differentiate regular and pocket accounts.

// Account types and their properties
type AccountData = RegularAccount[] | PocketAccount[];

interface RegularAccount {
    name: string;
    IBAN: string;
    currency: "DKK";
    amount: number;
}

interface PocketAccount {
    name: string;
    IBAN: string;
    pockets: Pocket[];
}

interface Pocket {
    currency: Currency;
    amount: number;
}

// Enum for supported currencies
type Currency = "DKK" | "SEK" | "NOK" | "USD" | "EUR";