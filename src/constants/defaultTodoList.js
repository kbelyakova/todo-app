import ProgressType from "../enums/ProgressType";

const DEFAULT_TODO_LIST = [
  {id: 1, name: 'Реализовать поиск', description: 'Поиск по наименованию заметки', progress: ProgressType.InProgress},
  {id: 2, name: 'Созвон с командой', description: '01.09.2023 в 15:45', progress: ProgressType.Expects},
  {
    id: 3,
    name: 'Проверить почту',
    description:
      'проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту проверить почту',
    progress: ProgressType.Completed
  }
];

export default DEFAULT_TODO_LIST;