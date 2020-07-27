export function generateID() {
  return Math.floor(Math.random() * (99999 - 1) + 1);
}

export const todosDefault = [
  {
    id: generateID(),
    title: 'Step One: Eat all the candy',
    isDone: false,
    dateAdded: new Date(2020, 6, 27, 15, 0),
    dateDone: null
  },
  {
    id: generateID(),
    title: 'Step Two: ?',
    isDone: false,
    dateAdded: new Date(2020, 6, 27, 16, 0),
    dateDone: null
  },
  {
    id: generateID(),
    title: 'Step Three: Profit',
    isDone: false,
    dateAdded: new Date(2020, 6, 27, 17, 0),
    dateDone: null
  }
];
