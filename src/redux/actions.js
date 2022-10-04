const addContact = {
  type: 'addContact',
  payload: {
    id: 'Generated id',
    text: 'User entered text',
    completed: false,
  },
};

const deleteContact = {
  type: 'deleteContact',
  payload: 'id',
};

// const toggleCompleted = {
//   type: 'tasks/toggleCompleted',
//   payload: 'Task id',
// };

// const setStatusFilter = {
//   type: 'filters/setStatusFilter',
//   payload: 'Filter value',
// };
