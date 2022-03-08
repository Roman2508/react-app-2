import rerenderEntireTree from '../render';

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello, how are you?', likesCount: '15' },
      { id: 2, message: "It's my first project.", likesCount: '20' },
    ],
    newPostText: "",
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

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;
