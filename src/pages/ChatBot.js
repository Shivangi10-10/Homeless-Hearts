import React from "react";
import './ChatBot.css';
const ChatBot = (props) => {

 return (
    <div className="chat-bot" style={{display:(props.show)?"block":"none"}}>
        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/ac72971f-69d4-4273-b98c-a1a601a56ca9"></iframe>
    </div>
 );
};

export default ChatBot;
