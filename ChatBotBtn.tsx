import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

interface ChatBotBtnProps {
  chatbotUrl: string;
}

function ChatBotBtn({ chatbotUrl }: ChatBotBtnProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(localStorage.getItem("theme") === "dark");
    }
  }, []);

  const buttonColor = darkMode ? "grey" : "black";

  const handleChatbotOpen = () => {
    console.log("Button clicked, opening:", chatbotUrl); // debug log

    const newWindow = window.open(chatbotUrl, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert("Popup blocked! Please allow popups for localhost.");
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: buttonColor,
        color: "#fff",
        padding: "10px 20px",
        fontSize: "17px",
        fontWeight: "bold",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "darkgrey",
        },
      }}
      onClick={handleChatbotOpen}
    >
      Chatbot
    </Button>
  );
}

export default ChatBotBtn;
