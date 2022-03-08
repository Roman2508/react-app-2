import { rerenderEntireTree } from "../index";

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

export const addPost = (postText) => {
  let newPost = {
    id: 3,
    message: postText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree()
};

export default state;
