import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function UnReadMessage() {
  const [messages, setMessages] = React.useState(["a", "b"]);
  return (
    <div className="mt-5 text-center">
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1 className="text-clr mb-5">
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}
        </h1>
      )}
    </div>
  );
}

// -if there are no unread messages, display"you are all caught up"
// if there are >0 unread message , you have <n> unread message
