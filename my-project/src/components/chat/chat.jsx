const chats = [
  {
    id: 1,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 2,
    avatar: "path-to-avatar-image", // Replace with the actual path to the avatar image
  },
  {
    id: 2,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 2,
    avatar: "path-to-avatar-image", // Replace with the actual path to the avatar image
  },
  // Add more chat objects here as needed
];

const ChatItem = ({ chat }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={chat.avatar} alt="avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="font-bold">{chat.name}</div>
          <div className="text-gray-600">{chat.message}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-gray-600">{chat.time}</div>
        {chat.unreadCount > 0 && (
          <div className="flex justify-center items-center bg-red-500 text-white rounded-full w-6 h-6 mt-1">
            {chat.unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="w-full bg-main-lighter rounded-lg shadow-lg overflow-hidden ">
      <div className="bg-main-color text-white text-3xl font-bold p-2.5">Chat</div>
      <div>
        {chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
