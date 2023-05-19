import { IoTriangle } from "react-icons/io5";

function Chat({ username, chatDate, message, colorBG }) {
    const chatColor = colorBG || "#E6E3FF";
    return (
        <div className="chat">
            <div className="user-date-time flex justify-between">
                <div className="chat__username font-semibold text-slate-600">
                    {username}
                </div>
                <div className="chat__date font-normal text-slate-400">
                    {chatDate}
                </div>
            </div>
            <div
                style={{ backgroundColor: chatColor }}
                className={`chat__message  w-fit py-3 px-3 break-all rounded mt-2 relative`}
            >
                {message}
                <div
                    style={{ color: chatColor }}
                    className={`small-polygon absolute -top-2 left-1 text-xl`}
                >
                    <IoTriangle />
                </div>
            </div>
        </div>
    );
}

export default Chat;
