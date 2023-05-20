import React, { useEffect, useState } from "react";
import ChatFrame from "./ChatFrame";
import { ImGithub } from "react-icons/im";
import ChatInputs from "./ChatInputs";
import Chat from "./Chat";
import axios from "axios";

function Chatbox() {
    const [chats, setChats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const backendLink = import.meta.env.VITE_BACKEND_LINK;
        fetch(`${backendLink}/chats`)
            .then((res) => {
                const jsonValue = res.json();
                return jsonValue;
            })
            .then((data) => {
                const updatedChats = data.map((chat) => {
                    const colorRandom = chat.colorBG;
                    return (
                        <Chat
                            key={chat._id}
                            username={chat.username}
                            chatDate={chat.chatDate}
                            message={chat.message}
                            colorBG={colorRandom}
                        />
                    );
                });
                setChats(updatedChats);
                setIsLoading(false);
            })
            .catch((e) => {
                console.log("Sorry, fetching operation failed.", e);
            });
    }, []);

    // -----------------------
    const handleSubmit = async (event, userName, message) => {
        event.preventDefault();

        //    ----------------------------------------------------------------
        const rawDate = new Date();
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        const chatDate = rawDate.toLocaleString("en-US", options);
        //    ----------------------------------------------------------------

        //    ----------------------------------------------------------------
        const randomNum = Math.floor(Math.random() * 5);
        const colorList = [
            "#FFF6A9",
            "#E0FFF0",
            "#BAF7FF",
            "#E6E3FF",
            "#FFE0E0",
        ];
        const colorBG = colorList[randomNum];
        //    ----------------------------------------------------------------

        const messageToSend = {
            username: userName,
            message: message,
            chatDate: chatDate,
            colorBG: colorBG,
        };

        const backendLink = import.meta.env.VITE_BACKEND_LINK;

        axios
            .post(`${backendLink}/new`, messageToSend)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                const updatedChats = data.map((chat) => {
                    return (
                        <Chat
                            key={chat._id}
                            username={chat.username}
                            chatDate={chat.chatDate}
                            message={chat.message}
                            colorBG={chat.colorBG}
                        />
                    );
                });
                setChats(updatedChats);
                setIsLoading(false);
            })
            .catch((e) => {
                console.log("Axios Error, I don't know how to handle", e);
            });
    };

    return (
        <section className="chatbox container bg-gray-50 min-h-fit min-w-[320px] w-2/5 my-2 flex-col flex rounded-lg justify-between max-h-[98vh]">
            <div className="chatbox__mention text-base flex gap-2 items-center justify-center bg-[#9415B4] text-white font-[Poppins] rounded-t-lg py-2">
                <span>Coded By Abhishek</span>
                <span>
                    <ImGithub />
                </span>
            </div>

            <div className="chatbox__header font-[Poppins] font-medium text-lg py-3 pl-4 text-slate-600">
                Mini Message Board
            </div>

            <div className="chatbox__main flex-1 min-h-[300px] overflow-y-auto px-2">
                <ChatFrame chats={chats} isLoading={isLoading} />
            </div>
            <ChatInputs handleSubmit={handleSubmit} />
        </section>
    );
}

export default Chatbox;
