import {itemFromBackEnd} from './ItemFromBackEnd'

export const columnsFromBackend = {
    ["Requested"]: {
      name: "Requested",
      items: itemFromBackEnd,
    },
    ["To do"]: {
      name: "To do",
      items: [],
    },
    ["In progress"]: {
      name: "In progress",
      items: [],
    },
    ["Done"]: {
      name: "Done",
      items: [],
    },
  };