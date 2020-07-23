export function generateID() {
  return Math.floor(Math.random() * (99999 - 1) + 1);
}

export const todosDefault = [
  {
    id: generateID(),
    title: 'Step One: Eat all the candy',
    isDone: false
  },
  {
    id: generateID(),
    title: 'Step Two: ?',
    isDone: false
  },
  {
    id: generateID(),
    title: 'Step Three: Profit',
    isDone: false
  }
];
