const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello, how are you?', likesCount: '15' },
      { id: 2, message: "It's my first project.", likesCount: '20' },
    ],
  },
  messagesPage: {
    dialogs: [
      { name: 'Dimych', id: 1 },
      { name: 'Andrey', id: 2 },
      { name: 'Viktor', id: 3 },
      { name: 'Aleksandr', id: 4 },
      { name: 'Dmitry', id: 5 },
    ],
    messages: [
      { message: 'Hi', id: 1 },
      { message: 'How are you', id: 2 },
      { message: 'Yo', id: 3 },
    ],
  },
};

export default state;
