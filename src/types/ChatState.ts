// This file is centered around the chat functionality, detailing the various 
// states the chat feature can be in, along with the structure for messages and queue status.

// Chat states and structures defined
type ChatState = ChatClosed | ChatMinimized | ChatOpen | ChatFullScreen;

interface ChatClosed {
    type: "closed";
}

interface ChatMinimized {
    type: "minimized";
    hasUpdates: boolean;
}

interface ChatOpen {
    type: "open";
    messages: Message[];
}

interface ChatFullScreen {
    type: "fullScreen";
    messages: Message[];
    queueStatus?: QueueStatus;
}

// Define message structure for chat
interface Message {
    sender: "user" | "agent";
    content: string;
    timestamp: Date;
}

// Queue status for when connecting to an agent
interface QueueStatus {
    position: number;
    busyInfo?: BusyInfo;
}

// Information about busy times
interface BusyInfo {
    times: string[];
    days: string[];
}