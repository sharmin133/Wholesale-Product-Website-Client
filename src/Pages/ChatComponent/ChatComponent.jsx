// src/components/LiveChat.jsx
import React, { useEffect, useState } from 'react';

import { ref, push, onValue } from 'firebase/database';
import { db } from '../../Firebase/firebase.init';


const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    const msgRef = ref(db, 'chat');
    onValue(msgRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loaded = Object.values(data);
        setMessages(loaded);
      }
    });
  }, []);

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    const msgRef = ref(db, 'chat');
    push(msgRef, {
     name:'nurnahar',
      text: newMsg,
      time: new Date().toLocaleTimeString(),
    });
    setNewMsg("");
  };

  return (
    <div className="p-4 border rounded shadow w-full max-w-md bg-white">
      <h2 className="text-lg font-bold mb-2">💬 Live Chat</h2>
      <div className="h-64 overflow-y-scroll border p-2 mb-2 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1">
            <strong className="text-black">{msg.name}</strong>:{" "}
            <span className="text-black">{msg.text}</span>{" "}
            <span className="text-xs text-gray-400">({msg.time})</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          className="flex-1 border px-2 py-1 rounded text-black"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
