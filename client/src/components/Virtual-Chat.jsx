import { useState, useEffect } from 'react';
import io from "socket.io-client";

const socket = io("/");

function App() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMessage = {
            body: message,
            from: "Me"
        }

        setMessages([...messages, newMessage]);
        console.log(message);

        socket.emit("message", message);
    }

    useEffect(() => {
        socket.on("message", receiveMessage);

        return () => socket.off("message", receiveMessage);
    }, [])

    const receiveMessage = message => setMessages((state) => [...state, message])

    return (
        <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
                <h1 className='text-2xl font-bold my-2'>React Chat</h1>
                <input
                    type="text"
                    placeholder='write your message...'
                    onChange={(e) => setMessage(e.target.value)}
                    className='border-2 border-zinc-500 p-2 w-full text-black'
                />
            <ul>
                {
                    messages.map((message, index) => (
                        <li key={index} className={`my-2 p-2 table text-sm rounded-md ${message.from === "Me" ? "bg-sky-500 ml-auto" : "bg-black"}`}><span className='text-xs text-slate-500 block'>{message.from}</span>{message.body}</li>
                    ))
                }
            </ul>
            </form>
        </div>
    )
}

export default App
