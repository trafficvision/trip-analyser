import firebase, { firebaseRef } from 'firebaseAPI';

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var newTodo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(newTodo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...newTodo,
        id: todoRef.key
      }));
    });
  };
};

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};
