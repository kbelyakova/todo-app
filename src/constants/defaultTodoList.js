import ProgressType from "../enums/ProgressType";

const DEFAULT_TODO_LIST = [
  {id: 1, name: 'task 1', description: 'description 1', checked: false, progress: ProgressType.InProgress},
  {id: 2, name: 'task 2', description: 'description 2', checked: false, progress: ProgressType.Expects},
  {
    id: 3,
    name: 'task 3',
    description:
      'so long task description 3 so long task description so long task description ' +
      'so long task description so long task description',
    checked: true,
    progress: ProgressType.Completed
  }
];

export default DEFAULT_TODO_LIST;