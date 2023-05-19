import { useState } from "react";
import React from "react";
import { IoMdSend } from "react-icons/io";

function ChatInputs({ handleSubmit }) {
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUserName(e.target.value);
    };

    return (
        <form
            className="chatbox__inputs flex p-2 py-6"
            onSubmit={(event) => {
                handleSubmit(event, userName, message);
                setMessage("");
            }}
        >
            <div className="inputs__text flex-col flex flex-1 gap-1">
                <input
                    onChange={handleUsernameChange}
                    value={userName}
                    className="inputs__username border-b-2 outline-none h-8 px-2 hover:bg-slate-50 focus-within:border-b-[#9415B4] rounded-sm text-slate-600"
                    placeholder="Username"
                    name="username"
                />
                <input
                    onChange={handleMessageChange}
                    value={message}
                    className="inputs__message border-b-2 outline-none h-8 px-2 hover:bg-slate-50 focus-within:border-b-[#9415B4] rounded-sm text-slate-600"
                    placeholder="Message"
                    name="message"
                />
            </div>
            <div className="input__sendbtn flex items-center content-center px-2 text-[#9415B4]">
                <button className="text-2xl border-2 py-5 px-4 rounded-lg hover:border-[#9415B4]">
                    <IoMdSend />
                </button>
            </div>
        </form>
    );
}

export default ChatInputs;
