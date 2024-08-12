// const fsExtra = require('fs-extra');
//
// const params = {
//   "api::zamok.zamok": {
//     "1": {
//       "id": 1,
//       "createdAt": "2023-10-20T05:03:33.501Z",
//       "updatedAt": "2024-01-23T14:15:11.784Z",
//       "Name": "Замок 1",
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::wood-type.wood-type": {
//     "1": {
//       "id": 1,
//       "Name": "Дуб",
//       "createdAt": "2024-06-11T10:54:30.009Z",
//       "updatedAt": "2024-06-11T10:54:30.009Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Акация",
//       "createdAt": "2024-06-11T10:54:30.102Z",
//       "updatedAt": "2024-06-11T10:54:30.102Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Ясень",
//       "createdAt": "2024-06-11T10:54:30.187Z",
//       "updatedAt": "2024-06-11T10:54:30.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Венге",
//       "createdAt": "2024-06-11T10:54:30.267Z",
//       "updatedAt": "2024-06-11T10:54:30.267Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Сосна",
//       "createdAt": "2024-06-11T10:54:30.337Z",
//       "updatedAt": "2024-06-11T10:54:30.337Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Под камень",
//       "createdAt": "2024-06-11T10:54:30.410Z",
//       "updatedAt": "2024-06-11T10:54:30.410Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Береза",
//       "createdAt": "2024-06-11T10:54:30.475Z",
//       "updatedAt": "2024-06-11T10:54:30.475Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Гикори",
//       "createdAt": "2024-06-11T10:54:30.551Z",
//       "updatedAt": "2024-06-11T10:54:30.551Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Каштан",
//       "createdAt": "2024-06-11T10:54:30.626Z",
//       "updatedAt": "2024-06-11T10:54:30.626Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Под бетонную поверхность",
//       "createdAt": "2024-06-11T10:54:30.712Z",
//       "updatedAt": "2024-06-11T10:54:30.712Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Орех",
//       "createdAt": "2024-06-11T10:54:30.776Z",
//       "updatedAt": "2024-06-11T10:54:30.776Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Вишня",
//       "createdAt": "2024-06-11T10:54:30.862Z",
//       "updatedAt": "2024-06-11T10:54:30.862Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Ольха",
//       "createdAt": "2024-06-11T10:54:30.933Z",
//       "updatedAt": "2024-06-11T10:54:30.933Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Махагони",
//       "createdAt": "2024-06-11T10:54:31.026Z",
//       "updatedAt": "2024-06-11T10:54:31.026Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "Ель",
//       "createdAt": "2024-06-11T10:54:31.095Z",
//       "updatedAt": "2024-06-11T10:54:31.095Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "Клен",
//       "createdAt": "2024-06-11T10:54:31.178Z",
//       "updatedAt": "2024-06-11T10:54:31.178Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::weight.weight": {
//     "1": {
//       "id": 1,
//       "Name": 12,
//       "createdAt": "2024-06-11T11:00:00.558Z",
//       "updatedAt": "2024-06-11T11:00:00.558Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": 6,
//       "createdAt": "2024-06-11T11:00:00.643Z",
//       "updatedAt": "2024-06-11T11:00:00.643Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": 14,
//       "createdAt": "2024-06-11T11:00:00.731Z",
//       "updatedAt": "2024-06-11T11:00:00.731Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": 7,
//       "createdAt": "2024-06-11T11:00:00.821Z",
//       "updatedAt": "2024-06-11T11:00:00.821Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": 13,
//       "createdAt": "2024-06-11T11:00:00.892Z",
//       "updatedAt": "2024-06-11T11:00:00.892Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": 4.31,
//       "createdAt": "2024-06-11T11:00:00.963Z",
//       "updatedAt": "2024-06-11T11:00:00.963Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": 3,
//       "createdAt": "2024-06-11T11:00:01.047Z",
//       "updatedAt": "2024-06-11T11:00:01.047Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": 10,
//       "createdAt": "2024-06-11T11:00:01.122Z",
//       "updatedAt": "2024-06-11T11:00:01.122Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::vlagostoikost.vlagostoikost": {},
//   "api::visota-vorsa.visota-vorsa": {},
//   "api::view.view": {
//     "1": {
//       "id": 1,
//       "Name": "Керамогранит",
//       "createdAt": "2024-06-11T10:06:02.657Z",
//       "updatedAt": "2024-06-11T10:06:02.657Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Керамическая плитка",
//       "createdAt": "2024-06-11T10:06:02.938Z",
//       "updatedAt": "2024-06-11T10:06:02.938Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Базовая плита",
//       "createdAt": "2024-06-11T10:06:03.191Z",
//       "updatedAt": "2024-06-11T10:06:03.191Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Декор",
//       "createdAt": "2024-06-11T10:06:03.407Z",
//       "updatedAt": "2024-06-11T10:06:03.407Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Для паркета",
//       "createdAt": "2024-06-11T10:06:03.686Z",
//       "updatedAt": "2024-06-11T10:06:03.686Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Для ПВХ",
//       "createdAt": "2024-06-11T10:06:04.019Z",
//       "updatedAt": "2024-06-11T10:06:04.019Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Для линолеума",
//       "createdAt": "2024-06-11T10:06:04.303Z",
//       "updatedAt": "2024-06-11T10:06:04.303Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Контактный",
//       "createdAt": "2024-06-11T10:06:04.599Z",
//       "updatedAt": "2024-06-11T10:06:04.599Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::type-processing.type-processing": {
//     "1": {
//       "id": 1,
//       "Name": "Браш",
//       "createdAt": "2024-06-11T10:57:14.282Z",
//       "updatedAt": "2024-06-11T10:57:14.282Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::type-design.type-design": {
//     "1": {
//       "id": 1,
//       "Name": "Под дерево",
//       "createdAt": "2024-06-10T11:06:50.594Z",
//       "updatedAt": "2024-06-10T11:06:50.594Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Орнамент",
//       "createdAt": "2024-06-10T11:06:50.863Z",
//       "updatedAt": "2024-06-10T11:06:50.863Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Под паркет",
//       "createdAt": "2024-06-10T11:06:51.108Z",
//       "updatedAt": "2024-06-10T11:06:51.108Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Под мозаику",
//       "createdAt": "2024-06-10T11:06:51.388Z",
//       "updatedAt": "2024-06-10T11:06:51.388Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Флористика",
//       "createdAt": "2024-06-10T11:06:51.663Z",
//       "updatedAt": "2024-06-10T11:06:51.663Z",
//       "publishedAt": "2024-06-10T11:07:21.883Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Под мрамор и гранит",
//       "createdAt": "2024-06-10T11:06:51.891Z",
//       "updatedAt": "2024-06-10T11:06:51.891Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Под оникс",
//       "createdAt": "2024-06-10T11:06:52.137Z",
//       "updatedAt": "2024-06-10T11:06:52.137Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Под камень",
//       "createdAt": "2024-06-10T11:06:52.350Z",
//       "updatedAt": "2024-06-10T11:06:52.350Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Геометрия",
//       "createdAt": "2024-06-10T11:06:52.613Z",
//       "updatedAt": "2024-06-10T11:06:52.613Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Под ткань",
//       "createdAt": "2024-06-10T11:06:52.879Z",
//       "updatedAt": "2024-06-10T11:06:52.879Z",
//       "publishedAt": "2024-06-10T11:07:21.883Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Под обои",
//       "createdAt": "2024-06-10T11:06:53.157Z",
//       "updatedAt": "2024-06-10T11:06:53.157Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Под кожу",
//       "createdAt": "2024-06-10T11:06:53.542Z",
//       "updatedAt": "2024-06-10T11:06:53.542Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Под бетон/цемент",
//       "createdAt": "2024-06-10T11:06:53.846Z",
//       "updatedAt": "2024-06-10T11:06:53.846Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Однополосный",
//       "createdAt": "2024-06-10T11:06:54.113Z",
//       "updatedAt": "2024-06-10T11:06:54.113Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "Под бетон",
//       "createdAt": "2024-06-10T11:06:54.363Z",
//       "updatedAt": "2024-06-10T11:06:54.363Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "Под мрамор",
//       "createdAt": "2024-06-10T11:06:54.613Z",
//       "updatedAt": "2024-06-10T11:06:54.613Z",
//       "publishedAt": "2024-06-10T11:07:15.683Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": "Двухполосный",
//       "createdAt": "2024-06-10T11:06:54.834Z",
//       "updatedAt": "2024-06-10T11:06:54.834Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "Name": "Трехполосный",
//       "createdAt": "2024-06-10T11:06:55.141Z",
//       "updatedAt": "2024-06-10T11:06:55.141Z",
//       "publishedAt": "2024-06-10T11:07:21.883Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "Name": "Елочка",
//       "createdAt": "2024-06-10T11:06:55.413Z",
//       "updatedAt": "2024-06-10T11:06:55.413Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "Name": "Многополосный",
//       "createdAt": "2024-06-10T11:06:55.679Z",
//       "updatedAt": "2024-06-10T11:06:55.679Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "Name": "Под плитку",
//       "createdAt": "2024-06-10T11:06:55.955Z",
//       "updatedAt": "2024-06-10T11:06:55.955Z",
//       "publishedAt": "2024-06-10T11:07:21.883Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "Name": "Венецианская штукатурка",
//       "createdAt": "2024-06-10T11:06:56.246Z",
//       "updatedAt": "2024-06-10T11:06:56.246Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "Name": "Моноколор",
//       "createdAt": "2024-06-10T11:06:56.521Z",
//       "updatedAt": "2024-06-10T11:06:56.521Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "Name": "Другие дизайны",
//       "createdAt": "2024-06-10T11:06:56.788Z",
//       "updatedAt": "2024-06-10T11:06:56.788Z",
//       "publishedAt": "2024-06-10T11:07:08.187Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "Name": "Соль-перец",
//       "createdAt": "2024-06-10T11:06:57.063Z",
//       "updatedAt": "2024-06-10T11:06:57.063Z",
//       "publishedAt": "2024-06-10T11:07:21.883Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "Name": "Под песок",
//       "createdAt": "2024-06-10T11:06:57.330Z",
//       "updatedAt": "2024-06-10T11:06:57.330Z",
//       "publishedAt": "2024-06-10T11:07:21.883Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::type.type": {
//     "1": {
//       "id": 1,
//       "Name": "Базовая плита",
//       "createdAt": "2024-06-11T10:08:29.865Z",
//       "updatedAt": "2024-06-11T10:08:29.865Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Декор",
//       "createdAt": "2024-06-11T10:08:30.217Z",
//       "updatedAt": "2024-06-11T10:08:30.217Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Бордюр",
//       "createdAt": "2024-06-11T10:08:30.549Z",
//       "updatedAt": "2024-06-11T10:08:30.549Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Мозаика",
//       "createdAt": "2024-06-11T10:08:30.881Z",
//       "updatedAt": "2024-06-11T10:08:30.881Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Керамическая плитка",
//       "createdAt": "2024-06-11T10:08:31.175Z",
//       "updatedAt": "2024-06-11T10:08:31.175Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Керамогранит",
//       "createdAt": "2024-06-11T10:08:31.533Z",
//       "updatedAt": "2024-06-11T10:08:31.533Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Ламинат",
//       "createdAt": "2024-06-11T10:08:31.866Z",
//       "updatedAt": "2024-06-11T10:08:31.866Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Паркетная доска",
//       "createdAt": "2024-06-11T10:08:32.150Z",
//       "updatedAt": "2024-06-11T10:08:32.150Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Виниловая плитка ПВХ",
//       "createdAt": "2024-06-11T10:08:32.508Z",
//       "updatedAt": "2024-06-11T10:08:32.508Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Ламинат виниловый",
//       "createdAt": "2024-06-11T10:08:32.820Z",
//       "updatedAt": "2024-06-11T10:08:32.820Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Виниловый пол",
//       "createdAt": "2024-06-11T10:08:33.150Z",
//       "updatedAt": "2024-06-11T10:08:33.150Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Подложка",
//       "createdAt": "2024-06-11T10:08:33.495Z",
//       "updatedAt": "2024-06-11T10:08:33.495Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Клей для напольных покрытий",
//       "createdAt": "2024-06-11T10:08:33.749Z",
//       "updatedAt": "2024-06-11T10:08:33.749Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Линолеум бытовой",
//       "createdAt": "2024-06-11T10:08:34.058Z",
//       "updatedAt": "2024-06-11T10:08:34.058Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "Коммерческий гетерогенный линолеум",
//       "createdAt": "2024-06-11T10:08:34.776Z",
//       "updatedAt": "2024-06-11T10:08:34.776Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "Ковролин",
//       "createdAt": "2024-06-11T10:08:35.201Z",
//       "updatedAt": "2024-06-11T10:08:35.201Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": "Линолеум полукоммерческий",
//       "createdAt": "2024-06-11T10:08:35.533Z",
//       "updatedAt": "2024-06-11T10:08:35.533Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "Name": "Линолеум бытовой, коммерческий",
//       "createdAt": "2024-06-11T10:08:35.875Z",
//       "updatedAt": "2024-06-11T10:08:35.875Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "Name": "Искусственная трава",
//       "createdAt": "2024-06-11T10:08:36.170Z",
//       "updatedAt": "2024-06-11T10:08:36.170Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::surface.surface": {
//     "1": {
//       "id": 1,
//       "Name": "ректификат",
//       "createdAt": "2024-06-11T10:21:48.638Z",
//       "updatedAt": "2024-06-11T10:21:48.638Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "глазурованная",
//       "createdAt": "2024-06-11T10:21:49.001Z",
//       "updatedAt": "2024-06-11T10:21:49.001Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "матовая",
//       "createdAt": "2024-06-11T10:21:49.266Z",
//       "updatedAt": "2024-06-11T10:21:49.266Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "неполированная",
//       "createdAt": "2024-06-11T10:21:49.596Z",
//       "updatedAt": "2024-06-11T10:21:49.596Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "лаппатированная",
//       "createdAt": "2024-06-11T10:21:49.890Z",
//       "updatedAt": "2024-06-11T10:21:49.890Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "глянцевая",
//       "createdAt": "2024-06-11T10:21:50.204Z",
//       "updatedAt": "2024-06-11T10:21:50.204Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "рельефная",
//       "createdAt": "2024-06-11T10:21:50.458Z",
//       "updatedAt": "2024-06-11T10:21:50.458Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "антискольжение",
//       "createdAt": "2024-06-11T10:21:50.746Z",
//       "updatedAt": "2024-06-11T10:21:50.746Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "полированная",
//       "createdAt": "2024-06-11T10:21:51.025Z",
//       "updatedAt": "2024-06-11T10:21:51.025Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Матовая",
//       "createdAt": "2024-06-11T10:21:51.271Z",
//       "updatedAt": "2024-06-11T10:21:51.271Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Глянцевая",
//       "createdAt": "2024-06-11T10:21:51.546Z",
//       "updatedAt": "2024-06-11T10:21:51.546Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Ровная",
//       "createdAt": "2024-06-11T10:21:51.863Z",
//       "updatedAt": "2024-06-11T10:21:51.863Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Рельефная",
//       "createdAt": "2024-06-11T10:21:52.148Z",
//       "updatedAt": "2024-06-11T10:21:52.148Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Глазурованная",
//       "createdAt": "2024-06-11T10:21:52.446Z",
//       "updatedAt": "2024-06-11T10:21:52.446Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "браш",
//       "createdAt": "2024-06-11T10:21:52.699Z",
//       "updatedAt": "2024-06-11T10:21:52.699Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "структурная поверхность",
//       "createdAt": "2024-06-11T10:21:53.004Z",
//       "updatedAt": "2024-06-11T10:21:53.004Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": "синхронное тиснение",
//       "createdAt": "2024-06-11T10:21:53.315Z",
//       "updatedAt": "2024-06-11T10:21:53.315Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "Name": "тиснение в регистр",
//       "createdAt": "2024-06-11T10:21:53.637Z",
//       "updatedAt": "2024-06-11T10:21:53.637Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "Name": "Лак",
//       "createdAt": "2024-06-11T10:21:53.912Z",
//       "updatedAt": "2024-06-11T10:21:53.912Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "Name": "Ректификат",
//       "createdAt": "2024-06-11T10:21:54.174Z",
//       "updatedAt": "2024-06-11T10:21:54.174Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "Name": "Лаппатированная",
//       "createdAt": "2024-06-11T10:21:54.458Z",
//       "updatedAt": "2024-06-11T10:21:54.458Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::shirina.shirina": {
//     "4": {
//       "id": 4,
//       "createdAt": "2024-06-11T10:14:51.264Z",
//       "updatedAt": "2024-06-11T10:14:51.264Z",
//       "Name": 200,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "createdAt": "2024-06-11T10:14:51.584Z",
//       "updatedAt": "2024-06-11T10:14:51.584Z",
//       "Name": 300,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "createdAt": "2024-06-11T10:14:51.892Z",
//       "updatedAt": "2024-06-11T10:14:51.892Z",
//       "Name": 600,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "createdAt": "2024-06-11T10:14:52.183Z",
//       "updatedAt": "2024-06-11T10:14:52.183Z",
//       "Name": 400,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "createdAt": "2024-06-11T10:14:52.474Z",
//       "updatedAt": "2024-06-11T10:14:52.474Z",
//       "Name": 250,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "createdAt": "2024-06-11T10:14:52.775Z",
//       "updatedAt": "2024-06-11T10:14:52.775Z",
//       "Name": 35,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "createdAt": "2024-06-11T10:14:53.066Z",
//       "updatedAt": "2024-06-11T10:14:53.066Z",
//       "Name": 280,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "createdAt": "2024-06-11T10:14:53.375Z",
//       "updatedAt": "2024-06-11T10:14:53.375Z",
//       "Name": 60,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "createdAt": "2024-06-11T10:14:53.666Z",
//       "updatedAt": "2024-06-11T10:14:53.666Z",
//       "Name": 90,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "createdAt": "2024-06-11T10:14:53.992Z",
//       "updatedAt": "2024-06-11T10:14:53.992Z",
//       "Name": 50,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "createdAt": "2024-06-11T10:14:54.300Z",
//       "updatedAt": "2024-06-11T10:14:54.300Z",
//       "Name": 500,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "createdAt": "2024-06-11T10:14:54.584Z",
//       "updatedAt": "2024-06-11T10:14:54.584Z",
//       "Name": 75,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "createdAt": "2024-06-11T10:14:54.883Z",
//       "updatedAt": "2024-06-11T10:14:54.883Z",
//       "Name": 327,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "createdAt": "2024-06-11T10:14:55.158Z",
//       "updatedAt": "2024-06-11T10:14:55.158Z",
//       "Name": 125,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "createdAt": "2024-06-11T10:14:55.424Z",
//       "updatedAt": "2024-06-11T10:14:55.424Z",
//       "Name": 100,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "createdAt": "2024-06-11T10:14:55.741Z",
//       "updatedAt": "2024-06-11T10:14:55.741Z",
//       "Name": 385,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "createdAt": "2024-06-11T10:14:56.041Z",
//       "updatedAt": "2024-06-11T10:14:56.041Z",
//       "Name": 450,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "createdAt": "2024-06-11T10:14:56.358Z",
//       "updatedAt": "2024-06-11T10:14:56.358Z",
//       "Name": 154.5,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "createdAt": "2024-06-11T10:14:56.675Z",
//       "updatedAt": "2024-06-11T10:14:56.675Z",
//       "Name": 189,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "createdAt": "2024-06-11T10:14:56.957Z",
//       "updatedAt": "2024-06-11T10:14:56.957Z",
//       "Name": 191,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "createdAt": "2024-06-11T10:14:57.232Z",
//       "updatedAt": "2024-06-11T10:14:57.232Z",
//       "Name": 192,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "createdAt": "2024-06-11T10:14:57.525Z",
//       "updatedAt": "2024-06-11T10:14:57.525Z",
//       "Name": 158,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "createdAt": "2024-06-11T10:14:57.874Z",
//       "updatedAt": "2024-06-11T10:14:57.874Z",
//       "Name": 193,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "27": {
//       "id": 27,
//       "createdAt": "2024-06-11T10:14:58.177Z",
//       "updatedAt": "2024-06-11T10:14:58.177Z",
//       "Name": 246,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "28": {
//       "id": 28,
//       "createdAt": "2024-06-11T10:14:58.492Z",
//       "updatedAt": "2024-06-11T10:14:58.492Z",
//       "Name": 195,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "29": {
//       "id": 29,
//       "createdAt": "2024-06-11T10:14:58.809Z",
//       "updatedAt": "2024-06-11T10:14:58.809Z",
//       "Name": 159,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "30": {
//       "id": 30,
//       "createdAt": "2024-06-11T10:14:59.125Z",
//       "updatedAt": "2024-06-11T10:14:59.125Z",
//       "Name": 194,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "31": {
//       "id": 31,
//       "createdAt": "2024-06-11T10:14:59.450Z",
//       "updatedAt": "2024-06-11T10:14:59.450Z",
//       "Name": 402,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "32": {
//       "id": 32,
//       "createdAt": "2024-06-11T10:14:59.741Z",
//       "updatedAt": "2024-06-11T10:14:59.741Z",
//       "Name": 120,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "33": {
//       "id": 33,
//       "createdAt": "2024-06-11T10:15:00.600Z",
//       "updatedAt": "2024-06-11T10:15:00.600Z",
//       "Name": 140,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "34": {
//       "id": 34,
//       "createdAt": "2024-06-11T10:15:00.950Z",
//       "updatedAt": "2024-06-11T10:15:00.950Z",
//       "Name": 180,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "35": {
//       "id": 35,
//       "createdAt": "2024-06-11T10:15:01.291Z",
//       "updatedAt": "2024-06-11T10:15:01.291Z",
//       "Name": 183,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "36": {
//       "id": 36,
//       "createdAt": "2024-06-11T10:15:01.567Z",
//       "updatedAt": "2024-06-11T10:15:01.567Z",
//       "Name": 184,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "37": {
//       "id": 37,
//       "createdAt": "2024-06-11T10:15:01.834Z",
//       "updatedAt": "2024-06-11T10:15:01.834Z",
//       "Name": 152.4,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "38": {
//       "id": 38,
//       "createdAt": "2024-06-11T10:15:02.103Z",
//       "updatedAt": "2024-06-11T10:15:02.103Z",
//       "Name": 200.8,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "39": {
//       "id": 39,
//       "createdAt": "2024-06-11T10:15:02.401Z",
//       "updatedAt": "2024-06-11T10:15:02.401Z",
//       "Name": 225,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "40": {
//       "id": 40,
//       "createdAt": "2024-06-11T10:15:02.700Z",
//       "updatedAt": "2024-06-11T10:15:02.700Z",
//       "Name": 457.2,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "41": {
//       "id": 41,
//       "createdAt": "2024-06-11T10:15:03.001Z",
//       "updatedAt": "2024-06-11T10:15:03.001Z",
//       "Name": 305,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "42": {
//       "id": 42,
//       "createdAt": "2024-06-11T10:15:03.309Z",
//       "updatedAt": "2024-06-11T10:15:03.309Z",
//       "Name": 310,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "43": {
//       "id": 43,
//       "createdAt": "2024-06-11T10:15:03.609Z",
//       "updatedAt": "2024-06-11T10:15:03.609Z",
//       "Name": 128,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "44": {
//       "id": 44,
//       "createdAt": "2024-06-11T10:15:03.942Z",
//       "updatedAt": "2024-06-11T10:15:03.942Z",
//       "Name": 1000,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "45": {
//       "id": 45,
//       "createdAt": "2024-06-11T10:15:04.251Z",
//       "updatedAt": "2024-06-11T10:15:04.251Z",
//       "Name": 116,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "46": {
//       "id": 46,
//       "createdAt": "2024-06-11T10:15:04.526Z",
//       "updatedAt": "2024-06-11T10:15:04.526Z",
//       "Name": 244,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "47": {
//       "id": 47,
//       "createdAt": "2024-06-11T10:15:04.778Z",
//       "updatedAt": "2024-06-11T10:15:04.778Z",
//       "Name": 210,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "48": {
//       "id": 48,
//       "createdAt": "2024-06-11T10:15:05.101Z",
//       "updatedAt": "2024-06-11T10:15:05.101Z",
//       "Name": 172,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "49": {
//       "id": 49,
//       "createdAt": "2024-06-11T10:15:05.409Z",
//       "updatedAt": "2024-06-11T10:15:05.409Z",
//       "Name": 122,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "50": {
//       "id": 50,
//       "createdAt": "2024-06-11T10:15:05.709Z",
//       "updatedAt": "2024-06-11T10:15:05.709Z",
//       "Name": 102,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "51": {
//       "id": 51,
//       "createdAt": "2024-06-11T10:15:06.008Z",
//       "updatedAt": "2024-06-11T10:15:06.008Z",
//       "Name": 304.8,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "52": {
//       "id": 52,
//       "createdAt": "2024-06-11T10:15:06.292Z",
//       "updatedAt": "2024-06-11T10:15:06.292Z",
//       "Name": 131,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "53": {
//       "id": 53,
//       "createdAt": "2024-06-11T10:15:06.616Z",
//       "updatedAt": "2024-06-11T10:15:06.616Z",
//       "Name": 160,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "54": {
//       "id": 54,
//       "createdAt": "2024-06-11T10:15:06.926Z",
//       "updatedAt": "2024-06-11T10:15:06.926Z",
//       "Name": 150,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::settings-product.settings-product": {
//     "1": {
//       "id": 1,
//       "dostavka": "Доставка текст",
//       "uslugi": "Услуги текст",
//       "oplata": "Оплата текст",
//       "createdAt": "2023-09-07T07:44:13.910Z",
//       "updatedAt": "2023-09-07T07:44:13.910Z",
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::settings-cart.settings-cart": {
//     "1": {
//       "id": 1,
//       "createdAt": "2023-09-26T06:07:13.471Z",
//       "updatedAt": "2023-09-26T06:07:13.471Z",
//       "samovivoz": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::setting-rulon.setting-rulon": {},
//   "api::rulon-width.rulon-width": {
//     "1": {
//       "id": 1,
//       "Value": 200,
//       "createdAt": "2023-12-22T07:09:56.320Z",
//       "updatedAt": "2024-01-21T09:27:52.761Z",
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Value": 250,
//       "createdAt": "2023-12-22T07:10:07.587Z",
//       "updatedAt": "2024-01-21T09:27:58.765Z",
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Value": 300,
//       "createdAt": "2023-12-22T07:10:13.517Z",
//       "updatedAt": "2024-01-21T09:28:02.611Z",
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Value": 350,
//       "createdAt": "2023-12-22T07:10:19.077Z",
//       "updatedAt": "2024-01-21T09:28:07.830Z",
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::rulon-slicing.rulon-slicing": {},
//   "api::rulon-length.rulon-length": {
//     "1": {
//       "id": 1,
//       "Value": 25,
//       "createdAt": "2023-12-22T07:10:29.883Z",
//       "updatedAt": "2023-12-22T07:10:29.883Z",
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Value": 50,
//       "createdAt": "2023-12-22T07:10:35.064Z",
//       "updatedAt": "2023-12-22T07:10:35.064Z",
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::room.room": {
//     "1": {
//       "id": 1,
//       "Name": "В ванную",
//       "createdAt": "2024-06-11T10:37:19.282Z",
//       "updatedAt": "2024-06-11T10:37:19.282Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "В кухню",
//       "createdAt": "2024-06-11T10:37:19.623Z",
//       "updatedAt": "2024-06-11T10:37:19.623Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "В туалет",
//       "createdAt": "2024-06-11T10:37:19.956Z",
//       "updatedAt": "2024-06-11T10:37:19.956Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "В гостиную",
//       "createdAt": "2024-06-11T10:37:20.338Z",
//       "updatedAt": "2024-06-11T10:37:20.338Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "В коридор",
//       "createdAt": "2024-06-11T10:37:20.646Z",
//       "updatedAt": "2024-06-11T10:37:20.646Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "В прихожую",
//       "createdAt": "2024-06-11T10:37:20.936Z",
//       "updatedAt": "2024-06-11T10:37:20.936Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "В комнату",
//       "createdAt": "2024-06-11T10:37:21.263Z",
//       "updatedAt": "2024-06-11T10:37:21.263Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::propertie.propertie": {
//     "1": {
//       "id": 1,
//       "Name": "Морозостойкость",
//       "createdAt": "2024-06-11T10:24:55.666Z",
//       "updatedAt": "2024-06-11T10:24:55.666Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Влагостойкость",
//       "createdAt": "2024-06-11T10:24:55.926Z",
//       "updatedAt": "2024-06-11T10:24:55.926Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "для теплых полов",
//       "createdAt": "2024-06-11T10:24:56.165Z",
//       "updatedAt": "2024-06-11T10:24:56.165Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Для теплых полов",
//       "createdAt": "2024-06-11T10:24:56.509Z",
//       "updatedAt": "2024-06-11T10:24:56.509Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "с фаской",
//       "createdAt": "2024-06-11T10:24:56.757Z",
//       "updatedAt": "2024-06-11T10:24:56.757Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "замок",
//       "createdAt": "2024-06-11T10:24:57.017Z",
//       "updatedAt": "2024-06-11T10:24:57.017Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "низкая истираемость",
//       "createdAt": "2024-06-11T10:24:57.283Z",
//       "updatedAt": "2024-06-11T10:24:57.283Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "устойчивость к ножкам мебели",
//       "createdAt": "2024-06-11T10:24:57.523Z",
//       "updatedAt": "2024-06-11T10:24:57.523Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "доп. защитное покрытие",
//       "createdAt": "2024-06-11T10:24:57.784Z",
//       "updatedAt": "2024-06-11T10:24:57.784Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "устойчив к роликовым креслам",
//       "createdAt": "2024-06-11T10:24:58.023Z",
//       "updatedAt": "2024-06-11T10:24:58.023Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "клеевое соединение",
//       "createdAt": "2024-06-11T10:24:58.284Z",
//       "updatedAt": "2024-06-11T10:24:58.284Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Термостойкость",
//       "createdAt": "2024-06-11T10:24:58.507Z",
//       "updatedAt": "2024-06-11T10:24:58.507Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Универсальность",
//       "createdAt": "2024-06-11T10:24:58.792Z",
//       "updatedAt": "2024-06-11T10:24:58.792Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "С фаской",
//       "createdAt": "2024-06-11T10:24:59.058Z",
//       "updatedAt": "2024-06-11T10:24:59.058Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "Замок",
//       "createdAt": "2024-06-11T10:24:59.325Z",
//       "updatedAt": "2024-06-11T10:24:59.325Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "Низкая истираемость",
//       "createdAt": "2024-06-11T10:24:59.592Z",
//       "updatedAt": "2024-06-11T10:24:59.592Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::product.product": {
//     "2738": {
//       "id": 2738,
//       "Name": "asd",
//       "Desc": null,
//       "Price": null,
//       "Price_Sale": null,
//       "createdAt": "2024-06-11T12:41:36.433Z",
//       "updatedAt": "2024-06-11T12:41:36.433Z",
//       "Cat__s": null,
//       "ART": null,
//       "categories": null,
//       "Attr": null,
//       "IMG": null,
//       "brand": null,
//       "collection": null,
//       "class_h": null,
//       "class_p": null,
//       "country": null,
//       "Connected_P": null,
//       "Rulon": null,
//       "calc_type": null,
//       "klass_pozharnoj": null,
//       "namotka": null,
//       "obshhaya_tolshhina": null,
//       "proizvoditel": null,
//       "faska": null,
//       "czveta": null,
//       "shirina": null,
//       "zashitniy_sloy": null,
//       "vlagostoikost": null,
//       "visota_vorsa": null,
//       "Slicing": null,
//       "type_designs": null,
//       "views": null,
//       "types": null,
//       "length": null,
//       "surfaces": null,
//       "properties": null,
//       "appointments": null,
//       "abrasions": null,
//       "forms": null,
//       "formats": null,
//       "rooms": null,
//       "dimensions": null,
//       "color_spectrums": null,
//       "connection_types": null,
//       "lock_connections": null,
//       "bases": null,
//       "wood_types": null,
//       "gloss_levels": null,
//       "type_processings": null,
//       "materials": null,
//       "weight": null,
//       "packages": null,
//       "destination_materials": null,
//       "componentialities": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::package.package": {
//     "1": {
//       "id": 1,
//       "Name": "Ведро",
//       "createdAt": "2024-06-11T11:01:29.662Z",
//       "updatedAt": "2024-06-11T11:01:29.662Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::order.order": {
//     "1": {
//       "id": 1,
//       "UID": "order",
//       "Summ": 1000,
//       "createdAt": "2023-09-08T17:09:01.059Z",
//       "updatedAt": "2023-09-08T17:09:01.059Z",
//       "Order_product": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::ob-toshina.ob-toshina": {
//     "1": {
//       "id": 1,
//       "Name": 8,
//       "createdAt": "2024-06-11T10:19:22.421Z",
//       "updatedAt": "2024-06-11T10:19:22.421Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": 9,
//       "createdAt": "2024-06-11T10:19:22.799Z",
//       "updatedAt": "2024-06-11T10:19:22.799Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": 10.5,
//       "createdAt": "2024-06-11T10:19:23.080Z",
//       "updatedAt": "2024-06-11T10:19:23.080Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": 8.5,
//       "createdAt": "2024-06-11T10:19:23.360Z",
//       "updatedAt": "2024-06-11T10:19:23.360Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": 9.5,
//       "createdAt": "2024-06-11T10:19:23.589Z",
//       "updatedAt": "2024-06-11T10:19:23.589Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": 7,
//       "createdAt": "2024-06-11T10:19:23.881Z",
//       "updatedAt": "2024-06-11T10:19:23.881Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": 10,
//       "createdAt": "2024-06-11T10:19:24.173Z",
//       "updatedAt": "2024-06-11T10:19:24.173Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": 0,
//       "createdAt": "2024-06-11T10:19:24.449Z",
//       "updatedAt": "2024-06-11T10:19:24.449Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": 12,
//       "createdAt": "2024-06-11T10:19:24.698Z",
//       "updatedAt": "2024-06-11T10:19:24.698Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": 14,
//       "createdAt": "2024-06-11T10:19:24.966Z",
//       "updatedAt": "2024-06-11T10:19:24.966Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": 13.2,
//       "createdAt": "2024-06-11T10:19:25.240Z",
//       "updatedAt": "2024-06-11T10:19:25.240Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": 3.5,
//       "createdAt": "2024-06-11T10:19:25.540Z",
//       "updatedAt": "2024-06-11T10:19:25.540Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": 4,
//       "createdAt": "2024-06-11T10:19:25.793Z",
//       "updatedAt": "2024-06-11T10:19:25.793Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": 4.5,
//       "createdAt": "2024-06-11T10:19:26.056Z",
//       "updatedAt": "2024-06-11T10:19:26.056Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": 3.6,
//       "createdAt": "2024-06-11T10:19:26.323Z",
//       "updatedAt": "2024-06-11T10:19:26.323Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": 3,
//       "createdAt": "2024-06-11T10:19:26.570Z",
//       "updatedAt": "2024-06-11T10:19:26.570Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": 2.1,
//       "createdAt": "2024-06-11T10:19:26.873Z",
//       "updatedAt": "2024-06-11T10:19:26.873Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "Name": 4.4,
//       "createdAt": "2024-06-11T10:19:27.207Z",
//       "updatedAt": "2024-06-11T10:19:27.207Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "Name": 4.6,
//       "createdAt": "2024-06-11T10:19:27.481Z",
//       "updatedAt": "2024-06-11T10:19:27.481Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "Name": 1.5,
//       "createdAt": "2024-06-11T10:19:27.726Z",
//       "updatedAt": "2024-06-11T10:19:27.726Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "Name": 3.7,
//       "createdAt": "2024-06-11T10:19:27.989Z",
//       "updatedAt": "2024-06-11T10:19:27.989Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "Name": 1.8,
//       "createdAt": "2024-06-11T10:19:28.273Z",
//       "updatedAt": "2024-06-11T10:19:28.273Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "Name": 3.3,
//       "createdAt": "2024-06-11T10:19:28.540Z",
//       "updatedAt": "2024-06-11T10:19:28.540Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "Name": 2,
//       "createdAt": "2024-06-11T10:19:28.815Z",
//       "updatedAt": "2024-06-11T10:19:28.815Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "Name": 2.5,
//       "createdAt": "2024-06-11T10:19:29.059Z",
//       "updatedAt": "2024-06-11T10:19:29.059Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "Name": 3.85,
//       "createdAt": "2024-06-11T10:19:29.343Z",
//       "updatedAt": "2024-06-11T10:19:29.343Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "27": {
//       "id": 27,
//       "Name": 17,
//       "createdAt": "2024-06-11T10:19:29.640Z",
//       "updatedAt": "2024-06-11T10:19:29.640Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "28": {
//       "id": 28,
//       "Name": 23,
//       "createdAt": "2024-06-11T10:19:29.940Z",
//       "updatedAt": "2024-06-11T10:19:29.940Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "29": {
//       "id": 29,
//       "Name": 20,
//       "createdAt": "2024-06-11T10:19:30.214Z",
//       "updatedAt": "2024-06-11T10:19:30.214Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "30": {
//       "id": 30,
//       "Name": 13,
//       "createdAt": "2024-06-11T10:19:30.507Z",
//       "updatedAt": "2024-06-11T10:19:30.507Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "31": {
//       "id": 31,
//       "Name": 6,
//       "createdAt": "2024-06-11T10:19:30.772Z",
//       "updatedAt": "2024-06-11T10:19:30.772Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "32": {
//       "id": 32,
//       "Name": 11,
//       "createdAt": "2024-06-11T10:19:31.193Z",
//       "updatedAt": "2024-06-11T10:19:31.193Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "33": {
//       "id": 33,
//       "Name": 16,
//       "createdAt": "2024-06-11T10:19:31.499Z",
//       "updatedAt": "2024-06-11T10:19:31.499Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "34": {
//       "id": 34,
//       "Name": 13.5,
//       "createdAt": "2024-06-11T10:19:31.764Z",
//       "updatedAt": "2024-06-11T10:19:31.764Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "35": {
//       "id": 35,
//       "Name": 14.5,
//       "createdAt": "2024-06-11T10:19:32.026Z",
//       "updatedAt": "2024-06-11T10:19:32.026Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "36": {
//       "id": 36,
//       "Name": 12.5,
//       "createdAt": "2024-06-11T10:19:32.276Z",
//       "updatedAt": "2024-06-11T10:19:32.276Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "37": {
//       "id": 37,
//       "Name": 15,
//       "createdAt": "2024-06-11T10:19:32.565Z",
//       "updatedAt": "2024-06-11T10:19:32.565Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "38": {
//       "id": 38,
//       "Name": 18.5,
//       "createdAt": "2024-06-11T10:19:32.823Z",
//       "updatedAt": "2024-06-11T10:19:32.823Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "39": {
//       "id": 39,
//       "Name": 11.5,
//       "createdAt": "2024-06-11T10:19:33.090Z",
//       "updatedAt": "2024-06-11T10:19:33.090Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "40": {
//       "id": 40,
//       "Name": 15.5,
//       "createdAt": "2024-06-11T10:19:33.348Z",
//       "updatedAt": "2024-06-11T10:19:33.348Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "41": {
//       "id": 41,
//       "Name": 22.5,
//       "createdAt": "2024-06-11T10:19:33.627Z",
//       "updatedAt": "2024-06-11T10:19:33.627Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "42": {
//       "id": 42,
//       "Name": 5,
//       "createdAt": "2024-06-11T10:19:33.949Z",
//       "updatedAt": "2024-06-11T10:19:33.949Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "43": {
//       "id": 43,
//       "Name": 32,
//       "createdAt": "2024-06-11T10:19:34.219Z",
//       "updatedAt": "2024-06-11T10:19:34.219Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "44": {
//       "id": 44,
//       "Name": 21,
//       "createdAt": "2024-06-11T10:19:34.506Z",
//       "updatedAt": "2024-06-11T10:19:34.506Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "45": {
//       "id": 45,
//       "Name": 30,
//       "createdAt": "2024-06-11T10:19:34.777Z",
//       "updatedAt": "2024-06-11T10:19:34.777Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::namotka-n.namotka-n": {},
//   "api::material.material": {
//     "1": {
//       "id": 1,
//       "Name": "Экструзионный пенополистирол (XPS)",
//       "createdAt": "2024-06-11T10:58:24.544Z",
//       "updatedAt": "2024-06-11T10:58:24.544Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::manufacturer.manufacturer": {
//     "6": {
//       "id": 6,
//       "createdAt": "2024-06-10T10:58:51.729Z",
//       "updatedAt": "2024-06-10T10:58:51.729Z",
//       "Name": "Lasselsberger",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "createdAt": "2024-06-10T10:58:52.030Z",
//       "updatedAt": "2024-06-10T10:58:52.030Z",
//       "Name": "Axima",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "createdAt": "2024-06-10T10:58:52.343Z",
//       "updatedAt": "2024-06-10T10:58:52.343Z",
//       "Name": "Beryoza Ceramica",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "createdAt": "2024-06-10T10:58:52.651Z",
//       "updatedAt": "2024-06-10T10:58:52.651Z",
//       "Name": "Нефрит-Керамика",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "createdAt": "2024-06-10T10:58:52.930Z",
//       "updatedAt": "2024-06-10T10:58:52.930Z",
//       "Name": "Primavera",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "createdAt": "2024-06-10T10:58:53.201Z",
//       "updatedAt": "2024-06-10T10:58:53.201Z",
//       "Name": "AGT",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "createdAt": "2024-06-10T10:58:53.438Z",
//       "updatedAt": "2024-06-10T10:58:53.438Z",
//       "Name": "Classen",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "createdAt": "2024-06-10T10:58:53.734Z",
//       "updatedAt": "2024-06-10T10:58:53.734Z",
//       "Name": "Egger",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "createdAt": "2024-06-10T10:58:54.035Z",
//       "updatedAt": "2024-06-10T10:58:54.035Z",
//       "Name": "WoodStyle",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "createdAt": "2024-06-10T10:58:54.334Z",
//       "updatedAt": "2024-06-10T10:58:54.334Z",
//       "Name": "Kastamonu",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "createdAt": "2024-06-10T10:58:54.945Z",
//       "updatedAt": "2024-06-10T10:58:54.945Z",
//       "Name": "Kronospan",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "createdAt": "2024-06-10T10:58:55.415Z",
//       "updatedAt": "2024-06-10T10:58:55.415Z",
//       "Name": "Sensa",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "createdAt": "2024-06-10T10:58:55.697Z",
//       "updatedAt": "2024-06-10T10:58:55.697Z",
//       "Name": "Tarkett",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "createdAt": "2024-06-10T10:58:55.976Z",
//       "updatedAt": "2024-06-10T10:58:55.976Z",
//       "Name": "Sinteros",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "createdAt": "2024-06-10T10:58:56.221Z",
//       "updatedAt": "2024-06-10T10:58:56.221Z",
//       "Name": "Royce",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "createdAt": "2024-06-10T10:58:56.468Z",
//       "updatedAt": "2024-06-10T10:58:56.468Z",
//       "Name": "Zeta",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "createdAt": "2024-06-10T10:58:56.842Z",
//       "updatedAt": "2024-06-10T10:58:56.842Z",
//       "Name": "Betta",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "createdAt": "2024-06-10T10:58:57.201Z",
//       "updatedAt": "2024-06-10T10:58:57.201Z",
//       "Name": "Солид",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "createdAt": "2024-06-10T10:58:57.476Z",
//       "updatedAt": "2024-06-10T10:58:57.476Z",
//       "Name": "Homa",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "createdAt": "2024-06-10T10:58:57.751Z",
//       "updatedAt": "2024-06-10T10:58:57.751Z",
//       "Name": "Forbo-BS",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "createdAt": "2024-06-10T10:58:58.021Z",
//       "updatedAt": "2024-06-10T10:58:58.021Z",
//       "Name": "Kronostar",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "27": {
//       "id": 27,
//       "createdAt": "2024-06-10T10:58:58.318Z",
//       "updatedAt": "2024-06-10T10:58:58.318Z",
//       "Name": "Alsapan Alsafloor",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "28": {
//       "id": 28,
//       "createdAt": "2024-06-10T10:58:58.601Z",
//       "updatedAt": "2024-06-10T10:58:58.601Z",
//       "Name": "Bonkeel",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "29": {
//       "id": 29,
//       "createdAt": "2024-06-10T10:58:58.876Z",
//       "updatedAt": "2024-06-10T10:58:58.876Z",
//       "Name": "CronaFloor",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "30": {
//       "id": 30,
//       "createdAt": "2024-06-10T10:58:59.143Z",
//       "updatedAt": "2024-06-10T10:58:59.143Z",
//       "Name": "Зартекс",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "31": {
//       "id": 31,
//       "createdAt": "2024-06-10T10:58:59.451Z",
//       "updatedAt": "2024-06-10T10:58:59.451Z",
//       "Name": "AW Masquerade",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "32": {
//       "id": 32,
//       "createdAt": "2024-06-10T10:58:59.701Z",
//       "updatedAt": "2024-06-10T10:58:59.701Z",
//       "Name": "Urggazcarpet",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "33": {
//       "id": 33,
//       "createdAt": "2024-06-10T10:58:59.985Z",
//       "updatedAt": "2024-06-10T10:58:59.985Z",
//       "Name": "Sintelon",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "34": {
//       "id": 34,
//       "createdAt": "2024-06-10T10:59:00.272Z",
//       "updatedAt": "2024-06-10T10:59:00.272Z",
//       "Name": "Нева Тафт",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "35": {
//       "id": 35,
//       "createdAt": "2024-06-10T10:59:00.530Z",
//       "updatedAt": "2024-06-10T10:59:00.530Z",
//       "Name": "Витебские Ковры",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "36": {
//       "id": 36,
//       "createdAt": "2024-06-10T10:59:00.826Z",
//       "updatedAt": "2024-06-10T10:59:00.826Z",
//       "Name": "Carpetoff",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "37": {
//       "id": 37,
//       "createdAt": "2024-06-10T10:59:01.135Z",
//       "updatedAt": "2024-06-10T10:59:01.135Z",
//       "Name": "Oz Kaplan",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "38": {
//       "id": 38,
//       "createdAt": "2024-06-10T10:59:01.451Z",
//       "updatedAt": "2024-06-10T10:59:01.451Z",
//       "Name": "Kaplanser",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "39": {
//       "id": 39,
//       "createdAt": "2024-06-10T10:59:01.768Z",
//       "updatedAt": "2024-06-10T10:59:01.768Z",
//       "Name": "Associated Weawers (AW)",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "40": {
//       "id": 40,
//       "createdAt": "2024-06-10T10:59:02.060Z",
//       "updatedAt": "2024-06-10T10:59:02.060Z",
//       "Name": "Plato Hali",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "41": {
//       "id": 41,
//       "createdAt": "2024-06-10T10:59:02.393Z",
//       "updatedAt": "2024-06-10T10:59:02.393Z",
//       "Name": "Merinos",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "42": {
//       "id": 42,
//       "createdAt": "2024-06-10T10:59:02.705Z",
//       "updatedAt": "2024-06-10T10:59:02.705Z",
//       "Name": "Safyun",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "43": {
//       "id": 43,
//       "createdAt": "2024-06-10T10:59:03.010Z",
//       "updatedAt": "2024-06-10T10:59:03.010Z",
//       "Name": "Filoteks",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "44": {
//       "id": 44,
//       "createdAt": "2024-06-10T10:59:03.320Z",
//       "updatedAt": "2024-06-10T10:59:03.320Z",
//       "Name": "Mers",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "45": {
//       "id": 45,
//       "createdAt": "2024-06-10T10:59:03.635Z",
//       "updatedAt": "2024-06-10T10:59:03.635Z",
//       "Name": "Novin Ceram",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "46": {
//       "id": 46,
//       "createdAt": "2024-06-10T10:59:03.905Z",
//       "updatedAt": "2024-06-10T10:59:03.905Z",
//       "Name": "Люберецкие ковры",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "47": {
//       "id": 47,
//       "createdAt": "2024-06-10T10:59:04.168Z",
//       "updatedAt": "2024-06-10T10:59:04.168Z",
//       "Name": "Prettie Grass",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::lock-connection.lock-connection": {
//     "1": {
//       "id": 1,
//       "Name": "L2C",
//       "createdAt": "2024-06-11T10:51:18.075Z",
//       "updatedAt": "2024-06-11T10:51:18.075Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Uniclic",
//       "createdAt": "2024-06-11T10:51:18.425Z",
//       "updatedAt": "2024-06-11T10:51:18.425Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Aqua Protect",
//       "createdAt": "2024-06-11T10:51:18.732Z",
//       "updatedAt": "2024-06-11T10:51:18.732Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Clic It",
//       "createdAt": "2024-06-11T10:51:19.166Z",
//       "updatedAt": "2024-06-11T10:51:19.166Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "UNI fit!",
//       "createdAt": "2024-06-11T10:51:19.532Z",
//       "updatedAt": "2024-06-11T10:51:19.532Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Double Clic",
//       "createdAt": "2024-06-11T10:51:19.857Z",
//       "updatedAt": "2024-06-11T10:51:19.857Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Twin Clic",
//       "createdAt": "2024-06-11T10:51:20.182Z",
//       "updatedAt": "2024-06-11T10:51:20.182Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Clic",
//       "createdAt": "2024-06-11T10:51:20.749Z",
//       "updatedAt": "2024-06-11T10:51:20.749Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "T-Lock",
//       "createdAt": "2024-06-11T10:51:21.058Z",
//       "updatedAt": "2024-06-11T10:51:21.058Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Glue",
//       "createdAt": "2024-06-11T10:51:21.408Z",
//       "updatedAt": "2024-06-11T10:51:21.408Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "1clic2go",
//       "createdAt": "2024-06-11T10:51:21.858Z",
//       "updatedAt": "2024-06-11T10:51:21.858Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "5G",
//       "createdAt": "2024-06-11T10:51:22.182Z",
//       "updatedAt": "2024-06-11T10:51:22.182Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Megaloc",
//       "createdAt": "2024-06-11T10:51:22.474Z",
//       "updatedAt": "2024-06-11T10:51:22.474Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Click",
//       "createdAt": "2024-06-11T10:51:22.782Z",
//       "updatedAt": "2024-06-11T10:51:22.782Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::length.length": {
//     "1": {
//       "id": 1,
//       "Name": 600,
//       "createdAt": "2024-06-11T10:12:48.755Z",
//       "updatedAt": "2024-06-11T10:12:48.755Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": 1200,
//       "createdAt": "2024-06-11T10:12:49.089Z",
//       "updatedAt": "2024-06-11T10:12:49.089Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": 400,
//       "createdAt": "2024-06-11T10:12:49.375Z",
//       "updatedAt": "2024-06-11T10:12:49.375Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": 500,
//       "createdAt": "2024-06-11T10:12:49.655Z",
//       "updatedAt": "2024-06-11T10:12:49.655Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": 300,
//       "createdAt": "2024-06-11T10:12:49.964Z",
//       "updatedAt": "2024-06-11T10:12:49.964Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": 750,
//       "createdAt": "2024-06-11T10:12:50.272Z",
//       "updatedAt": "2024-06-11T10:12:50.272Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": 327,
//       "createdAt": "2024-06-11T10:12:50.580Z",
//       "updatedAt": "2024-06-11T10:12:50.580Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": 250,
//       "createdAt": "2024-06-11T10:12:50.897Z",
//       "updatedAt": "2024-06-11T10:12:50.897Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": 385,
//       "createdAt": "2024-06-11T10:12:51.222Z",
//       "updatedAt": "2024-06-11T10:12:51.222Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": 450,
//       "createdAt": "2024-06-11T10:12:51.564Z",
//       "updatedAt": "2024-06-11T10:12:51.564Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": 603,
//       "createdAt": "2024-06-11T10:12:51.859Z",
//       "updatedAt": "2024-06-11T10:12:51.859Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": 1195,
//       "createdAt": "2024-06-11T10:12:52.164Z",
//       "updatedAt": "2024-06-11T10:12:52.164Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": 1285,
//       "createdAt": "2024-06-11T10:12:52.497Z",
//       "updatedAt": "2024-06-11T10:12:52.497Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": 1292,
//       "createdAt": "2024-06-11T10:12:52.814Z",
//       "updatedAt": "2024-06-11T10:12:52.814Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": 1291,
//       "createdAt": "2024-06-11T10:12:53.101Z",
//       "updatedAt": "2024-06-11T10:12:53.101Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": 1380,
//       "createdAt": "2024-06-11T10:12:53.405Z",
//       "updatedAt": "2024-06-11T10:12:53.405Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": 1382,
//       "createdAt": "2024-06-11T10:12:53.697Z",
//       "updatedAt": "2024-06-11T10:12:53.697Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "Name": 1206,
//       "createdAt": "2024-06-11T10:12:53.989Z",
//       "updatedAt": "2024-06-11T10:12:53.989Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "Name": 2283,
//       "createdAt": "2024-06-11T10:12:54.322Z",
//       "updatedAt": "2024-06-11T10:12:54.322Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "Name": 2000,
//       "createdAt": "2024-06-11T10:12:54.614Z",
//       "updatedAt": "2024-06-11T10:12:54.614Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "Name": 1220,
//       "createdAt": "2024-06-11T10:12:54.939Z",
//       "updatedAt": "2024-06-11T10:12:54.939Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "Name": 914.4,
//       "createdAt": "2024-06-11T10:12:55.264Z",
//       "updatedAt": "2024-06-11T10:12:55.264Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "Name": 1400,
//       "createdAt": "2024-06-11T10:12:55.589Z",
//       "updatedAt": "2024-06-11T10:12:55.589Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "Name": 457.2,
//       "createdAt": "2024-06-11T10:12:55.905Z",
//       "updatedAt": "2024-06-11T10:12:55.905Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "Name": 610,
//       "createdAt": "2024-06-11T10:12:56.169Z",
//       "updatedAt": "2024-06-11T10:12:56.169Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "Name": 620,
//       "createdAt": "2024-06-11T10:12:56.489Z",
//       "updatedAt": "2024-06-11T10:12:56.489Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "27": {
//       "id": 27,
//       "Name": 640,
//       "createdAt": "2024-06-11T10:12:56.759Z",
//       "updatedAt": "2024-06-11T10:12:56.759Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "28": {
//       "id": 28,
//       "Name": 10000,
//       "createdAt": "2024-06-11T10:12:57.072Z",
//       "updatedAt": "2024-06-11T10:12:57.072Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "29": {
//       "id": 29,
//       "Name": 1286,
//       "createdAt": "2024-06-11T10:12:57.373Z",
//       "updatedAt": "2024-06-11T10:12:57.373Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "30": {
//       "id": 30,
//       "Name": 914,
//       "createdAt": "2024-06-11T10:12:57.697Z",
//       "updatedAt": "2024-06-11T10:12:57.697Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "31": {
//       "id": 31,
//       "Name": 609.9,
//       "createdAt": "2024-06-11T10:12:58.014Z",
//       "updatedAt": "2024-06-11T10:12:58.014Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "32": {
//       "id": 32,
//       "Name": 604,
//       "createdAt": "2024-06-11T10:12:58.389Z",
//       "updatedAt": "2024-06-11T10:12:58.389Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "33": {
//       "id": 33,
//       "Name": 643,
//       "createdAt": "2024-06-11T10:12:58.684Z",
//       "updatedAt": "2024-06-11T10:12:58.684Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "34": {
//       "id": 34,
//       "Name": 580,
//       "createdAt": "2024-06-11T10:12:58.964Z",
//       "updatedAt": "2024-06-11T10:12:58.964Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::invoice.invoice": {},
//   "api::gloss-level.gloss-level": {
//     "1": {
//       "id": 1,
//       "Name": "Матовый",
//       "createdAt": "2024-06-11T10:55:58.425Z",
//       "updatedAt": "2024-06-11T10:55:58.425Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Полуматовый",
//       "createdAt": "2024-06-11T10:55:58.517Z",
//       "updatedAt": "2024-06-11T10:55:58.517Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::format.format": {
//     "1": {
//       "id": 1,
//       "Name": "крупный",
//       "createdAt": "2024-06-11T10:32:47.696Z",
//       "updatedAt": "2024-06-11T10:32:47.696Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "гранд",
//       "createdAt": "2024-06-11T10:32:47.790Z",
//       "updatedAt": "2024-06-11T10:32:47.790Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "средний",
//       "createdAt": "2024-06-11T10:32:47.872Z",
//       "updatedAt": "2024-06-11T10:32:47.872Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "мелкий",
//       "createdAt": "2024-06-11T10:32:47.935Z",
//       "updatedAt": "2024-06-11T10:32:47.935Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Крупный",
//       "createdAt": "2024-06-11T10:32:48.006Z",
//       "updatedAt": "2024-06-11T10:32:48.006Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Средний",
//       "createdAt": "2024-06-11T10:32:48.115Z",
//       "updatedAt": "2024-06-11T10:32:48.115Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Гранд",
//       "createdAt": "2024-06-11T10:32:48.193Z",
//       "updatedAt": "2024-06-11T10:32:48.193Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::form.form": {
//     "1": {
//       "id": 1,
//       "Name": "прямоугольник",
//       "createdAt": "2024-06-11T10:31:18.232Z",
//       "updatedAt": "2024-06-11T10:31:18.232Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "квадрат",
//       "createdAt": "2024-06-11T10:31:18.323Z",
//       "updatedAt": "2024-06-11T10:31:18.323Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Прямоугольник",
//       "createdAt": "2024-06-11T10:31:18.405Z",
//       "updatedAt": "2024-06-11T10:31:18.405Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Квадрат",
//       "createdAt": "2024-06-11T10:31:18.492Z",
//       "updatedAt": "2024-06-11T10:31:18.492Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::faska.faska": {
//     "1": {
//       "id": 1,
//       "createdAt": "2023-10-20T05:05:25.489Z",
//       "updatedAt": "2023-10-20T05:05:25.489Z",
//       "Name": null,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "createdAt": "2023-10-20T05:05:33.513Z",
//       "updatedAt": "2023-10-20T05:05:33.513Z",
//       "Name": null,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "createdAt": "2023-10-20T05:05:51.048Z",
//       "updatedAt": "2023-10-20T05:05:51.048Z",
//       "Name": null,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "createdAt": "2023-10-20T05:05:57.608Z",
//       "updatedAt": "2023-10-20T05:05:57.608Z",
//       "Name": null,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "createdAt": "2023-10-20T05:06:08.292Z",
//       "updatedAt": "2023-10-20T05:06:08.292Z",
//       "Name": null,
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "createdAt": "2024-06-11T10:48:10.369Z",
//       "updatedAt": "2024-06-11T10:48:10.369Z",
//       "Name": "4-х сторонняя, V-образная",
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "createdAt": "2024-06-11T10:48:10.667Z",
//       "updatedAt": "2024-06-11T10:48:10.667Z",
//       "Name": "4-х сторонняя",
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "createdAt": "2024-06-11T10:48:10.940Z",
//       "updatedAt": "2024-06-11T10:48:10.940Z",
//       "Name": "4-х сторонняя, U-образная",
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "createdAt": "2024-06-11T10:48:11.215Z",
//       "updatedAt": "2024-06-11T10:48:11.215Z",
//       "Name": "2-х сторонняя",
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "createdAt": "2024-06-11T10:48:11.986Z",
//       "updatedAt": "2024-06-11T10:48:11.986Z",
//       "Name": "Микро",
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "createdAt": "2024-06-11T10:48:12.291Z",
//       "updatedAt": "2024-06-11T10:48:12.291Z",
//       "Name": "4-х сторонняя, V-образная, микро",
//       "products": null,
//       "calc_types": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::dimension.dimension": {
//     "1": {
//       "id": 1,
//       "Name": "25х50",
//       "createdAt": "2024-06-11T10:42:10.906Z",
//       "updatedAt": "2024-06-11T10:42:10.906Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "30х60",
//       "createdAt": "2024-06-11T10:42:11.048Z",
//       "updatedAt": "2024-06-11T10:42:11.048Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "30х30",
//       "createdAt": "2024-06-11T10:42:11.132Z",
//       "updatedAt": "2024-06-11T10:42:11.132Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "45х45",
//       "createdAt": "2024-06-11T10:42:11.212Z",
//       "updatedAt": "2024-06-11T10:42:11.212Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "20х60",
//       "createdAt": "2024-06-11T10:42:11.283Z",
//       "updatedAt": "2024-06-11T10:42:11.283Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "60х60",
//       "createdAt": "2024-06-11T10:42:11.345Z",
//       "updatedAt": "2024-06-11T10:42:11.345Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "60х120",
//       "createdAt": "2024-06-11T10:42:11.436Z",
//       "updatedAt": "2024-06-11T10:42:11.436Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::destination-material.destination-material": {
//     "1": {
//       "id": 1,
//       "Name": "Бетон",
//       "createdAt": "2024-06-11T11:02:48.700Z",
//       "updatedAt": "2024-06-11T11:02:48.700Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Дерево",
//       "createdAt": "2024-06-11T11:02:48.789Z",
//       "updatedAt": "2024-06-11T11:02:48.789Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "ДВП",
//       "createdAt": "2024-06-11T11:02:48.872Z",
//       "updatedAt": "2024-06-11T11:02:48.872Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Оргалит",
//       "createdAt": "2024-06-11T11:02:48.959Z",
//       "updatedAt": "2024-06-11T11:02:48.959Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "ДСП",
//       "createdAt": "2024-06-11T11:02:49.031Z",
//       "updatedAt": "2024-06-11T11:02:49.031Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "ПВХ",
//       "createdAt": "2024-06-11T11:02:49.101Z",
//       "updatedAt": "2024-06-11T11:02:49.101Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Пластик",
//       "createdAt": "2024-06-11T11:02:49.192Z",
//       "updatedAt": "2024-06-11T11:02:49.192Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Керамика",
//       "createdAt": "2024-06-11T11:02:49.263Z",
//       "updatedAt": "2024-06-11T11:02:49.263Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Металл",
//       "createdAt": "2024-06-11T11:02:49.338Z",
//       "updatedAt": "2024-06-11T11:02:49.338Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Фарфор",
//       "createdAt": "2024-06-11T11:02:49.418Z",
//       "updatedAt": "2024-06-11T11:02:49.418Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Стекло",
//       "createdAt": "2024-06-11T11:02:49.488Z",
//       "updatedAt": "2024-06-11T11:02:49.488Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::country.country": {
//     "1": {
//       "id": 1,
//       "Name": "Россия",
//       "createdAt": "2023-09-08T17:15:32.617Z",
//       "updatedAt": "2023-09-08T17:15:32.617Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Бельгия",
//       "createdAt": "2023-09-08T17:15:48.346Z",
//       "updatedAt": "2023-09-08T17:15:48.346Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Китай",
//       "createdAt": "2023-09-08T17:16:00.776Z",
//       "updatedAt": "2023-09-08T17:16:00.776Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Беларусь",
//       "createdAt": "2024-06-10T10:23:08.804Z",
//       "updatedAt": "2024-06-10T10:23:08.804Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Индия",
//       "createdAt": "2024-06-10T10:23:14.215Z",
//       "updatedAt": "2024-06-10T10:23:14.215Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Турция",
//       "createdAt": "2024-06-10T10:23:22.113Z",
//       "updatedAt": "2024-06-10T10:23:22.113Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Германия",
//       "createdAt": "2024-06-10T10:23:48.768Z",
//       "updatedAt": "2024-06-10T10:23:48.768Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Китай",
//       "createdAt": "2024-06-10T10:23:53.373Z",
//       "updatedAt": "2024-06-10T10:23:53.373Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Сербия",
//       "createdAt": "2024-06-10T10:23:58.990Z",
//       "updatedAt": "2024-06-10T10:23:58.990Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Узбекистан",
//       "createdAt": "2024-06-10T10:24:04.827Z",
//       "updatedAt": "2024-06-10T10:24:04.827Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Франция",
//       "createdAt": "2024-06-10T10:24:08.808Z",
//       "updatedAt": "2024-06-10T10:24:08.808Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Бельгия",
//       "createdAt": "2024-06-10T10:24:13.703Z",
//       "updatedAt": "2024-06-10T10:24:13.703Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Украина",
//       "createdAt": "2024-06-10T10:24:18.527Z",
//       "updatedAt": "2024-06-10T10:24:18.527Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Иран",
//       "createdAt": "2024-06-10T10:24:22.744Z",
//       "updatedAt": "2024-06-10T10:24:22.744Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::connection-type.connection-type": {
//     "1": {
//       "id": 1,
//       "Name": "Clic",
//       "createdAt": "2024-06-11T10:49:50.204Z",
//       "updatedAt": "2024-06-11T10:49:50.204Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Замок",
//       "createdAt": "2024-06-11T10:49:50.567Z",
//       "updatedAt": "2024-06-11T10:49:50.567Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Loc",
//       "createdAt": "2024-06-11T10:49:50.899Z",
//       "updatedAt": "2024-06-11T10:49:50.899Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Клей",
//       "createdAt": "2024-06-11T10:49:51.178Z",
//       "updatedAt": "2024-06-11T10:49:51.178Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::componentiality.componentiality": {
//     "1": {
//       "id": 1,
//       "Name": "Однокомпонентный",
//       "createdAt": "2024-06-11T11:03:55.743Z",
//       "updatedAt": "2024-06-11T11:03:55.743Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Двухкомпонентный",
//       "createdAt": "2024-06-11T11:04:03.283Z",
//       "updatedAt": "2024-06-11T11:04:03.283Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::color-spectrum.color-spectrum": {
//     "1": {
//       "id": 1,
//       "Name": "Светлая",
//       "createdAt": "2024-06-11T10:43:26.629Z",
//       "updatedAt": "2024-06-11T10:43:26.629Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Темная",
//       "createdAt": "2024-06-11T10:43:26.731Z",
//       "updatedAt": "2024-06-11T10:43:26.731Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Натуральная",
//       "createdAt": "2024-06-11T10:43:26.814Z",
//       "updatedAt": "2024-06-11T10:43:26.814Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Нейтральная",
//       "createdAt": "2024-06-11T10:43:26.884Z",
//       "updatedAt": "2024-06-11T10:43:26.884Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Бежевая",
//       "createdAt": "2024-06-11T10:43:26.956Z",
//       "updatedAt": "2024-06-11T10:43:26.956Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Коричневая",
//       "createdAt": "2024-06-11T10:43:27.039Z",
//       "updatedAt": "2024-06-11T10:43:27.039Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Серая",
//       "createdAt": "2024-06-11T10:43:27.122Z",
//       "updatedAt": "2024-06-11T10:43:27.122Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Натуральная/Нейтральная",
//       "createdAt": "2024-06-11T10:43:27.235Z",
//       "updatedAt": "2024-06-11T10:43:27.235Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Желтая",
//       "createdAt": "2024-06-11T10:43:27.306Z",
//       "updatedAt": "2024-06-11T10:43:27.306Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Многоцветная",
//       "createdAt": "2024-06-11T10:43:27.385Z",
//       "updatedAt": "2024-06-11T10:43:27.385Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::color.color": {
//     "8": {
//       "id": 8,
//       "Name": "Серый",
//       "createdAt": "2024-06-10T11:43:44.229Z",
//       "updatedAt": "2024-06-10T11:43:44.229Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Белый",
//       "createdAt": "2024-06-10T11:43:44.300Z",
//       "updatedAt": "2024-06-10T11:43:44.300Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Бежевый",
//       "createdAt": "2024-06-10T11:43:44.393Z",
//       "updatedAt": "2024-06-10T11:43:44.393Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Коричневый",
//       "createdAt": "2024-06-10T11:43:44.490Z",
//       "updatedAt": "2024-06-10T11:43:44.490Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Голубой",
//       "createdAt": "2024-06-10T11:43:44.573Z",
//       "updatedAt": "2024-06-10T11:43:44.573Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Черный",
//       "createdAt": "2024-06-10T11:43:44.663Z",
//       "updatedAt": "2024-06-10T11:43:44.663Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Синий",
//       "createdAt": "2024-06-10T11:43:44.757Z",
//       "updatedAt": "2024-06-10T11:43:44.757Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "Розовый",
//       "createdAt": "2024-06-10T11:43:44.827Z",
//       "updatedAt": "2024-06-10T11:43:44.827Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "Красный",
//       "createdAt": "2024-06-10T11:43:44.890Z",
//       "updatedAt": "2024-06-10T11:43:44.890Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": "Зеленый",
//       "createdAt": "2024-06-10T11:43:44.965Z",
//       "updatedAt": "2024-06-10T11:43:44.965Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::collection.collection": {
//     "3": {
//       "id": 3,
//       "Name": "Венский Лес",
//       "createdAt": "2024-06-10T11:39:39.040Z",
//       "updatedAt": "2024-06-10T11:39:39.040Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Винтаж вуд",
//       "createdAt": "2024-06-10T11:39:39.112Z",
//       "updatedAt": "2024-06-10T11:39:39.112Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Мезон",
//       "createdAt": "2024-06-10T11:39:39.196Z",
//       "updatedAt": "2024-06-10T11:39:39.196Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Alicante",
//       "createdAt": "2024-06-10T11:39:39.270Z",
//       "updatedAt": "2024-06-10T11:39:39.270Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Antwerp",
//       "createdAt": "2024-06-10T11:39:39.354Z",
//       "updatedAt": "2024-06-10T11:39:39.354Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Barcelona",
//       "createdAt": "2024-06-10T11:39:39.454Z",
//       "updatedAt": "2024-06-10T11:39:39.454Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Bari",
//       "createdAt": "2024-06-10T11:39:39.538Z",
//       "updatedAt": "2024-06-10T11:39:39.538Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Berlin",
//       "createdAt": "2024-06-10T11:39:39.603Z",
//       "updatedAt": "2024-06-10T11:39:39.603Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Bonn",
//       "createdAt": "2024-06-10T11:39:39.671Z",
//       "updatedAt": "2024-06-10T11:39:39.671Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "12": {
//       "id": 12,
//       "Name": "Boston",
//       "createdAt": "2024-06-10T11:39:39.747Z",
//       "updatedAt": "2024-06-10T11:39:39.747Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "13": {
//       "id": 13,
//       "Name": "Андалусия",
//       "createdAt": "2024-06-10T11:39:39.821Z",
//       "updatedAt": "2024-06-10T11:39:39.821Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "14": {
//       "id": 14,
//       "Name": "Виченца",
//       "createdAt": "2024-06-10T11:39:39.895Z",
//       "updatedAt": "2024-06-10T11:39:39.895Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "15": {
//       "id": 15,
//       "Name": "Гавана",
//       "createdAt": "2024-06-10T11:39:39.980Z",
//       "updatedAt": "2024-06-10T11:39:39.980Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "16": {
//       "id": 16,
//       "Name": "Дубай",
//       "createdAt": "2024-06-10T11:39:40.062Z",
//       "updatedAt": "2024-06-10T11:39:40.062Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "17": {
//       "id": 17,
//       "Name": "Мартиника",
//       "createdAt": "2024-06-10T11:39:40.128Z",
//       "updatedAt": "2024-06-10T11:39:40.128Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "18": {
//       "id": 18,
//       "Name": "Мегаполис",
//       "createdAt": "2024-06-10T11:39:40.204Z",
//       "updatedAt": "2024-06-10T11:39:40.204Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "19": {
//       "id": 19,
//       "Name": "Модена",
//       "createdAt": "2024-06-10T11:39:40.278Z",
//       "updatedAt": "2024-06-10T11:39:40.278Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "20": {
//       "id": 20,
//       "Name": "Палермо",
//       "createdAt": "2024-06-10T11:39:40.355Z",
//       "updatedAt": "2024-06-10T11:39:40.355Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "21": {
//       "id": 21,
//       "Name": "Анкара",
//       "createdAt": "2024-06-10T11:39:40.446Z",
//       "updatedAt": "2024-06-10T11:39:40.446Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "Name": "Венеция",
//       "createdAt": "2024-06-10T11:39:40.537Z",
//       "updatedAt": "2024-06-10T11:39:40.537Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "Name": "Орлеан",
//       "createdAt": "2024-06-10T11:39:40.620Z",
//       "updatedAt": "2024-06-10T11:39:40.620Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "Name": "Персей",
//       "createdAt": "2024-06-10T11:39:40.729Z",
//       "updatedAt": "2024-06-10T11:39:40.729Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "Name": "Ницца",
//       "createdAt": "2024-06-10T11:39:40.789Z",
//       "updatedAt": "2024-06-10T11:39:40.789Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "Name": "Loft wood",
//       "createdAt": "2024-06-10T11:39:40.861Z",
//       "updatedAt": "2024-06-10T11:39:40.861Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "27": {
//       "id": 27,
//       "Name": "Паркет с металлизацией",
//       "createdAt": "2024-06-10T11:39:40.966Z",
//       "updatedAt": "2024-06-10T11:39:40.966Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "28": {
//       "id": 28,
//       "Name": "Каталония",
//       "createdAt": "2024-06-10T11:39:41.054Z",
//       "updatedAt": "2024-06-10T11:39:41.054Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "29": {
//       "id": 29,
//       "Name": "Дублин",
//       "createdAt": "2024-06-10T11:39:41.129Z",
//       "updatedAt": "2024-06-10T11:39:41.129Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "30": {
//       "id": 30,
//       "Name": "Форест",
//       "createdAt": "2024-06-10T11:39:41.208Z",
//       "updatedAt": "2024-06-10T11:39:41.208Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "31": {
//       "id": 31,
//       "Name": "Dakar",
//       "createdAt": "2024-06-10T11:39:41.271Z",
//       "updatedAt": "2024-06-10T11:39:41.271Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "32": {
//       "id": 32,
//       "Name": "Атланта",
//       "createdAt": "2024-06-10T11:39:41.362Z",
//       "updatedAt": "2024-06-10T11:39:41.362Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "33": {
//       "id": 33,
//       "Name": "Верона",
//       "createdAt": "2024-06-10T11:39:41.446Z",
//       "updatedAt": "2024-06-10T11:39:41.446Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "34": {
//       "id": 34,
//       "Name": "Гермес",
//       "createdAt": "2024-06-10T11:39:41.537Z",
//       "updatedAt": "2024-06-10T11:39:41.537Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "35": {
//       "id": 35,
//       "Name": "Фьюжен",
//       "createdAt": "2024-06-10T11:39:41.619Z",
//       "updatedAt": "2024-06-10T11:39:41.619Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "36": {
//       "id": 36,
//       "Name": "Эссен",
//       "createdAt": "2024-06-10T11:39:41.696Z",
//       "updatedAt": "2024-06-10T11:39:41.696Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "37": {
//       "id": 37,
//       "Name": "60х60",
//       "createdAt": "2024-06-10T11:39:41.778Z",
//       "updatedAt": "2024-06-10T11:39:41.778Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "38": {
//       "id": 38,
//       "Name": "60х120",
//       "createdAt": "2024-06-10T11:39:41.871Z",
//       "updatedAt": "2024-06-10T11:39:41.871Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "39": {
//       "id": 39,
//       "Name": "Куба",
//       "createdAt": "2024-06-10T11:39:41.953Z",
//       "updatedAt": "2024-06-10T11:39:41.953Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "40": {
//       "id": 40,
//       "Name": "Флорида",
//       "createdAt": "2024-06-10T11:39:42.024Z",
//       "updatedAt": "2024-06-10T11:39:42.024Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "41": {
//       "id": 41,
//       "Name": "Дорадо",
//       "createdAt": "2024-06-10T11:39:42.121Z",
//       "updatedAt": "2024-06-10T11:39:42.121Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "42": {
//       "id": 42,
//       "Name": "Блюм",
//       "createdAt": "2024-06-10T11:39:42.199Z",
//       "updatedAt": "2024-06-10T11:39:42.199Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "43": {
//       "id": 43,
//       "Name": "Альбервуд",
//       "createdAt": "2024-06-10T11:39:42.279Z",
//       "updatedAt": "2024-06-10T11:39:42.279Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "44": {
//       "id": 44,
//       "Name": "Кинцуги",
//       "createdAt": "2024-06-10T11:39:42.362Z",
//       "updatedAt": "2024-06-10T11:39:42.362Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "45": {
//       "id": 45,
//       "Name": "Фиори гриджо",
//       "createdAt": "2024-06-10T11:39:42.441Z",
//       "updatedAt": "2024-06-10T11:39:42.441Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "46": {
//       "id": 46,
//       "Name": "Айриш",
//       "createdAt": "2024-06-10T11:39:42.521Z",
//       "updatedAt": "2024-06-10T11:39:42.521Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "47": {
//       "id": 47,
//       "Name": "Блис",
//       "createdAt": "2024-06-10T11:39:42.594Z",
//       "updatedAt": "2024-06-10T11:39:42.594Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "48": {
//       "id": 48,
//       "Name": "Гаусс",
//       "createdAt": "2024-06-10T11:39:42.661Z",
//       "updatedAt": "2024-06-10T11:39:42.661Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "49": {
//       "id": 49,
//       "Name": "Гуннар",
//       "createdAt": "2024-06-10T11:39:42.737Z",
//       "updatedAt": "2024-06-10T11:39:42.737Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "50": {
//       "id": 50,
//       "Name": "Домино",
//       "createdAt": "2024-06-10T11:39:42.807Z",
//       "updatedAt": "2024-06-10T11:39:42.807Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "51": {
//       "id": 51,
//       "Name": "Каррара нова",
//       "createdAt": "2024-06-10T11:39:42.869Z",
//       "updatedAt": "2024-06-10T11:39:42.869Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "52": {
//       "id": 52,
//       "Name": "Македония",
//       "createdAt": "2024-06-10T11:39:42.937Z",
//       "updatedAt": "2024-06-10T11:39:42.937Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "53": {
//       "id": 53,
//       "Name": "Патио",
//       "createdAt": "2024-06-10T11:39:43.004Z",
//       "updatedAt": "2024-06-10T11:39:43.004Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "54": {
//       "id": 54,
//       "Name": "Смарт",
//       "createdAt": "2024-06-10T11:39:43.070Z",
//       "updatedAt": "2024-06-10T11:39:43.070Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "55": {
//       "id": 55,
//       "Name": "Таверна",
//       "createdAt": "2024-06-10T11:39:43.130Z",
//       "updatedAt": "2024-06-10T11:39:43.130Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "56": {
//       "id": 56,
//       "Name": "Bergen",
//       "createdAt": "2024-06-10T11:39:43.262Z",
//       "updatedAt": "2024-06-10T11:39:43.262Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "57": {
//       "id": 57,
//       "Name": "Budapest",
//       "createdAt": "2024-06-10T11:39:43.337Z",
//       "updatedAt": "2024-06-10T11:39:43.337Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "58": {
//       "id": 58,
//       "Name": "Geneva",
//       "createdAt": "2024-06-10T11:39:43.395Z",
//       "updatedAt": "2024-06-10T11:39:43.395Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "59": {
//       "id": 59,
//       "Name": "Livorno",
//       "createdAt": "2024-06-10T11:39:43.458Z",
//       "updatedAt": "2024-06-10T11:39:43.458Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "60": {
//       "id": 60,
//       "Name": "Вестерн вуд",
//       "createdAt": "2024-06-10T11:39:43.533Z",
//       "updatedAt": "2024-06-10T11:39:43.533Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "61": {
//       "id": 61,
//       "Name": "Ипанема",
//       "createdAt": "2024-06-10T11:39:43.612Z",
//       "updatedAt": "2024-06-10T11:39:43.612Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "62": {
//       "id": 62,
//       "Name": "Локивуд",
//       "createdAt": "2024-06-10T11:39:43.678Z",
//       "updatedAt": "2024-06-10T11:39:43.678Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "63": {
//       "id": 63,
//       "Name": "Окленд",
//       "createdAt": "2024-06-10T11:39:43.746Z",
//       "updatedAt": "2024-06-10T11:39:43.746Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "64": {
//       "id": 64,
//       "Name": "Ривер вуд",
//       "createdAt": "2024-06-10T11:39:43.821Z",
//       "updatedAt": "2024-06-10T11:39:43.821Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "65": {
//       "id": 65,
//       "Name": "Титан",
//       "createdAt": "2024-06-10T11:39:43.922Z",
//       "updatedAt": "2024-06-10T11:39:43.922Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "66": {
//       "id": 66,
//       "Name": "Цемент Стайл",
//       "createdAt": "2024-06-10T11:39:43.979Z",
//       "updatedAt": "2024-06-10T11:39:43.979Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "67": {
//       "id": 67,
//       "Name": "Шервуд",
//       "createdAt": "2024-06-10T11:39:44.066Z",
//       "updatedAt": "2024-06-10T11:39:44.066Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "68": {
//       "id": 68,
//       "Name": "Шпицберген",
//       "createdAt": "2024-06-10T11:39:44.162Z",
//       "updatedAt": "2024-06-10T11:39:44.162Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "69": {
//       "id": 69,
//       "Name": "Шэдоу",
//       "createdAt": "2024-06-10T11:39:44.224Z",
//       "updatedAt": "2024-06-10T11:39:44.224Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "70": {
//       "id": 70,
//       "Name": "Эльзас",
//       "createdAt": "2024-06-10T11:39:44.296Z",
//       "updatedAt": "2024-06-10T11:39:44.296Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "71": {
//       "id": 71,
//       "Name": "Аспен",
//       "createdAt": "2024-06-10T11:39:44.358Z",
//       "updatedAt": "2024-06-10T11:39:44.358Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "72": {
//       "id": 72,
//       "Name": "Concept",
//       "createdAt": "2024-06-10T11:39:44.428Z",
//       "updatedAt": "2024-06-10T11:39:44.428Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "73": {
//       "id": 73,
//       "Name": "Effect Premium",
//       "createdAt": "2024-06-10T11:39:44.487Z",
//       "updatedAt": "2024-06-10T11:39:44.487Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "74": {
//       "id": 74,
//       "Name": "Effect Elegance 12/33",
//       "createdAt": "2024-06-10T11:39:44.553Z",
//       "updatedAt": "2024-06-10T11:39:44.553Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "75": {
//       "id": 75,
//       "Name": "Natura Line",
//       "createdAt": "2024-06-10T11:39:44.624Z",
//       "updatedAt": "2024-06-10T11:39:44.624Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "76": {
//       "id": 76,
//       "Name": "Natura Ultra Line",
//       "createdAt": "2024-06-10T11:39:44.696Z",
//       "updatedAt": "2024-06-10T11:39:44.696Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "77": {
//       "id": 77,
//       "Name": "Expedition WR",
//       "createdAt": "2024-06-10T11:39:44.762Z",
//       "updatedAt": "2024-06-10T11:39:44.762Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "78": {
//       "id": 78,
//       "Name": "Impression WR",
//       "createdAt": "2024-06-10T11:39:44.828Z",
//       "updatedAt": "2024-06-10T11:39:44.828Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "79": {
//       "id": 79,
//       "Name": "Pool AQUA",
//       "createdAt": "2024-06-10T11:39:44.896Z",
//       "updatedAt": "2024-06-10T11:39:44.896Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "80": {
//       "id": 80,
//       "Name": "Pro Classic 10/32",
//       "createdAt": "2024-06-10T11:39:44.966Z",
//       "updatedAt": "2024-06-10T11:39:44.966Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "81": {
//       "id": 81,
//       "Name": "Pro Classic 8/32 4V",
//       "createdAt": "2024-06-10T11:39:45.033Z",
//       "updatedAt": "2024-06-10T11:39:45.033Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "82": {
//       "id": 82,
//       "Name": "Pro Classic 8/33 4V",
//       "createdAt": "2024-06-10T11:39:45.087Z",
//       "updatedAt": "2024-06-10T11:39:45.087Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "83": {
//       "id": 83,
//       "Name": "Pro Classic 10/33",
//       "createdAt": "2024-06-10T11:39:45.141Z",
//       "updatedAt": "2024-06-10T11:39:45.141Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "84": {
//       "id": 84,
//       "Name": "Pro Classic 12/33",
//       "createdAt": "2024-06-10T11:39:45.203Z",
//       "updatedAt": "2024-06-10T11:39:45.203Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "85": {
//       "id": 85,
//       "Name": "Pro Classic 8/32",
//       "createdAt": "2024-06-10T11:39:45.255Z",
//       "updatedAt": "2024-06-10T11:39:45.255Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "86": {
//       "id": 86,
//       "Name": "Pro Classic 8/33",
//       "createdAt": "2024-06-10T11:39:45.346Z",
//       "updatedAt": "2024-06-10T11:39:45.346Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "87": {
//       "id": 87,
//       "Name": "Pro Large Aqua+",
//       "createdAt": "2024-06-10T11:39:45.400Z",
//       "updatedAt": "2024-06-10T11:39:45.400Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "88": {
//       "id": 88,
//       "Name": "Pro Large 8/33",
//       "createdAt": "2024-06-10T11:39:45.463Z",
//       "updatedAt": "2024-06-10T11:39:45.463Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "89": {
//       "id": 89,
//       "Name": "Bravo",
//       "createdAt": "2024-06-10T11:39:45.528Z",
//       "updatedAt": "2024-06-10T11:39:45.528Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "90": {
//       "id": 90,
//       "Name": "Pronto",
//       "createdAt": "2024-06-10T11:39:45.596Z",
//       "updatedAt": "2024-06-10T11:39:45.596Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "91": {
//       "id": 91,
//       "Name": "Woodstyle Viva",
//       "createdAt": "2024-06-10T11:39:45.661Z",
//       "updatedAt": "2024-06-10T11:39:45.661Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "92": {
//       "id": 92,
//       "Name": "Floorpan Black",
//       "createdAt": "2024-06-10T11:39:45.721Z",
//       "updatedAt": "2024-06-10T11:39:45.721Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "93": {
//       "id": 93,
//       "Name": "Floorpan Green",
//       "createdAt": "2024-06-10T11:39:45.794Z",
//       "updatedAt": "2024-06-10T11:39:45.794Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "94": {
//       "id": 94,
//       "Name": "Sunfloor",
//       "createdAt": "2024-06-10T11:39:45.849Z",
//       "updatedAt": "2024-06-10T11:39:45.849Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "95": {
//       "id": 95,
//       "Name": "Castello Classic",
//       "createdAt": "2024-06-10T11:39:45.929Z",
//       "updatedAt": "2024-06-10T11:39:45.929Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "96": {
//       "id": 96,
//       "Name": "Avangard",
//       "createdAt": "2024-06-10T11:39:46.003Z",
//       "updatedAt": "2024-06-10T11:39:46.003Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "97": {
//       "id": 97,
//       "Name": "Breeze",
//       "createdAt": "2024-06-10T11:39:46.079Z",
//       "updatedAt": "2024-06-10T11:39:46.079Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "98": {
//       "id": 98,
//       "Name": "Solid",
//       "createdAt": "2024-06-10T11:39:46.162Z",
//       "updatedAt": "2024-06-10T11:39:46.162Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "99": {
//       "id": 99,
//       "Name": "1033 WR",
//       "createdAt": "2024-06-10T11:39:46.238Z",
//       "updatedAt": "2024-06-10T11:39:46.238Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "100": {
//       "id": 100,
//       "Name": "SkyLine XL WR",
//       "createdAt": "2024-06-10T11:39:46.303Z",
//       "updatedAt": "2024-06-10T11:39:46.303Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "101": {
//       "id": 101,
//       "Name": "Ballet",
//       "createdAt": "2024-06-10T11:39:46.371Z",
//       "updatedAt": "2024-06-10T11:39:46.371Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "102": {
//       "id": 102,
//       "Name": "Estetica",
//       "createdAt": "2024-06-10T11:39:46.437Z",
//       "updatedAt": "2024-06-10T11:39:46.437Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "103": {
//       "id": 103,
//       "Name": "Pilot",
//       "createdAt": "2024-06-10T11:39:46.513Z",
//       "updatedAt": "2024-06-10T11:39:46.513Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "104": {
//       "id": 104,
//       "Name": "Navigator",
//       "createdAt": "2024-06-10T11:39:46.596Z",
//       "updatedAt": "2024-06-10T11:39:46.596Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "105": {
//       "id": 105,
//       "Name": "Cinema",
//       "createdAt": "2024-06-10T11:39:46.671Z",
//       "updatedAt": "2024-06-10T11:39:46.671Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "106": {
//       "id": 106,
//       "Name": "Timber Lumber",
//       "createdAt": "2024-06-10T11:39:46.737Z",
//       "updatedAt": "2024-06-10T11:39:46.737Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "107": {
//       "id": 107,
//       "Name": "Timber Forester",
//       "createdAt": "2024-06-10T11:39:46.813Z",
//       "updatedAt": "2024-06-10T11:39:46.813Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "108": {
//       "id": 108,
//       "Name": "Timber Harvest",
//       "createdAt": "2024-06-10T11:39:46.896Z",
//       "updatedAt": "2024-06-10T11:39:46.896Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "109": {
//       "id": 109,
//       "Name": "Opera",
//       "createdAt": "2024-06-10T11:39:46.971Z",
//       "updatedAt": "2024-06-10T11:39:46.971Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "110": {
//       "id": 110,
//       "Name": "Rumba",
//       "createdAt": "2024-06-10T11:39:47.054Z",
//       "updatedAt": "2024-06-10T11:39:47.054Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "111": {
//       "id": 111,
//       "Name": "Salsa",
//       "createdAt": "2024-06-10T11:39:47.146Z",
//       "updatedAt": "2024-06-10T11:39:47.146Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "112": {
//       "id": 112,
//       "Name": "Europlank",
//       "createdAt": "2024-06-10T11:39:47.229Z",
//       "updatedAt": "2024-06-10T11:39:47.229Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "113": {
//       "id": 113,
//       "Name": "Enjoy",
//       "createdAt": "2024-06-10T11:39:47.313Z",
//       "updatedAt": "2024-06-10T11:39:47.313Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "114": {
//       "id": 114,
//       "Name": "Sense",
//       "createdAt": "2024-06-10T11:39:47.446Z",
//       "updatedAt": "2024-06-10T11:39:47.446Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "115": {
//       "id": 115,
//       "Name": "La Casa",
//       "createdAt": "2024-06-10T11:39:47.589Z",
//       "updatedAt": "2024-06-10T11:39:47.589Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "116": {
//       "id": 116,
//       "Name": "Jersey",
//       "createdAt": "2024-06-10T11:39:47.732Z",
//       "updatedAt": "2024-06-10T11:39:47.732Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "117": {
//       "id": 117,
//       "Name": "Rich",
//       "createdAt": "2024-06-10T11:39:47.795Z",
//       "updatedAt": "2024-06-10T11:39:47.795Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "118": {
//       "id": 118,
//       "Name": "Villa",
//       "createdAt": "2024-06-10T11:39:47.871Z",
//       "updatedAt": "2024-06-10T11:39:47.871Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "119": {
//       "id": 119,
//       "Name": "Lounge",
//       "createdAt": "2024-06-10T11:39:47.937Z",
//       "updatedAt": "2024-06-10T11:39:47.937Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "120": {
//       "id": 120,
//       "Name": "New Age",
//       "createdAt": "2024-06-10T11:39:47.996Z",
//       "updatedAt": "2024-06-10T11:39:47.996Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "121": {
//       "id": 121,
//       "Name": "Progressive House",
//       "createdAt": "2024-06-10T11:39:48.100Z",
//       "updatedAt": "2024-06-10T11:39:48.100Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "122": {
//       "id": 122,
//       "Name": "Deep House",
//       "createdAt": "2024-06-10T11:39:48.175Z",
//       "updatedAt": "2024-06-10T11:39:48.175Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "123": {
//       "id": 123,
//       "Name": "Blues",
//       "createdAt": "2024-06-10T11:39:48.258Z",
//       "updatedAt": "2024-06-10T11:39:48.258Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "124": {
//       "id": 124,
//       "Name": "Quadro",
//       "createdAt": "2024-06-10T11:39:48.330Z",
//       "updatedAt": "2024-06-10T11:39:48.330Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "125": {
//       "id": 125,
//       "Name": "Monte",
//       "createdAt": "2024-06-10T11:39:48.445Z",
//       "updatedAt": "2024-06-10T11:39:48.445Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "126": {
//       "id": 126,
//       "Name": "Chalet",
//       "createdAt": "2024-06-10T11:39:48.511Z",
//       "updatedAt": "2024-06-10T11:39:48.511Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "127": {
//       "id": 127,
//       "Name": "Amsterdam",
//       "createdAt": "2024-06-10T11:39:48.585Z",
//       "updatedAt": "2024-06-10T11:39:48.585Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "128": {
//       "id": 128,
//       "Name": "Forte Classic",
//       "createdAt": "2024-06-10T11:39:48.667Z",
//       "updatedAt": "2024-06-10T11:39:48.667Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "129": {
//       "id": 129,
//       "Name": "Variostep Classic",
//       "createdAt": "2024-06-10T11:39:48.770Z",
//       "updatedAt": "2024-06-10T11:39:48.770Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "130": {
//       "id": 130,
//       "Name": "Super Natural Classic",
//       "createdAt": "2024-06-10T11:39:48.842Z",
//       "updatedAt": "2024-06-10T11:39:48.842Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "131": {
//       "id": 131,
//       "Name": "Floordreams Vario",
//       "createdAt": "2024-06-10T11:39:48.942Z",
//       "updatedAt": "2024-06-10T11:39:48.942Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "132": {
//       "id": 132,
//       "Name": "Vintage Classic",
//       "createdAt": "2024-06-10T11:39:49.009Z",
//       "updatedAt": "2024-06-10T11:39:49.009Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "133": {
//       "id": 133,
//       "Name": "Cruise",
//       "createdAt": "2024-06-10T11:39:49.108Z",
//       "updatedAt": "2024-06-10T11:39:49.108Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "134": {
//       "id": 134,
//       "Name": "Dynasty",
//       "createdAt": "2024-06-10T11:39:49.184Z",
//       "updatedAt": "2024-06-10T11:39:49.184Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "135": {
//       "id": 135,
//       "Name": "Gallery",
//       "createdAt": "2024-06-10T11:39:49.259Z",
//       "updatedAt": "2024-06-10T11:39:49.259Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "136": {
//       "id": 136,
//       "Name": "Poem",
//       "createdAt": "2024-06-10T11:39:49.342Z",
//       "updatedAt": "2024-06-10T11:39:49.342Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "137": {
//       "id": 137,
//       "Name": "Germany",
//       "createdAt": "2024-06-10T11:39:49.417Z",
//       "updatedAt": "2024-06-10T11:39:49.417Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "138": {
//       "id": 138,
//       "Name": "Taiga Первая Сибирская",
//       "createdAt": "2024-06-10T11:39:49.479Z",
//       "updatedAt": "2024-06-10T11:39:49.479Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "139": {
//       "id": 139,
//       "Name": "Taiga Первая Уральская",
//       "createdAt": "2024-06-10T11:39:49.551Z",
//       "updatedAt": "2024-06-10T11:39:49.551Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "140": {
//       "id": 140,
//       "Name": "Villa WR",
//       "createdAt": "2024-06-10T11:39:49.646Z",
//       "updatedAt": "2024-06-10T11:39:49.646Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "141": {
//       "id": 141,
//       "Name": "Symbio",
//       "createdAt": "2024-06-10T11:39:49.721Z",
//       "updatedAt": "2024-06-10T11:39:49.721Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "142": {
//       "id": 142,
//       "Name": "De Facto",
//       "createdAt": "2024-06-10T11:39:49.783Z",
//       "updatedAt": "2024-06-10T11:39:49.783Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "143": {
//       "id": 143,
//       "Name": "Imperial",
//       "createdAt": "2024-06-10T11:39:49.851Z",
//       "updatedAt": "2024-06-10T11:39:49.851Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "144": {
//       "id": 144,
//       "Name": "Eco-Tec",
//       "createdAt": "2024-06-10T11:39:49.917Z",
//       "updatedAt": "2024-06-10T11:39:49.917Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "145": {
//       "id": 145,
//       "Name": "Eventum",
//       "createdAt": "2024-06-10T11:39:49.993Z",
//       "updatedAt": "2024-06-10T11:39:49.993Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "146": {
//       "id": 146,
//       "Name": "Galaxy",
//       "createdAt": "2024-06-10T11:39:50.112Z",
//       "updatedAt": "2024-06-10T11:39:50.112Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "147": {
//       "id": 147,
//       "Name": "Synchro-Tec",
//       "createdAt": "2024-06-10T11:39:50.167Z",
//       "updatedAt": "2024-06-10T11:39:50.167Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "148": {
//       "id": 148,
//       "Name": "Salzburg",
//       "createdAt": "2024-06-10T11:39:50.229Z",
//       "updatedAt": "2024-06-10T11:39:50.229Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "149": {
//       "id": 149,
//       "Name": "Symbio Groove",
//       "createdAt": "2024-06-10T11:39:50.292Z",
//       "updatedAt": "2024-06-10T11:39:50.292Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "150": {
//       "id": 150,
//       "Name": "Galaxy V4",
//       "createdAt": "2024-06-10T11:39:50.350Z",
//       "updatedAt": "2024-06-10T11:39:50.350Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "151": {
//       "id": 151,
//       "Name": "Prime Line",
//       "createdAt": "2024-06-10T11:39:50.417Z",
//       "updatedAt": "2024-06-10T11:39:50.417Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "152": {
//       "id": 152,
//       "Name": "Osmoze",
//       "createdAt": "2024-06-10T11:39:50.483Z",
//       "updatedAt": "2024-06-10T11:39:50.483Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "153": {
//       "id": 153,
//       "Name": "Solid Plus",
//       "createdAt": "2024-06-10T11:39:50.584Z",
//       "updatedAt": "2024-06-10T11:39:50.584Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "154": {
//       "id": 154,
//       "Name": "Solid Chic",
//       "createdAt": "2024-06-10T11:39:50.651Z",
//       "updatedAt": "2024-06-10T11:39:50.651Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "155": {
//       "id": 155,
//       "Name": "Solid Medium",
//       "createdAt": "2024-06-10T11:39:50.755Z",
//       "updatedAt": "2024-06-10T11:39:50.755Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "156": {
//       "id": 156,
//       "Name": "Osmoze Medium",
//       "createdAt": "2024-06-10T11:39:50.834Z",
//       "updatedAt": "2024-06-10T11:39:50.834Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "157": {
//       "id": 157,
//       "Name": "Style",
//       "createdAt": "2024-06-10T11:39:50.892Z",
//       "updatedAt": "2024-06-10T11:39:50.892Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "158": {
//       "id": 158,
//       "Name": "Line",
//       "createdAt": "2024-06-10T11:39:50.993Z",
//       "updatedAt": "2024-06-10T11:39:50.993Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "159": {
//       "id": 159,
//       "Name": "Pine",
//       "createdAt": "2024-06-10T11:39:51.068Z",
//       "updatedAt": "2024-06-10T11:39:51.068Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "160": {
//       "id": 160,
//       "Name": "Tile",
//       "createdAt": "2024-06-10T11:39:51.151Z",
//       "updatedAt": "2024-06-10T11:39:51.151Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "161": {
//       "id": 161,
//       "Name": "Atlantic",
//       "createdAt": "2024-06-10T11:39:51.243Z",
//       "updatedAt": "2024-06-10T11:39:51.243Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "162": {
//       "id": 162,
//       "Name": "Vision 4V",
//       "createdAt": "2024-06-10T11:39:51.326Z",
//       "updatedAt": "2024-06-10T11:39:51.326Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "163": {
//       "id": 163,
//       "Name": "Visio Grande WR",
//       "createdAt": "2024-06-10T11:39:51.409Z",
//       "updatedAt": "2024-06-10T11:39:51.409Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "164": {
//       "id": 164,
//       "Name": "Discovery 4V WR",
//       "createdAt": "2024-06-10T11:39:51.488Z",
//       "updatedAt": "2024-06-10T11:39:51.488Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "165": {
//       "id": 165,
//       "Name": "Herringbone Ville",
//       "createdAt": "2024-06-10T11:39:51.559Z",
//       "updatedAt": "2024-06-10T11:39:51.559Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "166": {
//       "id": 166,
//       "Name": "Freedom 4v WR",
//       "createdAt": "2024-06-10T11:39:51.659Z",
//       "updatedAt": "2024-06-10T11:39:51.659Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "167": {
//       "id": 167,
//       "Name": "Galaxy WR",
//       "createdAt": "2024-06-10T11:39:51.734Z",
//       "updatedAt": "2024-06-10T11:39:51.734Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "168": {
//       "id": 168,
//       "Name": "Adventure WR",
//       "createdAt": "2024-06-10T11:39:51.821Z",
//       "updatedAt": "2024-06-10T11:39:51.821Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "169": {
//       "id": 169,
//       "Name": "Standart",
//       "createdAt": "2024-06-10T11:39:51.901Z",
//       "updatedAt": "2024-06-10T11:39:51.901Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "170": {
//       "id": 170,
//       "Name": "Delicate 8.33",
//       "createdAt": "2024-06-10T11:39:51.993Z",
//       "updatedAt": "2024-06-10T11:39:51.993Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "171": {
//       "id": 171,
//       "Name": "Delicate 12.33",
//       "createdAt": "2024-06-10T11:39:52.076Z",
//       "updatedAt": "2024-06-10T11:39:52.076Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "172": {
//       "id": 172,
//       "Name": "Funky House",
//       "createdAt": "2024-06-10T11:39:52.176Z",
//       "updatedAt": "2024-06-10T11:39:52.176Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "173": {
//       "id": 173,
//       "Name": "Rockstars",
//       "createdAt": "2024-06-10T11:39:52.267Z",
//       "updatedAt": "2024-06-10T11:39:52.267Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "174": {
//       "id": 174,
//       "Name": "Nano",
//       "createdAt": "2024-06-10T11:39:52.359Z",
//       "updatedAt": "2024-06-10T11:39:52.359Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "175": {
//       "id": 175,
//       "Name": "Wood",
//       "createdAt": "2024-06-10T11:39:52.435Z",
//       "updatedAt": "2024-06-10T11:39:52.435Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "176": {
//       "id": 176,
//       "Name": "Stone",
//       "createdAt": "2024-06-10T11:39:52.518Z",
//       "updatedAt": "2024-06-10T11:39:52.518Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "177": {
//       "id": 177,
//       "Name": "Base",
//       "createdAt": "2024-06-10T11:39:52.651Z",
//       "updatedAt": "2024-06-10T11:39:52.651Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "178": {
//       "id": 178,
//       "Name": "Paradise",
//       "createdAt": "2024-06-10T11:39:52.726Z",
//       "updatedAt": "2024-06-10T11:39:52.726Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "179": {
//       "id": 179,
//       "Name": "Кидс",
//       "createdAt": "2024-06-10T11:39:52.809Z",
//       "updatedAt": "2024-06-10T11:39:52.809Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "180": {
//       "id": 180,
//       "Name": "Савойя",
//       "createdAt": "2024-06-10T11:39:52.901Z",
//       "updatedAt": "2024-06-10T11:39:52.901Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "181": {
//       "id": 181,
//       "Name": "Tesoro",
//       "createdAt": "2024-06-10T11:39:52.976Z",
//       "updatedAt": "2024-06-10T11:39:52.976Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "182": {
//       "id": 182,
//       "Name": "Amarena",
//       "createdAt": "2024-06-10T11:39:53.059Z",
//       "updatedAt": "2024-06-10T11:39:53.059Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "183": {
//       "id": 183,
//       "Name": "Florida",
//       "createdAt": "2024-06-10T11:39:53.134Z",
//       "updatedAt": "2024-06-10T11:39:53.134Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "184": {
//       "id": 184,
//       "Name": "Provans",
//       "createdAt": "2024-06-10T11:39:53.221Z",
//       "updatedAt": "2024-06-10T11:39:53.221Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "185": {
//       "id": 185,
//       "Name": "Рифей",
//       "createdAt": "2024-06-10T11:39:53.292Z",
//       "updatedAt": "2024-06-10T11:39:53.292Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "186": {
//       "id": 186,
//       "Name": "Varna",
//       "createdAt": "2024-06-10T11:39:53.376Z",
//       "updatedAt": "2024-06-10T11:39:53.376Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "187": {
//       "id": 187,
//       "Name": "Трек",
//       "createdAt": "2024-06-10T11:39:53.451Z",
//       "updatedAt": "2024-06-10T11:39:53.451Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "188": {
//       "id": 188,
//       "Name": "Рингтон",
//       "createdAt": "2024-06-10T11:39:53.534Z",
//       "updatedAt": "2024-06-10T11:39:53.534Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "189": {
//       "id": 189,
//       "Name": "Кремона",
//       "createdAt": "2024-06-10T11:39:53.604Z",
//       "updatedAt": "2024-06-10T11:39:53.604Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "190": {
//       "id": 190,
//       "Name": "Savana",
//       "createdAt": "2024-06-10T11:39:53.676Z",
//       "updatedAt": "2024-06-10T11:39:53.676Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "191": {
//       "id": 191,
//       "Name": "Tunis",
//       "createdAt": "2024-06-10T11:39:53.759Z",
//       "updatedAt": "2024-06-10T11:39:53.759Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "192": {
//       "id": 192,
//       "Name": "Satine Revelation",
//       "createdAt": "2024-06-10T11:39:53.859Z",
//       "updatedAt": "2024-06-10T11:39:53.859Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "193": {
//       "id": 193,
//       "Name": "Sense Highlights",
//       "createdAt": "2024-06-10T11:39:53.937Z",
//       "updatedAt": "2024-06-10T11:39:53.937Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "194": {
//       "id": 194,
//       "Name": "Essential Soft",
//       "createdAt": "2024-06-10T11:39:54.034Z",
//       "updatedAt": "2024-06-10T11:39:54.034Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "195": {
//       "id": 195,
//       "Name": "Wonderful Soft",
//       "createdAt": "2024-06-10T11:39:54.109Z",
//       "updatedAt": "2024-06-10T11:39:54.109Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "196": {
//       "id": 196,
//       "Name": "Molto",
//       "createdAt": "2024-06-10T11:39:54.193Z",
//       "updatedAt": "2024-06-10T11:39:54.193Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "197": {
//       "id": 197,
//       "Name": "Gala",
//       "createdAt": "2024-06-10T11:39:54.250Z",
//       "updatedAt": "2024-06-10T11:39:54.250Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "198": {
//       "id": 198,
//       "Name": "Certosa",
//       "createdAt": "2024-06-10T11:39:54.338Z",
//       "updatedAt": "2024-06-10T11:39:54.338Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "199": {
//       "id": 199,
//       "Name": "Messalina",
//       "createdAt": "2024-06-10T11:39:54.435Z",
//       "updatedAt": "2024-06-10T11:39:54.435Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "200": {
//       "id": 200,
//       "Name": "Porzia",
//       "createdAt": "2024-06-10T11:39:54.509Z",
//       "updatedAt": "2024-06-10T11:39:54.509Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "201": {
//       "id": 201,
//       "Name": "Mezza",
//       "createdAt": "2024-06-10T11:39:54.593Z",
//       "updatedAt": "2024-06-10T11:39:54.593Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "202": {
//       "id": 202,
//       "Name": "Lamia",
//       "createdAt": "2024-06-10T11:39:54.685Z",
//       "updatedAt": "2024-06-10T11:39:54.685Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "203": {
//       "id": 203,
//       "Name": "Costanza",
//       "createdAt": "2024-06-10T11:39:54.752Z",
//       "updatedAt": "2024-06-10T11:39:54.752Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "204": {
//       "id": 204,
//       "Name": "Palio",
//       "createdAt": "2024-06-10T11:39:54.835Z",
//       "updatedAt": "2024-06-10T11:39:54.835Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "205": {
//       "id": 205,
//       "Name": "Kai",
//       "createdAt": "2024-06-10T11:39:54.901Z",
//       "updatedAt": "2024-06-10T11:39:54.901Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "206": {
//       "id": 206,
//       "Name": "Corallina",
//       "createdAt": "2024-06-10T11:39:54.968Z",
//       "updatedAt": "2024-06-10T11:39:54.968Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "207": {
//       "id": 207,
//       "Name": "Fedone",
//       "createdAt": "2024-06-10T11:39:55.046Z",
//       "updatedAt": "2024-06-10T11:39:55.046Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "208": {
//       "id": 208,
//       "Name": "Moana",
//       "createdAt": "2024-06-10T11:39:55.160Z",
//       "updatedAt": "2024-06-10T11:39:55.160Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "209": {
//       "id": 209,
//       "Name": "Dioniso",
//       "createdAt": "2024-06-10T11:39:55.221Z",
//       "updatedAt": "2024-06-10T11:39:55.221Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "210": {
//       "id": 210,
//       "Name": "Rosetta",
//       "createdAt": "2024-06-10T11:39:55.293Z",
//       "updatedAt": "2024-06-10T11:39:55.293Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "211": {
//       "id": 211,
//       "Name": "Varuna",
//       "createdAt": "2024-06-10T11:39:55.360Z",
//       "updatedAt": "2024-06-10T11:39:55.360Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "212": {
//       "id": 212,
//       "Name": "Moretta",
//       "createdAt": "2024-06-10T11:39:55.418Z",
//       "updatedAt": "2024-06-10T11:39:55.418Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "213": {
//       "id": 213,
//       "Name": "Euphoria",
//       "createdAt": "2024-06-10T11:39:55.496Z",
//       "updatedAt": "2024-06-10T11:39:55.496Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "214": {
//       "id": 214,
//       "Name": "Yara",
//       "createdAt": "2024-06-10T11:39:55.560Z",
//       "updatedAt": "2024-06-10T11:39:55.560Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "215": {
//       "id": 215,
//       "Name": "Dragon",
//       "createdAt": "2024-06-10T11:39:55.625Z",
//       "updatedAt": "2024-06-10T11:39:55.625Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "216": {
//       "id": 216,
//       "Name": "Конар",
//       "createdAt": "2024-06-10T11:39:55.704Z",
//       "updatedAt": "2024-06-10T11:39:55.704Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "217": {
//       "id": 217,
//       "Name": "Либерти",
//       "createdAt": "2024-06-10T11:39:55.892Z",
//       "updatedAt": "2024-06-10T11:39:55.892Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "218": {
//       "id": 218,
//       "Name": "Платан",
//       "createdAt": "2024-06-10T11:39:56.047Z",
//       "updatedAt": "2024-06-10T11:39:56.047Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "219": {
//       "id": 219,
//       "Name": "Тополь",
//       "createdAt": "2024-06-10T11:39:56.193Z",
//       "updatedAt": "2024-06-10T11:39:56.193Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "220": {
//       "id": 220,
//       "Name": "Twid",
//       "createdAt": "2024-06-10T11:39:56.301Z",
//       "updatedAt": "2024-06-10T11:39:56.301Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "221": {
//       "id": 221,
//       "Name": "Vena",
//       "createdAt": "2024-06-10T11:39:56.369Z",
//       "updatedAt": "2024-06-10T11:39:56.369Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "222": {
//       "id": 222,
//       "Name": "Vivat",
//       "createdAt": "2024-06-10T11:39:56.451Z",
//       "updatedAt": "2024-06-10T11:39:56.451Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "223": {
//       "id": 223,
//       "Name": "Лидер",
//       "createdAt": "2024-06-10T11:39:56.518Z",
//       "updatedAt": "2024-06-10T11:39:56.518Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "224": {
//       "id": 224,
//       "Name": "Meridian",
//       "createdAt": "2024-06-10T11:39:56.610Z",
//       "updatedAt": "2024-06-10T11:39:56.610Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "225": {
//       "id": 225,
//       "Name": "Favorit URB",
//       "createdAt": "2024-06-10T11:39:56.710Z",
//       "updatedAt": "2024-06-10T11:39:56.710Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "226": {
//       "id": 226,
//       "Name": "Staze",
//       "createdAt": "2024-06-10T11:39:56.804Z",
//       "updatedAt": "2024-06-10T11:39:56.804Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "227": {
//       "id": 227,
//       "Name": "Capri",
//       "createdAt": "2024-06-10T11:39:56.885Z",
//       "updatedAt": "2024-06-10T11:39:56.885Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "228": {
//       "id": 228,
//       "Name": "Галеон",
//       "createdAt": "2024-06-10T11:39:56.963Z",
//       "updatedAt": "2024-06-10T11:39:56.963Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "229": {
//       "id": 229,
//       "Name": "Ария",
//       "createdAt": "2024-06-10T11:39:57.035Z",
//       "updatedAt": "2024-06-10T11:39:57.035Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "230": {
//       "id": 230,
//       "Name": "Фламинго",
//       "createdAt": "2024-06-10T11:39:57.110Z",
//       "updatedAt": "2024-06-10T11:39:57.110Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "231": {
//       "id": 231,
//       "Name": "Консонанс",
//       "createdAt": "2024-06-10T11:39:57.193Z",
//       "updatedAt": "2024-06-10T11:39:57.193Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "232": {
//       "id": 232,
//       "Name": "Mirt",
//       "createdAt": "2024-06-10T11:39:57.351Z",
//       "updatedAt": "2024-06-10T11:39:57.351Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "233": {
//       "id": 233,
//       "Name": "Киндер Микс",
//       "createdAt": "2024-06-10T11:39:57.493Z",
//       "updatedAt": "2024-06-10T11:39:57.493Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "234": {
//       "id": 234,
//       "Name": "Оливия",
//       "createdAt": "2024-06-10T11:39:57.576Z",
//       "updatedAt": "2024-06-10T11:39:57.576Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "235": {
//       "id": 235,
//       "Name": "Mira",
//       "createdAt": "2024-06-10T11:39:57.669Z",
//       "updatedAt": "2024-06-10T11:39:57.669Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "236": {
//       "id": 236,
//       "Name": "Gold Shaggy",
//       "createdAt": "2024-06-10T11:39:57.793Z",
//       "updatedAt": "2024-06-10T11:39:57.793Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "237": {
//       "id": 237,
//       "Name": "Super Paula",
//       "createdAt": "2024-06-10T11:39:57.868Z",
//       "updatedAt": "2024-06-10T11:39:57.868Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "238": {
//       "id": 238,
//       "Name": "Faiber",
//       "createdAt": "2024-06-10T11:39:57.951Z",
//       "updatedAt": "2024-06-10T11:39:57.951Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "239": {
//       "id": 239,
//       "Name": "Cordoba",
//       "createdAt": "2024-06-10T11:39:58.035Z",
//       "updatedAt": "2024-06-10T11:39:58.035Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "240": {
//       "id": 240,
//       "Name": "Sunset",
//       "createdAt": "2024-06-10T11:39:58.109Z",
//       "updatedAt": "2024-06-10T11:39:58.109Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "241": {
//       "id": 241,
//       "Name": "Vitrin",
//       "createdAt": "2024-06-10T11:39:58.226Z",
//       "updatedAt": "2024-06-10T11:39:58.226Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "242": {
//       "id": 242,
//       "Name": "Parantez Class",
//       "createdAt": "2024-06-10T11:39:58.310Z",
//       "updatedAt": "2024-06-10T11:39:58.310Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "243": {
//       "id": 243,
//       "Name": "Mix Art",
//       "createdAt": "2024-06-10T11:39:58.393Z",
//       "updatedAt": "2024-06-10T11:39:58.393Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "244": {
//       "id": 244,
//       "Name": "Milan",
//       "createdAt": "2024-06-10T11:39:58.468Z",
//       "updatedAt": "2024-06-10T11:39:58.468Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "245": {
//       "id": 245,
//       "Name": "Space Art",
//       "createdAt": "2024-06-10T11:39:58.535Z",
//       "updatedAt": "2024-06-10T11:39:58.535Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "246": {
//       "id": 246,
//       "Name": "Niceness",
//       "createdAt": "2024-06-10T11:39:58.601Z",
//       "updatedAt": "2024-06-10T11:39:58.601Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "247": {
//       "id": 247,
//       "Name": "Liparis",
//       "createdAt": "2024-06-10T11:39:58.685Z",
//       "updatedAt": "2024-06-10T11:39:58.685Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "248": {
//       "id": 248,
//       "Name": "Vegas",
//       "createdAt": "2024-06-10T11:39:58.751Z",
//       "updatedAt": "2024-06-10T11:39:58.751Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "249": {
//       "id": 249,
//       "Name": "Lalee",
//       "createdAt": "2024-06-10T11:39:58.813Z",
//       "updatedAt": "2024-06-10T11:39:58.813Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "250": {
//       "id": 250,
//       "Name": "Victoria Lux",
//       "createdAt": "2024-06-10T11:39:58.885Z",
//       "updatedAt": "2024-06-10T11:39:58.885Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "251": {
//       "id": 251,
//       "Name": "Утолщенный х2",
//       "createdAt": "2024-06-10T11:39:58.972Z",
//       "updatedAt": "2024-06-10T11:39:58.972Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "252": {
//       "id": 252,
//       "Name": "Komfort",
//       "createdAt": "2024-06-10T11:39:59.051Z",
//       "updatedAt": "2024-06-10T11:39:59.051Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "253": {
//       "id": 253,
//       "Name": "Mix",
//       "createdAt": "2024-06-10T11:39:59.113Z",
//       "updatedAt": "2024-06-10T11:39:59.113Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "254": {
//       "id": 254,
//       "Name": "Grass",
//       "createdAt": "2024-06-10T11:39:59.210Z",
//       "updatedAt": "2024-06-10T11:39:59.210Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "255": {
//       "id": 255,
//       "Name": "Lux",
//       "createdAt": "2024-06-10T11:39:59.310Z",
//       "updatedAt": "2024-06-10T11:39:59.310Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "256": {
//       "id": 256,
//       "Name": "Deco",
//       "createdAt": "2024-06-10T11:39:59.402Z",
//       "updatedAt": "2024-06-10T11:39:59.402Z",
//       "products": null,
//       "brand": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::class-pozhar.class-pozhar": {},
//   "api::class-p.class-p": {
//     "1": {
//       "id": 1,
//       "Name": "32",
//       "createdAt": "2024-06-11T10:46:11.540Z",
//       "updatedAt": "2024-06-11T10:46:11.540Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "33",
//       "createdAt": "2024-06-11T10:46:11.850Z",
//       "updatedAt": "2024-06-11T10:46:11.850Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "31",
//       "createdAt": "2024-06-11T10:46:12.154Z",
//       "updatedAt": "2024-06-11T10:46:12.154Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "34",
//       "createdAt": "2024-06-11T10:46:12.465Z",
//       "updatedAt": "2024-06-11T10:46:12.465Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "42",
//       "createdAt": "2024-06-11T10:46:12.783Z",
//       "updatedAt": "2024-06-11T10:46:12.783Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "43",
//       "createdAt": "2024-06-11T10:46:13.087Z",
//       "updatedAt": "2024-06-11T10:46:13.087Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "23",
//       "createdAt": "2024-06-11T10:46:13.396Z",
//       "updatedAt": "2024-06-11T10:46:13.396Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::class-h.class-h": {
//     "1": {
//       "id": 1,
//       "Name": "23",
//       "createdAt": "2023-09-13T11:30:19.106Z",
//       "updatedAt": "2023-09-13T11:30:19.106Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "33",
//       "createdAt": "2023-09-13T11:30:23.027Z",
//       "updatedAt": "2023-09-13T11:30:23.027Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::category.category": {
//     "1": {
//       "id": 1,
//       "Name": "Ламинат",
//       "createdAt": "2023-08-25T12:35:53.031Z",
//       "updatedAt": "2024-06-09T12:18:40.470Z",
//       "id_parser": "laminat",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Линолеум",
//       "createdAt": "2023-08-25T12:36:05.004Z",
//       "updatedAt": "2024-06-09T12:43:57.300Z",
//       "id_parser": "linoleum",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Виниловые полы",
//       "createdAt": "2023-08-25T12:36:14.650Z",
//       "updatedAt": "2024-06-09T12:45:00.679Z",
//       "id_parser": "vinil",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Ковролин и дорожки",
//       "createdAt": "2023-08-25T12:36:23.546Z",
//       "updatedAt": "2024-06-09T12:48:09.381Z",
//       "id_parser": "kovrolin",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Исскуственный газон",
//       "createdAt": "2023-08-25T12:36:47.611Z",
//       "updatedAt": "2024-06-10T10:17:54.333Z",
//       "id_parser": "trava",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Керамическая плитка и керамогранит",
//       "createdAt": "2023-08-25T12:36:58.179Z",
//       "updatedAt": "2023-08-25T12:36:58.179Z",
//       "id_parser": null,
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Ковры",
//       "createdAt": "2023-08-25T12:39:08.237Z",
//       "updatedAt": "2023-08-25T12:39:08.237Z",
//       "id_parser": null,
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Пробковые покрытия",
//       "createdAt": "2023-08-25T12:39:17.338Z",
//       "updatedAt": "2023-08-25T12:39:17.338Z",
//       "id_parser": null,
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "Террасная доска",
//       "createdAt": "2023-08-25T12:39:24.019Z",
//       "updatedAt": "2023-08-25T12:39:24.019Z",
//       "id_parser": null,
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "10": {
//       "id": 10,
//       "Name": "Ковровая плитка",
//       "createdAt": "2023-08-25T12:39:35.658Z",
//       "updatedAt": "2023-08-25T12:39:35.658Z",
//       "id_parser": null,
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "11": {
//       "id": 11,
//       "Name": "Аксессуары",
//       "createdAt": "2023-08-25T12:39:43.188Z",
//       "updatedAt": "2023-08-25T12:39:43.188Z",
//       "id_parser": null,
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "22": {
//       "id": 22,
//       "Name": "Паркетная доска",
//       "createdAt": "2023-09-13T14:15:24.038Z",
//       "updatedAt": "2024-06-09T12:25:10.348Z",
//       "id_parser": "parket",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "23": {
//       "id": 23,
//       "Name": "AGT",
//       "createdAt": "2024-06-09T11:49:44.226Z",
//       "updatedAt": "2024-06-09T11:59:19.266Z",
//       "id_parser": "85214",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "24": {
//       "id": 24,
//       "Name": "AGT Natura Ultra Line",
//       "createdAt": "2024-06-09T11:52:07.070Z",
//       "updatedAt": "2024-06-09T11:59:25.734Z",
//       "id_parser": "85215",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "25": {
//       "id": 25,
//       "Name": "AGT Natura Line",
//       "createdAt": "2024-06-09T11:52:19.414Z",
//       "updatedAt": "2024-06-09T11:59:31.553Z",
//       "id_parser": "85216",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "26": {
//       "id": 26,
//       "Name": "AGT Effect Elegance 12/33",
//       "createdAt": "2024-06-09T11:52:34.094Z",
//       "updatedAt": "2024-06-09T11:59:52.606Z",
//       "id_parser": "85218",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "27": {
//       "id": 27,
//       "Name": "AGT Effect Premium",
//       "createdAt": "2024-06-09T11:52:44.880Z",
//       "updatedAt": "2024-06-09T11:59:58.826Z",
//       "id_parser": "85219",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "28": {
//       "id": 28,
//       "Name": "AGT Concept Neo",
//       "createdAt": "2024-06-09T11:52:56.460Z",
//       "updatedAt": "2024-06-09T12:00:07.854Z",
//       "id_parser": "85220",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "29": {
//       "id": 29,
//       "Name": "Bonkeel",
//       "createdAt": "2024-06-09T11:53:44.059Z",
//       "updatedAt": "2024-06-09T12:00:13.129Z",
//       "id_parser": "85102",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "30": {
//       "id": 30,
//       "Name": "Bonkeel Tile",
//       "createdAt": "2024-06-09T11:54:55.639Z",
//       "updatedAt": "2024-06-09T12:00:18.223Z",
//       "id_parser": "85103",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "31": {
//       "id": 31,
//       "Name": "Bonkeel Pine",
//       "createdAt": "2024-06-09T11:55:04.997Z",
//       "updatedAt": "2024-06-09T12:00:39.755Z",
//       "id_parser": "85104",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "32": {
//       "id": 32,
//       "Name": "Bonkeel Line",
//       "createdAt": "2024-06-09T11:55:15.880Z",
//       "updatedAt": "2024-06-09T12:00:45.284Z",
//       "id_parser": "85105",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "33": {
//       "id": 33,
//       "Name": "Bonkeel Style",
//       "createdAt": "2024-06-09T11:55:26.178Z",
//       "updatedAt": "2024-06-09T12:00:50.199Z",
//       "id_parser": "85106",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "34": {
//       "id": 34,
//       "Name": "Bonkeel Base",
//       "createdAt": "2024-06-09T11:55:34.635Z",
//       "updatedAt": "2024-06-09T12:00:54.873Z",
//       "id_parser": "86013",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "35": {
//       "id": 35,
//       "Name": "Tarkett",
//       "createdAt": "2024-06-09T11:55:51.373Z",
//       "updatedAt": "2024-06-09T12:00:59.496Z",
//       "id_parser": "85107",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "36": {
//       "id": 36,
//       "Name": "Tarkett Art Vinyl Deep House",
//       "createdAt": "2024-06-09T11:56:09.124Z",
//       "updatedAt": "2024-06-09T12:01:04.898Z",
//       "id_parser": "85108",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "37": {
//       "id": 37,
//       "Name": "Tarkett Art Vinyl Progressive House",
//       "createdAt": "2024-06-09T11:56:24.290Z",
//       "updatedAt": "2024-06-09T12:01:12.433Z",
//       "id_parser": "85109",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "38": {
//       "id": 38,
//       "Name": "Tarkett Art Vinyl Blues",
//       "createdAt": "2024-06-09T11:56:34.632Z",
//       "updatedAt": "2024-06-09T12:01:25.702Z",
//       "id_parser": "85110",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "39": {
//       "id": 39,
//       "Name": "Tarkett Art Vinyl Lounge",
//       "createdAt": "2024-06-09T11:56:53.395Z",
//       "updatedAt": "2024-06-09T12:01:31.185Z",
//       "id_parser": "85111",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "40": {
//       "id": 40,
//       "Name": "Tarkett Art Vinyl New Age",
//       "createdAt": "2024-06-09T11:57:04.738Z",
//       "updatedAt": "2024-06-09T12:01:36.364Z",
//       "id_parser": "85112",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "41": {
//       "id": 41,
//       "Name": "Tarkett Art Vinyl Funky House",
//       "createdAt": "2024-06-09T11:57:14.532Z",
//       "updatedAt": "2024-06-09T12:01:41.413Z",
//       "id_parser": "86007",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "42": {
//       "id": 42,
//       "Name": "Tarkett Art Vinyl Rockstars",
//       "createdAt": "2024-06-09T11:57:24.539Z",
//       "updatedAt": "2024-06-09T12:01:47.506Z",
//       "id_parser": "86008",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "43": {
//       "id": 43,
//       "Name": "Betta",
//       "createdAt": "2024-06-09T11:57:40.734Z",
//       "updatedAt": "2024-06-09T12:01:52.717Z",
//       "id_parser": "85113",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "44": {
//       "id": 44,
//       "Name": "Betta Chalet",
//       "createdAt": "2024-06-09T11:57:53.815Z",
//       "updatedAt": "2024-06-09T12:01:57.903Z",
//       "id_parser": "85114",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "45": {
//       "id": 45,
//       "Name": "Betta Monte",
//       "createdAt": "2024-06-09T11:58:07.188Z",
//       "updatedAt": "2024-06-09T12:02:02.913Z",
//       "id_parser": "85115",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "46": {
//       "id": 46,
//       "Name": "Betta Villa",
//       "createdAt": "2024-06-09T11:58:16.474Z",
//       "updatedAt": "2024-06-09T12:02:07.949Z",
//       "id_parser": "85121",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "47": {
//       "id": 47,
//       "Name": "Royce",
//       "createdAt": "2024-06-09T11:58:26.425Z",
//       "updatedAt": "2024-06-09T12:02:13.329Z",
//       "id_parser": "85116",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "48": {
//       "id": 48,
//       "Name": "Royce Jersey",
//       "createdAt": "2024-06-09T12:02:31.603Z",
//       "updatedAt": "2024-06-09T12:02:31.603Z",
//       "id_parser": "85117",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "49": {
//       "id": 49,
//       "Name": "Royce SPC Quadro",
//       "createdAt": "2024-06-09T12:02:45.213Z",
//       "updatedAt": "2024-06-09T12:02:45.213Z",
//       "id_parser": "85118",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "50": {
//       "id": 50,
//       "Name": "Royce SPC Rich",
//       "createdAt": "2024-06-09T12:02:57.003Z",
//       "updatedAt": "2024-06-09T12:02:57.003Z",
//       "id_parser": "85123",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "51": {
//       "id": 51,
//       "Name": "Royce SPC Sense",
//       "createdAt": "2024-06-09T12:03:13.990Z",
//       "updatedAt": "2024-06-09T12:03:13.990Z",
//       "id_parser": "85126",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "52": {
//       "id": 52,
//       "Name": "Royce Enjoy",
//       "createdAt": "2024-06-09T12:03:26.220Z",
//       "updatedAt": "2024-06-09T12:03:26.220Z",
//       "id_parser": "85127",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "53": {
//       "id": 53,
//       "Name": "Zeta",
//       "createdAt": "2024-06-09T12:03:44.116Z",
//       "updatedAt": "2024-06-09T12:03:44.116Z",
//       "id_parser": "85124",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "54": {
//       "id": 54,
//       "Name": "Zeta La Casa",
//       "createdAt": "2024-06-09T12:04:04.150Z",
//       "updatedAt": "2024-06-09T12:04:04.150Z",
//       "id_parser": "85125",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "55": {
//       "id": 55,
//       "Name": "Alsapan",
//       "createdAt": "2024-06-09T12:04:57.705Z",
//       "updatedAt": "2024-06-09T12:04:57.705Z",
//       "id_parser": "85128",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "56": {
//       "id": 56,
//       "Name": "Alsapan Osmoze",
//       "createdAt": "2024-06-09T12:05:14.849Z",
//       "updatedAt": "2024-06-09T12:05:14.849Z",
//       "id_parser": "85129",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "57": {
//       "id": 57,
//       "Name": "Alsapan Osmoze Medium",
//       "createdAt": "2024-06-09T12:05:26.525Z",
//       "updatedAt": "2024-06-09T12:05:26.525Z",
//       "id_parser": "85130",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "58": {
//       "id": 58,
//       "Name": "Alsapan Solid Medium",
//       "createdAt": "2024-06-09T12:05:43.028Z",
//       "updatedAt": "2024-06-09T12:05:43.028Z",
//       "id_parser": "85131",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "59": {
//       "id": 59,
//       "Name": "Alsapan Solid Chic",
//       "createdAt": "2024-06-09T12:05:56.988Z",
//       "updatedAt": "2024-06-09T12:05:56.988Z",
//       "id_parser": "85132",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "60": {
//       "id": 60,
//       "Name": "Alsapan Solid Plus",
//       "createdAt": "2024-06-09T12:06:08.941Z",
//       "updatedAt": "2024-06-09T12:06:08.941Z",
//       "id_parser": "85133",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "61": {
//       "id": 61,
//       "Name": "Alsapan Standart",
//       "createdAt": "2024-06-09T12:06:21.057Z",
//       "updatedAt": "2024-06-09T12:06:21.057Z",
//       "id_parser": "85999",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "62": {
//       "id": 62,
//       "Name": "Alsapan Delicate 8.33",
//       "createdAt": "2024-06-09T12:06:42.880Z",
//       "updatedAt": "2024-06-09T12:06:42.880Z",
//       "id_parser": "86000",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "63": {
//       "id": 63,
//       "Name": "Alsapan Delicate 12.33",
//       "createdAt": "2024-06-09T12:07:03.374Z",
//       "updatedAt": "2024-06-09T12:07:03.374Z",
//       "id_parser": "86001",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "64": {
//       "id": 64,
//       "Name": "Classen",
//       "createdAt": "2024-06-09T12:07:16.438Z",
//       "updatedAt": "2024-06-09T12:07:16.438Z",
//       "id_parser": "85147",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "65": {
//       "id": 65,
//       "Name": "Classen Villa WR",
//       "createdAt": "2024-06-09T12:07:31.881Z",
//       "updatedAt": "2024-06-09T12:07:31.881Z",
//       "id_parser": "85148",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "66": {
//       "id": 66,
//       "Name": "Classen Impression WR",
//       "createdAt": "2024-06-09T12:07:45.022Z",
//       "updatedAt": "2024-06-09T12:07:45.022Z",
//       "id_parser": "85149",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "67": {
//       "id": 67,
//       "Name": "Classen Pool AQUA",
//       "createdAt": "2024-06-09T12:08:03.913Z",
//       "updatedAt": "2024-06-09T12:08:03.913Z",
//       "id_parser": "85210",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "68": {
//       "id": 68,
//       "Name": "Classen Expedition WR",
//       "createdAt": "2024-06-09T12:08:17.900Z",
//       "updatedAt": "2024-06-09T12:08:17.900Z",
//       "id_parser": "85212",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "69": {
//       "id": 69,
//       "Name": "Classen Vision 4V",
//       "createdAt": "2024-06-09T12:08:30.609Z",
//       "updatedAt": "2024-06-09T12:08:30.609Z",
//       "id_parser": "85992",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "70": {
//       "id": 70,
//       "Name": "Classen Visio Grande WR",
//       "createdAt": "2024-06-09T12:08:42.932Z",
//       "updatedAt": "2024-06-09T12:08:42.932Z",
//       "id_parser": "85993",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "71": {
//       "id": 71,
//       "Name": "Classen Discovery 4V WR",
//       "createdAt": "2024-06-09T12:08:55.719Z",
//       "updatedAt": "2024-06-09T12:08:55.719Z",
//       "id_parser": "85994",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "72": {
//       "id": 72,
//       "Name": "Classen Herringbone Ville",
//       "createdAt": "2024-06-09T12:09:13.596Z",
//       "updatedAt": "2024-06-09T12:09:13.596Z",
//       "id_parser": "85995",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "73": {
//       "id": 73,
//       "Name": "Classen Freedom 4v WR",
//       "createdAt": "2024-06-09T12:09:27.289Z",
//       "updatedAt": "2024-06-09T12:09:27.289Z",
//       "id_parser": "85996",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "74": {
//       "id": 74,
//       "Name": "Classen Galaxy WR",
//       "createdAt": "2024-06-09T12:09:40.111Z",
//       "updatedAt": "2024-06-09T12:09:40.111Z",
//       "id_parser": "85997",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "75": {
//       "id": 75,
//       "Name": "Classen Adventure WR",
//       "createdAt": "2024-06-09T12:09:51.097Z",
//       "updatedAt": "2024-06-09T12:09:51.097Z",
//       "id_parser": "85998",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "76": {
//       "id": 76,
//       "Name": "Egger",
//       "createdAt": "2024-06-09T12:10:05.840Z",
//       "updatedAt": "2024-06-09T12:10:05.840Z",
//       "id_parser": "85195",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "77": {
//       "id": 77,
//       "Name": "Egger Woodstyle Viva",
//       "createdAt": "2024-06-09T12:10:23.911Z",
//       "updatedAt": "2024-06-09T12:10:23.911Z",
//       "id_parser": "85196",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "78": {
//       "id": 78,
//       "Name": "Egger Pro Large 8/33",
//       "createdAt": "2024-06-09T12:10:38.304Z",
//       "updatedAt": "2024-06-09T12:10:38.304Z",
//       "id_parser": "85199",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "79": {
//       "id": 79,
//       "Name": "Egger Pro Large Aqua+",
//       "createdAt": "2024-06-09T12:10:49.913Z",
//       "updatedAt": "2024-06-09T12:10:49.913Z",
//       "id_parser": "85200",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "80": {
//       "id": 80,
//       "Name": "Egger Pro Classic 8/33 4V",
//       "createdAt": "2024-06-09T12:11:05.950Z",
//       "updatedAt": "2024-06-09T12:11:05.950Z",
//       "id_parser": "85202",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "81": {
//       "id": 81,
//       "Name": "Egger Pro Classic 8/33",
//       "createdAt": "2024-06-09T12:11:17.375Z",
//       "updatedAt": "2024-06-09T12:11:17.375Z",
//       "id_parser": "85203",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "82": {
//       "id": 82,
//       "Name": "Egger Pro Classic 8/32 4V",
//       "createdAt": "2024-06-09T12:11:27.445Z",
//       "updatedAt": "2024-06-09T12:11:27.445Z",
//       "id_parser": "85204",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "83": {
//       "id": 83,
//       "Name": "Egger Pro Classic 8/32",
//       "createdAt": "2024-06-09T12:11:37.992Z",
//       "updatedAt": "2024-06-09T12:11:37.992Z",
//       "id_parser": "85205",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "84": {
//       "id": 84,
//       "Name": "Egger Pro Classic 12/33",
//       "createdAt": "2024-06-09T12:11:48.186Z",
//       "updatedAt": "2024-06-09T12:11:48.186Z",
//       "id_parser": "85206",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "85": {
//       "id": 85,
//       "Name": "Egger Pro Classic 10/33",
//       "createdAt": "2024-06-09T12:11:58.742Z",
//       "updatedAt": "2024-06-09T12:11:58.742Z",
//       "id_parser": "85207",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "86": {
//       "id": 86,
//       "Name": "Egger Pro Classic 10/32",
//       "createdAt": "2024-06-09T12:12:08.014Z",
//       "updatedAt": "2024-06-09T12:12:08.014Z",
//       "id_parser": "85208",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "87": {
//       "id": 87,
//       "Name": "Kastamonu",
//       "createdAt": "2024-06-09T12:12:23.590Z",
//       "updatedAt": "2024-06-09T12:12:34.595Z",
//       "id_parser": "85150",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "88": {
//       "id": 88,
//       "Name": "Kastamonu Floorpan Green",
//       "createdAt": "2024-06-09T12:12:53.169Z",
//       "updatedAt": "2024-06-09T12:12:53.169Z",
//       "id_parser": "85151",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "89": {
//       "id": 89,
//       "Name": "Kastamonu Sunfloor",
//       "createdAt": "2024-06-09T12:13:05.856Z",
//       "updatedAt": "2024-06-09T12:13:05.856Z",
//       "id_parser": "85190",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "90": {
//       "id": 90,
//       "Name": "Kastamonu Floorpan Black",
//       "createdAt": "2024-06-09T12:13:16.157Z",
//       "updatedAt": "2024-06-09T12:13:16.157Z",
//       "id_parser": "85192",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "91": {
//       "id": 91,
//       "Name": "Kronospan",
//       "createdAt": "2024-06-09T12:13:31.256Z",
//       "updatedAt": "2024-06-09T12:13:31.256Z",
//       "id_parser": "85171",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "92": {
//       "id": 92,
//       "Name": "Kronospan Vintage Classic",
//       "createdAt": "2024-06-09T12:13:50.147Z",
//       "updatedAt": "2024-06-09T12:13:50.147Z",
//       "id_parser": "85172",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "93": {
//       "id": 93,
//       "Name": "Kronospan Super Natural Classic",
//       "createdAt": "2024-06-09T12:14:03.830Z",
//       "updatedAt": "2024-06-09T12:14:03.830Z",
//       "id_parser": "85173",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "94": {
//       "id": 94,
//       "Name": "Kronospan Floordreams Vario",
//       "createdAt": "2024-06-09T12:14:17.321Z",
//       "updatedAt": "2024-06-09T12:14:17.321Z",
//       "id_parser": "85174",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "95": {
//       "id": 95,
//       "Name": "Kronospan Variostep Classic",
//       "createdAt": "2024-06-09T12:14:28.298Z",
//       "updatedAt": "2024-06-09T12:14:28.298Z",
//       "id_parser": "85175",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "96": {
//       "id": 96,
//       "Name": "Kronospan Forte Classic",
//       "createdAt": "2024-06-09T12:14:38.912Z",
//       "updatedAt": "2024-06-09T12:14:38.912Z",
//       "id_parser": "85176",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "97": {
//       "id": 97,
//       "Name": "Kronospan Castello Classic",
//       "createdAt": "2024-06-09T12:14:49.931Z",
//       "updatedAt": "2024-06-09T12:14:49.931Z",
//       "id_parser": "85177",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "98": {
//       "id": 98,
//       "Name": "Kronospan Atlantic",
//       "createdAt": "2024-06-09T12:15:01.545Z",
//       "updatedAt": "2024-06-09T12:15:01.545Z",
//       "id_parser": "85987",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "99": {
//       "id": 99,
//       "Name": "Kronostar",
//       "createdAt": "2024-06-09T12:15:16.416Z",
//       "updatedAt": "2024-06-09T12:15:16.416Z",
//       "id_parser": "85134",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "100": {
//       "id": 100,
//       "Name": "Kronostar Symbio",
//       "createdAt": "2024-06-09T12:15:37.958Z",
//       "updatedAt": "2024-06-09T12:15:37.958Z",
//       "id_parser": "85135",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "101": {
//       "id": 101,
//       "Name": "Kronostar Symbio Groove",
//       "createdAt": "2024-06-09T12:16:11.805Z",
//       "updatedAt": "2024-06-09T12:16:11.805Z",
//       "id_parser": "85137",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "102": {
//       "id": 102,
//       "Name": "Kronostar Salzburg",
//       "createdAt": "2024-06-09T12:16:24.943Z",
//       "updatedAt": "2024-06-09T12:16:24.943Z",
//       "id_parser": "85138",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "103": {
//       "id": 103,
//       "Name": "Kronostar Galaxy",
//       "createdAt": "2024-06-09T12:16:36.682Z",
//       "updatedAt": "2024-06-09T12:16:36.682Z",
//       "id_parser": "85139",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "104": {
//       "id": 104,
//       "Name": "Kronostar Galaxy V4",
//       "createdAt": "2024-06-09T12:16:50.140Z",
//       "updatedAt": "2024-06-09T12:16:50.140Z",
//       "id_parser": "85140",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "105": {
//       "id": 105,
//       "Name": "Kronostar Eventum",
//       "createdAt": "2024-06-09T12:17:02.315Z",
//       "updatedAt": "2024-06-09T12:17:02.315Z",
//       "id_parser": "85141",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "106": {
//       "id": 106,
//       "Name": "Kronostar De Facto",
//       "createdAt": "2024-06-09T12:17:12.280Z",
//       "updatedAt": "2024-06-09T12:17:12.280Z",
//       "id_parser": "85142",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "107": {
//       "id": 107,
//       "Name": "Kronostar Prime Line",
//       "createdAt": "2024-06-09T12:17:24.735Z",
//       "updatedAt": "2024-06-09T12:17:24.735Z",
//       "id_parser": "85143",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "108": {
//       "id": 108,
//       "Name": "Kronostar Imperial",
//       "createdAt": "2024-06-09T12:17:38.072Z",
//       "updatedAt": "2024-06-09T12:17:38.072Z",
//       "id_parser": "85144",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "109": {
//       "id": 109,
//       "Name": "Kronostar Eco-Tec",
//       "createdAt": "2024-06-09T12:17:54.422Z",
//       "updatedAt": "2024-06-09T12:17:54.422Z",
//       "id_parser": "85145",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "110": {
//       "id": 110,
//       "Name": "Kronostar Synchro-Tec",
//       "createdAt": "2024-06-09T12:18:04.187Z",
//       "updatedAt": "2024-06-09T12:18:04.187Z",
//       "id_parser": "85146",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "111": {
//       "id": 111,
//       "Name": "Sensa",
//       "createdAt": "2024-06-09T12:18:58.796Z",
//       "updatedAt": "2024-06-09T12:18:58.796Z",
//       "id_parser": "85184",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "112": {
//       "id": 112,
//       "Name": "Sensa SkyLine XL WR",
//       "createdAt": "2024-06-09T12:19:14.536Z",
//       "updatedAt": "2024-06-09T12:19:14.536Z",
//       "id_parser": "85185",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "113": {
//       "id": 113,
//       "Name": "Sensa 1033 WR",
//       "createdAt": "2024-06-09T12:19:24.045Z",
//       "updatedAt": "2024-06-09T12:19:24.045Z",
//       "id_parser": "85186",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "114": {
//       "id": 114,
//       "Name": "Tarkett",
//       "createdAt": "2024-06-09T12:19:37.861Z",
//       "updatedAt": "2024-06-09T12:19:37.861Z",
//       "id_parser": "85155",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "115": {
//       "id": 115,
//       "Name": "Tarkett Taiga Первая Уральская",
//       "createdAt": "2024-06-09T12:19:49.250Z",
//       "updatedAt": "2024-06-09T12:19:49.250Z",
//       "id_parser": "85156",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "116": {
//       "id": 116,
//       "Name": "Tarkett Taiga Первая Сибирская",
//       "createdAt": "2024-06-09T12:19:59.966Z",
//       "updatedAt": "2024-06-09T12:19:59.966Z",
//       "id_parser": "85157",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "117": {
//       "id": 117,
//       "Name": "Tarkett Germany",
//       "createdAt": "2024-06-09T12:20:24.299Z",
//       "updatedAt": "2024-06-09T12:20:24.299Z",
//       "id_parser": "85158",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "118": {
//       "id": 118,
//       "Name": "Tarkett Poem",
//       "createdAt": "2024-06-09T12:20:35.659Z",
//       "updatedAt": "2024-06-09T12:20:35.659Z",
//       "id_parser": "85159",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "119": {
//       "id": 119,
//       "Name": "Tarkett Gallery",
//       "createdAt": "2024-06-09T12:20:48.064Z",
//       "updatedAt": "2024-06-09T12:20:48.064Z",
//       "id_parser": "85160",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "120": {
//       "id": 120,
//       "Name": "Tarkett Navigator",
//       "createdAt": "2024-06-09T12:21:01.076Z",
//       "updatedAt": "2024-06-09T12:21:01.076Z",
//       "id_parser": "85161",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "121": {
//       "id": 121,
//       "Name": "Tarkett Dynasty",
//       "createdAt": "2024-06-09T12:21:16.008Z",
//       "updatedAt": "2024-06-09T12:21:16.008Z",
//       "id_parser": "85162",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "122": {
//       "id": 122,
//       "Name": "Tarkett Pilot",
//       "createdAt": "2024-06-09T12:21:26.159Z",
//       "updatedAt": "2024-06-09T12:21:26.159Z",
//       "id_parser": "85164",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "123": {
//       "id": 123,
//       "Name": "Tarkett Cruise",
//       "createdAt": "2024-06-09T12:21:37.470Z",
//       "updatedAt": "2024-06-09T12:21:37.470Z",
//       "id_parser": "85165",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "124": {
//       "id": 124,
//       "Name": "Tarkett Estetica",
//       "createdAt": "2024-06-09T12:21:48.304Z",
//       "updatedAt": "2024-06-09T12:21:48.304Z",
//       "id_parser": "85166",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "125": {
//       "id": 125,
//       "Name": "Tarkett Ballet",
//       "createdAt": "2024-06-09T12:21:59.938Z",
//       "updatedAt": "2024-06-09T12:21:59.938Z",
//       "id_parser": "85167",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "126": {
//       "id": 126,
//       "Name": "Tarkett Cinema",
//       "createdAt": "2024-06-09T12:22:11.541Z",
//       "updatedAt": "2024-06-09T12:22:11.541Z",
//       "id_parser": "85170",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "127": {
//       "id": 127,
//       "Name": "Timber",
//       "createdAt": "2024-06-09T12:22:28.827Z",
//       "updatedAt": "2024-06-09T12:22:28.827Z",
//       "id_parser": "85180",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "128": {
//       "id": 128,
//       "Name": "Timber Harvest",
//       "createdAt": "2024-06-09T12:22:54.084Z",
//       "updatedAt": "2024-06-09T12:22:54.084Z",
//       "id_parser": "85181",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "129": {
//       "id": 129,
//       "Name": "Timber Forester",
//       "createdAt": "2024-06-09T12:23:05.727Z",
//       "updatedAt": "2024-06-09T12:23:05.727Z",
//       "id_parser": "85182",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "130": {
//       "id": 130,
//       "Name": "Timber Lumber",
//       "createdAt": "2024-06-09T12:23:19.929Z",
//       "updatedAt": "2024-06-09T12:23:19.929Z",
//       "id_parser": "85183",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "131": {
//       "id": 131,
//       "Name": "WoodStyle",
//       "createdAt": "2024-06-09T12:23:31.495Z",
//       "updatedAt": "2024-06-09T12:23:31.495Z",
//       "id_parser": "85178",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "132": {
//       "id": 132,
//       "Name": "WoodStyle Opera",
//       "createdAt": "2024-06-09T12:23:42.787Z",
//       "updatedAt": "2024-06-09T12:23:42.787Z",
//       "id_parser": "85179",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "133": {
//       "id": 133,
//       "Name": "Woodstyle Solid",
//       "createdAt": "2024-06-09T12:23:55.357Z",
//       "updatedAt": "2024-06-09T12:23:55.357Z",
//       "id_parser": "85187",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "134": {
//       "id": 134,
//       "Name": "Woodstyle Breeze",
//       "createdAt": "2024-06-09T12:24:07.077Z",
//       "updatedAt": "2024-06-09T12:24:07.077Z",
//       "id_parser": "85188",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "135": {
//       "id": 135,
//       "Name": "Woodstyle Avangard",
//       "createdAt": "2024-06-09T12:24:21.118Z",
//       "updatedAt": "2024-06-09T12:24:21.118Z",
//       "id_parser": "85189",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "136": {
//       "id": 136,
//       "Name": "Woodstyle Pronto",
//       "createdAt": "2024-06-09T12:24:35.763Z",
//       "updatedAt": "2024-06-09T12:24:35.763Z",
//       "id_parser": "85197",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "137": {
//       "id": 137,
//       "Name": "Woodstyle Bravo",
//       "createdAt": "2024-06-09T12:24:47.911Z",
//       "updatedAt": "2024-06-09T12:24:47.911Z",
//       "id_parser": "85198",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "138": {
//       "id": 138,
//       "Name": "Sinteros",
//       "createdAt": "2024-06-09T12:25:31.212Z",
//       "updatedAt": "2024-06-09T12:25:31.212Z",
//       "id_parser": "85100",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "139": {
//       "id": 139,
//       "Name": "Sinteros Europlank",
//       "createdAt": "2024-06-09T12:25:45.371Z",
//       "updatedAt": "2024-06-09T12:25:45.371Z",
//       "id_parser": "85101",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "140": {
//       "id": 140,
//       "Name": "Tarkett",
//       "createdAt": "2024-06-09T12:25:59.795Z",
//       "updatedAt": "2024-06-09T12:25:59.795Z",
//       "id_parser": "85084",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "141": {
//       "id": 141,
//       "Name": "Tarkett Rumba",
//       "createdAt": "2024-06-09T12:26:13.379Z",
//       "updatedAt": "2024-06-09T12:26:13.379Z",
//       "id_parser": "85089",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "142": {
//       "id": 142,
//       "Name": "Tarkett Salsa",
//       "createdAt": "2024-06-09T12:26:28.633Z",
//       "updatedAt": "2024-06-09T12:26:28.633Z",
//       "id_parser": "85092",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "143": {
//       "id": 143,
//       "Name": "Плитка и Керамогранит",
//       "createdAt": "2024-06-09T12:26:54.193Z",
//       "updatedAt": "2024-06-09T12:26:54.193Z",
//       "id_parser": "plitka",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "144": {
//       "id": 144,
//       "Name": "Axima",
//       "createdAt": "2024-06-09T12:27:12.673Z",
//       "updatedAt": "2024-06-09T12:27:12.673Z",
//       "id_parser": "85221",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "145": {
//       "id": 145,
//       "Name": "Axima Geneva",
//       "createdAt": "2024-06-09T12:27:26.959Z",
//       "updatedAt": "2024-06-09T12:27:26.959Z",
//       "id_parser": "85222",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "146": {
//       "id": 146,
//       "Name": "Axima Amsterdam",
//       "createdAt": "2024-06-09T12:27:39.333Z",
//       "updatedAt": "2024-06-09T12:27:39.333Z",
//       "id_parser": "85225",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "147": {
//       "id": 147,
//       "Name": "Axima Дорадо",
//       "createdAt": "2024-06-09T12:27:59.515Z",
//       "updatedAt": "2024-06-09T12:27:59.515Z",
//       "id_parser": "85245",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "148": {
//       "id": 148,
//       "Name": "Axima Livorno",
//       "createdAt": "2024-06-09T12:28:11.693Z",
//       "updatedAt": "2024-06-09T12:28:11.693Z",
//       "id_parser": "85275",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "149": {
//       "id": 149,
//       "Name": "Axima Budapest",
//       "createdAt": "2024-06-09T12:28:25.344Z",
//       "updatedAt": "2024-06-09T12:28:25.344Z",
//       "id_parser": "85276",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "150": {
//       "id": 150,
//       "Name": "Axima Bergen",
//       "createdAt": "2024-06-09T12:28:36.779Z",
//       "updatedAt": "2024-06-09T12:28:36.779Z",
//       "id_parser": "85278",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "151": {
//       "id": 151,
//       "Name": "Axima Флорида",
//       "createdAt": "2024-06-09T12:28:50.950Z",
//       "updatedAt": "2024-06-09T12:28:50.950Z",
//       "id_parser": "85293",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "152": {
//       "id": 152,
//       "Name": "Axima Куба",
//       "createdAt": "2024-06-09T12:29:02.261Z",
//       "updatedAt": "2024-06-09T12:29:02.261Z",
//       "id_parser": "85294",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "153": {
//       "id": 153,
//       "Name": "Axima Dakar",
//       "createdAt": "2024-06-09T12:29:18.144Z",
//       "updatedAt": "2024-06-09T12:29:18.144Z",
//       "id_parser": "85327",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "154": {
//       "id": 154,
//       "Name": "Axima Форест",
//       "createdAt": "2024-06-09T12:29:29.457Z",
//       "updatedAt": "2024-06-09T12:29:29.457Z",
//       "id_parser": "85331",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "155": {
//       "id": 155,
//       "Name": "Axima Дублин",
//       "createdAt": "2024-06-09T12:29:47.204Z",
//       "updatedAt": "2024-06-09T12:29:47.204Z",
//       "id_parser": "85332",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "156": {
//       "id": 156,
//       "Name": "Axima Каталония",
//       "createdAt": "2024-06-09T12:30:03.209Z",
//       "updatedAt": "2024-06-09T12:30:03.209Z",
//       "id_parser": "85333",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "157": {
//       "id": 157,
//       "Name": "Axima Паркет",
//       "createdAt": "2024-06-09T12:30:13.097Z",
//       "updatedAt": "2024-06-09T12:30:13.097Z",
//       "id_parser": "85334",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "158": {
//       "id": 158,
//       "Name": "Axima Loft Wood",
//       "createdAt": "2024-06-09T12:30:24.348Z",
//       "updatedAt": "2024-06-09T12:30:24.348Z",
//       "id_parser": "85336",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "159": {
//       "id": 159,
//       "Name": "Axima Ницца",
//       "createdAt": "2024-06-09T12:30:35.081Z",
//       "updatedAt": "2024-06-09T12:30:35.081Z",
//       "id_parser": "85345",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "160": {
//       "id": 160,
//       "Name": "Axima Персей",
//       "createdAt": "2024-06-09T12:30:47.135Z",
//       "updatedAt": "2024-06-09T12:30:47.135Z",
//       "id_parser": "85347",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "161": {
//       "id": 161,
//       "Name": "Axima Орлеан",
//       "createdAt": "2024-06-09T12:30:57.808Z",
//       "updatedAt": "2024-06-09T12:30:57.808Z",
//       "id_parser": "85348",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "162": {
//       "id": 162,
//       "Name": "Axima Венеция",
//       "createdAt": "2024-06-09T12:31:08.731Z",
//       "updatedAt": "2024-06-09T12:31:08.731Z",
//       "id_parser": "85351",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "163": {
//       "id": 163,
//       "Name": "Axima Анкара",
//       "createdAt": "2024-06-09T12:31:20.969Z",
//       "updatedAt": "2024-06-09T12:31:20.969Z",
//       "id_parser": "85352",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "164": {
//       "id": 164,
//       "Name": "Axima Палермо",
//       "createdAt": "2024-06-09T12:31:31.659Z",
//       "updatedAt": "2024-06-09T12:31:31.659Z",
//       "id_parser": "85354",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "165": {
//       "id": 165,
//       "Name": "Axima Модена",
//       "createdAt": "2024-06-09T12:31:42.035Z",
//       "updatedAt": "2024-06-09T12:31:42.035Z",
//       "id_parser": "85358",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "166": {
//       "id": 166,
//       "Name": "Axima Мегаполис",
//       "createdAt": "2024-06-09T12:31:52.468Z",
//       "updatedAt": "2024-06-09T12:31:52.468Z",
//       "id_parser": "85360",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "167": {
//       "id": 167,
//       "Name": "Axima Мартиника",
//       "createdAt": "2024-06-09T12:32:04.095Z",
//       "updatedAt": "2024-06-09T12:32:04.095Z",
//       "id_parser": "85361",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "168": {
//       "id": 168,
//       "Name": "Axima Дубай",
//       "createdAt": "2024-06-09T12:32:16.271Z",
//       "updatedAt": "2024-06-09T12:32:16.271Z",
//       "id_parser": "85363",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "169": {
//       "id": 169,
//       "Name": "Axima Гавана",
//       "createdAt": "2024-06-09T12:32:28.541Z",
//       "updatedAt": "2024-06-09T12:32:28.541Z",
//       "id_parser": "85364",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "170": {
//       "id": 170,
//       "Name": "Axima Виченца",
//       "createdAt": "2024-06-09T12:32:39.241Z",
//       "updatedAt": "2024-06-09T12:32:39.241Z",
//       "id_parser": "85365",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "171": {
//       "id": 171,
//       "Name": "Axima Андалусия",
//       "createdAt": "2024-06-09T12:32:49.486Z",
//       "updatedAt": "2024-06-09T12:32:49.486Z",
//       "id_parser": "85367",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "172": {
//       "id": 172,
//       "Name": "Axima BOSTON",
//       "createdAt": "2024-06-09T12:32:59.596Z",
//       "updatedAt": "2024-06-09T12:32:59.596Z",
//       "id_parser": "85374",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "173": {
//       "id": 173,
//       "Name": "Axima BONN",
//       "createdAt": "2024-06-09T12:33:10.311Z",
//       "updatedAt": "2024-06-09T12:33:10.311Z",
//       "id_parser": "85375",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "174": {
//       "id": 174,
//       "Name": "Axima BERLIN",
//       "createdAt": "2024-06-09T12:33:21.336Z",
//       "updatedAt": "2024-06-09T12:33:21.336Z",
//       "id_parser": "85376",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "175": {
//       "id": 175,
//       "Name": "Axima BARI",
//       "createdAt": "2024-06-09T12:33:31.788Z",
//       "updatedAt": "2024-06-09T12:33:31.788Z",
//       "id_parser": "85377",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "176": {
//       "id": 176,
//       "Name": "Axima BARCELONA",
//       "createdAt": "2024-06-09T12:33:41.994Z",
//       "updatedAt": "2024-06-09T12:33:41.994Z",
//       "id_parser": "85378",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "177": {
//       "id": 177,
//       "Name": "Axima ANTWERP",
//       "createdAt": "2024-06-09T12:33:52.875Z",
//       "updatedAt": "2024-06-09T12:33:52.875Z",
//       "id_parser": "85379",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "178": {
//       "id": 178,
//       "Name": "Axima ALICANTE",
//       "createdAt": "2024-06-09T12:34:03.110Z",
//       "updatedAt": "2024-06-09T12:34:03.110Z",
//       "id_parser": "85380",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "179": {
//       "id": 179,
//       "Name": "Beryoza Ceramica",
//       "createdAt": "2024-06-09T12:34:15.487Z",
//       "updatedAt": "2024-06-09T12:34:15.487Z",
//       "id_parser": "85382",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "180": {
//       "id": 180,
//       "Name": "Beryoza Ceramica Верона",
//       "createdAt": "2024-06-09T12:34:26.761Z",
//       "updatedAt": "2024-06-09T12:34:26.761Z",
//       "id_parser": "85383",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "181": {
//       "id": 181,
//       "Name": "Beryoza Ceramica Атланта",
//       "createdAt": "2024-06-09T12:34:39.061Z",
//       "updatedAt": "2024-06-09T12:34:39.061Z",
//       "id_parser": "85384",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "182": {
//       "id": 182,
//       "Name": "Lasselsberger",
//       "createdAt": "2024-06-09T12:34:53.255Z",
//       "updatedAt": "2024-06-09T12:34:53.255Z",
//       "id_parser": "85223",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "183": {
//       "id": 183,
//       "Name": "Lasselsberger Аспен",
//       "createdAt": "2024-06-09T12:35:06.439Z",
//       "updatedAt": "2024-06-09T12:35:06.439Z",
//       "id_parser": "85224",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "184": {
//       "id": 184,
//       "Name": "Lasselsberger Окленд",
//       "createdAt": "2024-06-09T12:35:19.686Z",
//       "updatedAt": "2024-06-09T12:35:19.686Z",
//       "id_parser": "85231",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "185": {
//       "id": 185,
//       "Name": "Lasselsberger Локивуд",
//       "createdAt": "2024-06-09T12:35:30.626Z",
//       "updatedAt": "2024-06-09T12:35:30.626Z",
//       "id_parser": "85232",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "186": {
//       "id": 186,
//       "Name": "Lasselsberger Шэдоу",
//       "createdAt": "2024-06-09T12:35:41.928Z",
//       "updatedAt": "2024-06-09T12:35:41.928Z",
//       "id_parser": "85235",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "187": {
//       "id": 187,
//       "Name": "Lasselsberger Фиори Гриджио",
//       "createdAt": "2024-06-09T12:35:54.827Z",
//       "updatedAt": "2024-06-09T12:35:54.827Z",
//       "id_parser": "85238",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "188": {
//       "id": 188,
//       "Name": "Lasselsberger Смарт",
//       "createdAt": "2024-06-09T12:36:06.235Z",
//       "updatedAt": "2024-06-09T12:36:06.235Z",
//       "id_parser": "85247",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "189": {
//       "id": 189,
//       "Name": "Lasselsberger Каррара Нова",
//       "createdAt": "2024-06-09T12:36:16.616Z",
//       "updatedAt": "2024-06-09T12:36:16.616Z",
//       "id_parser": "85249",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "190": {
//       "id": 190,
//       "Name": "Lasselsberger Гуннар",
//       "createdAt": "2024-06-09T12:36:29.107Z",
//       "updatedAt": "2024-06-09T12:36:29.107Z",
//       "id_parser": "85250",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "191": {
//       "id": 191,
//       "Name": "Lasselsberger Блюм",
//       "createdAt": "2024-06-09T12:36:43.555Z",
//       "updatedAt": "2024-06-09T12:36:43.555Z",
//       "id_parser": "85251",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "192": {
//       "id": 192,
//       "Name": "Lasselsberger Блисс",
//       "createdAt": "2024-06-09T12:36:53.856Z",
//       "updatedAt": "2024-06-09T12:36:53.856Z",
//       "id_parser": "85252",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "193": {
//       "id": 193,
//       "Name": "Lasselsberger Эльзас",
//       "createdAt": "2024-06-09T12:37:05.965Z",
//       "updatedAt": "2024-06-09T12:37:05.965Z",
//       "id_parser": "85253",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "194": {
//       "id": 194,
//       "Name": "Lasselsberger Шпицберген",
//       "createdAt": "2024-06-09T12:37:20.801Z",
//       "updatedAt": "2024-06-09T12:37:20.801Z",
//       "id_parser": "85254",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "195": {
//       "id": 195,
//       "Name": "Lasselsberger Шервуд",
//       "createdAt": "2024-06-09T12:37:33.393Z",
//       "updatedAt": "2024-06-09T12:37:33.393Z",
//       "id_parser": "85255",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "196": {
//       "id": 196,
//       "Name": "Lasselsberger Цемент Стайл",
//       "createdAt": "2024-06-09T12:37:47.289Z",
//       "updatedAt": "2024-06-09T12:37:47.289Z",
//       "id_parser": "85257",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "197": {
//       "id": 197,
//       "Name": "Lasselsberger Титан",
//       "createdAt": "2024-06-09T12:37:59.297Z",
//       "updatedAt": "2024-06-09T12:37:59.297Z",
//       "id_parser": "85258",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "198": {
//       "id": 198,
//       "Name": "Lasselsberger Таверна",
//       "createdAt": "2024-06-09T12:38:12.909Z",
//       "updatedAt": "2024-06-09T12:38:12.909Z",
//       "id_parser": "85259",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "199": {
//       "id": 199,
//       "Name": "Lasselsberger Ривер Вуд",
//       "createdAt": "2024-06-09T12:38:38.126Z",
//       "updatedAt": "2024-06-09T12:38:38.126Z",
//       "id_parser": "85260",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "200": {
//       "id": 200,
//       "Name": "Lasselsberger Патио",
//       "createdAt": "2024-06-09T12:38:49.424Z",
//       "updatedAt": "2024-06-09T12:38:49.424Z",
//       "id_parser": "85261",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "201": {
//       "id": 201,
//       "Name": "Lasselsberger Македония",
//       "createdAt": "2024-06-09T12:39:05.898Z",
//       "updatedAt": "2024-06-09T12:39:05.898Z",
//       "id_parser": "85262",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "202": {
//       "id": 202,
//       "Name": "Lasselsberger Ипанема",
//       "createdAt": "2024-06-09T12:39:22.239Z",
//       "updatedAt": "2024-06-09T12:39:22.239Z",
//       "id_parser": "85265",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "203": {
//       "id": 203,
//       "Name": "Lasselsberger Гаусс",
//       "createdAt": "2024-06-09T12:39:50.583Z",
//       "updatedAt": "2024-06-09T12:39:50.583Z",
//       "id_parser": "85269",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "204": {
//       "id": 204,
//       "Name": "Lasselsberger Винтаж",
//       "createdAt": "2024-06-09T12:40:01.856Z",
//       "updatedAt": "2024-06-09T12:40:01.856Z",
//       "id_parser": "85270",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "205": {
//       "id": 205,
//       "Name": "Lasselsberger Вестерн",
//       "createdAt": "2024-06-09T12:40:12.158Z",
//       "updatedAt": "2024-06-09T12:40:12.158Z",
//       "id_parser": "85271",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "206": {
//       "id": 206,
//       "Name": "Lasselsberger Венский лес",
//       "createdAt": "2024-06-09T12:40:24.704Z",
//       "updatedAt": "2024-06-09T12:40:24.704Z",
//       "id_parser": "85272",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "207": {
//       "id": 207,
//       "Name": "Lasselsberger Альбервуд",
//       "createdAt": "2024-06-09T12:40:40.725Z",
//       "updatedAt": "2024-06-09T12:40:40.725Z",
//       "id_parser": "85273",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "208": {
//       "id": 208,
//       "Name": "Lasselsberger Айриш",
//       "createdAt": "2024-06-09T12:40:50.547Z",
//       "updatedAt": "2024-06-09T12:40:50.547Z",
//       "id_parser": "85274",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "209": {
//       "id": 209,
//       "Name": "Lasselsberger Кинцуги",
//       "createdAt": "2024-06-09T12:41:02.848Z",
//       "updatedAt": "2024-06-09T12:41:02.848Z",
//       "id_parser": "85280",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "210": {
//       "id": 210,
//       "Name": "Lasselsberger Домино",
//       "createdAt": "2024-06-09T12:41:32.430Z",
//       "updatedAt": "2024-06-09T12:41:32.430Z",
//       "id_parser": "85281",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "211": {
//       "id": 211,
//       "Name": "Lasselsberger Мезон",
//       "createdAt": "2024-06-09T12:41:54.499Z",
//       "updatedAt": "2024-06-09T12:41:54.499Z",
//       "id_parser": "85381",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "212": {
//       "id": 212,
//       "Name": "Primavera",
//       "createdAt": "2024-06-09T12:42:12.831Z",
//       "updatedAt": "2024-06-09T12:42:12.831Z",
//       "id_parser": "85300",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "213": {
//       "id": 213,
//       "Name": "Primavera 60х60",
//       "createdAt": "2024-06-09T12:42:24.811Z",
//       "updatedAt": "2024-06-09T12:42:24.811Z",
//       "id_parser": "85301",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "214": {
//       "id": 214,
//       "Name": "Primavera 60х120",
//       "createdAt": "2024-06-09T12:42:35.843Z",
//       "updatedAt": "2024-06-09T12:42:35.843Z",
//       "id_parser": "85302",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "215": {
//       "id": 215,
//       "Name": "Нефрит-Керамика",
//       "createdAt": "2024-06-09T12:42:56.003Z",
//       "updatedAt": "2024-06-09T12:42:56.003Z",
//       "id_parser": "85239",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "216": {
//       "id": 216,
//       "Name": "Нефрит-Керамика Гермес",
//       "createdAt": "2024-06-09T12:43:06.582Z",
//       "updatedAt": "2024-06-09T12:43:06.582Z",
//       "id_parser": "85283",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "217": {
//       "id": 217,
//       "Name": "Нефрит-Керамика Эссен",
//       "createdAt": "2024-06-09T12:43:18.509Z",
//       "updatedAt": "2024-06-09T12:43:18.509Z",
//       "id_parser": "85303",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "218": {
//       "id": 218,
//       "Name": "Нефрит-Керамика Фьюжен",
//       "createdAt": "2024-06-09T12:43:38.985Z",
//       "updatedAt": "2024-06-09T12:43:38.985Z",
//       "id_parser": "85305",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "219": {
//       "id": 219,
//       "Name": "Tarkett",
//       "createdAt": "2024-06-09T12:44:22.457Z",
//       "updatedAt": "2024-06-09T12:44:22.457Z",
//       "id_parser": "85097",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "220": {
//       "id": 220,
//       "Name": "Tarkett - Линолеум",
//       "createdAt": "2024-06-09T12:44:44.666Z",
//       "updatedAt": "2024-06-09T12:44:44.666Z",
//       "id_parser": "85098",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "221": {
//       "id": 221,
//       "Name": "CronaFloor",
//       "createdAt": "2024-06-09T12:45:16.352Z",
//       "updatedAt": "2024-06-09T12:45:16.352Z",
//       "id_parser": "86009",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "222": {
//       "id": 222,
//       "Name": "CronaFloor Nano",
//       "createdAt": "2024-06-09T12:45:28.407Z",
//       "updatedAt": "2024-06-09T12:45:28.407Z",
//       "id_parser": "86010",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "223": {
//       "id": 223,
//       "Name": "CronaFloor Wood",
//       "createdAt": "2024-06-09T12:45:40.031Z",
//       "updatedAt": "2024-06-09T12:45:40.031Z",
//       "id_parser": "86011",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "224": {
//       "id": 224,
//       "Name": "CronaFloor Stone",
//       "createdAt": "2024-06-09T12:45:52.019Z",
//       "updatedAt": "2024-06-09T12:45:52.019Z",
//       "id_parser": "86012",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "225": {
//       "id": 225,
//       "Name": "Sinteros",
//       "createdAt": "2024-06-09T12:47:03.731Z",
//       "updatedAt": "2024-06-09T12:47:03.731Z",
//       "id_parser": "86846",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "226": {
//       "id": 226,
//       "Name": "Sinteros - Линолеум",
//       "createdAt": "2024-06-09T12:47:16.251Z",
//       "updatedAt": "2024-06-09T12:47:16.251Z",
//       "id_parser": "86847",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "227": {
//       "id": 227,
//       "Name": "Зартекс",
//       "createdAt": "2024-06-09T12:48:25.240Z",
//       "updatedAt": "2024-06-09T12:48:25.240Z",
//       "id_parser": "86848",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "228": {
//       "id": 228,
//       "Name": "Зартекс Paradise",
//       "createdAt": "2024-06-09T12:48:55.633Z",
//       "updatedAt": "2024-06-09T12:48:55.633Z",
//       "id_parser": "86849",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "229": {
//       "id": 229,
//       "Name": "Зартекс Кидс",
//       "createdAt": "2024-06-09T12:49:05.563Z",
//       "updatedAt": "2024-06-09T12:49:05.563Z",
//       "id_parser": "86850",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "230": {
//       "id": 230,
//       "Name": "Зартекс Савойя",
//       "createdAt": "2024-06-09T12:49:15.620Z",
//       "updatedAt": "2024-06-09T12:49:15.620Z",
//       "id_parser": "86851",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "231": {
//       "id": 231,
//       "Name": "Зартекс Tesoro",
//       "createdAt": "2024-06-09T12:49:26.109Z",
//       "updatedAt": "2024-06-09T12:49:26.109Z",
//       "id_parser": "86852",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "232": {
//       "id": 232,
//       "Name": "Зартекс Amarena",
//       "createdAt": "2024-06-09T12:49:35.853Z",
//       "updatedAt": "2024-06-09T12:49:35.853Z",
//       "id_parser": "86853",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "233": {
//       "id": 233,
//       "Name": "Зартекс Florida",
//       "createdAt": "2024-06-09T12:49:45.638Z",
//       "updatedAt": "2024-06-09T12:49:45.638Z",
//       "id_parser": "86854",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "234": {
//       "id": 234,
//       "Name": "Зартекс Provans",
//       "createdAt": "2024-06-09T12:49:55.853Z",
//       "updatedAt": "2024-06-09T12:49:55.853Z",
//       "id_parser": "86855",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "235": {
//       "id": 235,
//       "Name": "Зартекс Рифей",
//       "createdAt": "2024-06-09T12:50:05.793Z",
//       "updatedAt": "2024-06-09T12:50:05.793Z",
//       "id_parser": "86856",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "236": {
//       "id": 236,
//       "Name": "Зартекс Varna",
//       "createdAt": "2024-06-09T12:50:15.416Z",
//       "updatedAt": "2024-06-09T12:50:15.416Z",
//       "id_parser": "86857",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "237": {
//       "id": 237,
//       "Name": "Зартекс Трек",
//       "createdAt": "2024-06-09T12:50:25.684Z",
//       "updatedAt": "2024-06-09T12:50:25.684Z",
//       "id_parser": "86858",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "238": {
//       "id": 238,
//       "Name": "Зартекс Рингтон",
//       "createdAt": "2024-06-09T12:50:35.157Z",
//       "updatedAt": "2024-06-09T12:50:35.157Z",
//       "id_parser": "86859",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "239": {
//       "id": 239,
//       "Name": "Зартекс Кремона",
//       "createdAt": "2024-06-09T12:50:46.687Z",
//       "updatedAt": "2024-06-09T12:50:46.687Z",
//       "id_parser": "86860",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "240": {
//       "id": 240,
//       "Name": "Зартекс Savana",
//       "createdAt": "2024-06-09T12:50:56.287Z",
//       "updatedAt": "2024-06-09T12:50:56.287Z",
//       "id_parser": "86861",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "241": {
//       "id": 241,
//       "Name": "Зартекс Tunis",
//       "createdAt": "2024-06-09T12:51:07.221Z",
//       "updatedAt": "2024-06-09T12:51:07.221Z",
//       "id_parser": "86862",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "242": {
//       "id": 242,
//       "Name": "Зартекс Satine Revelation",
//       "createdAt": "2024-06-09T12:51:17.064Z",
//       "updatedAt": "2024-06-09T12:51:17.064Z",
//       "id_parser": "86863",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "243": {
//       "id": 243,
//       "Name": "Зартекс Sense Highlights",
//       "createdAt": "2024-06-09T12:51:40.975Z",
//       "updatedAt": "2024-06-09T12:51:40.975Z",
//       "id_parser": "86864",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "244": {
//       "id": 244,
//       "Name": "Зартекс Essential Soft",
//       "createdAt": "2024-06-09T12:51:50.754Z",
//       "updatedAt": "2024-06-09T12:51:50.754Z",
//       "id_parser": "86865",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "245": {
//       "id": 245,
//       "Name": "Зартекс Wonderful Soft",
//       "createdAt": "2024-06-09T12:52:37.191Z",
//       "updatedAt": "2024-06-09T12:52:37.191Z",
//       "id_parser": "86866",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "246": {
//       "id": 246,
//       "Name": "Зартекс Конар",
//       "createdAt": "2024-06-09T12:52:58.534Z",
//       "updatedAt": "2024-06-09T12:52:58.534Z",
//       "id_parser": "88031",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "247": {
//       "id": 247,
//       "Name": "AW Masquerade",
//       "createdAt": "2024-06-09T12:53:32.914Z",
//       "updatedAt": "2024-06-09T12:53:32.914Z",
//       "id_parser": "86867",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "248": {
//       "id": 248,
//       "Name": "AW Masquerade Molto",
//       "createdAt": "2024-06-10T08:49:46.386Z",
//       "updatedAt": "2024-06-10T08:49:46.386Z",
//       "id_parser": "86868",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "249": {
//       "id": 249,
//       "Name": "AW Masquerade Gala",
//       "createdAt": "2024-06-10T08:49:59.549Z",
//       "updatedAt": "2024-06-10T08:49:59.549Z",
//       "id_parser": "86869",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "250": {
//       "id": 250,
//       "Name": "AW Masquerade Certosa",
//       "createdAt": "2024-06-10T08:50:14.895Z",
//       "updatedAt": "2024-06-10T08:50:14.895Z",
//       "id_parser": "86870",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "251": {
//       "id": 251,
//       "Name": "AW Masquerade Messalina",
//       "createdAt": "2024-06-10T08:50:26.389Z",
//       "updatedAt": "2024-06-10T08:50:26.389Z",
//       "id_parser": "86871",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "252": {
//       "id": 252,
//       "Name": "AW Masquerade Porzia",
//       "createdAt": "2024-06-10T08:50:45.201Z",
//       "updatedAt": "2024-06-10T08:50:45.201Z",
//       "id_parser": "86872",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "253": {
//       "id": 253,
//       "Name": "AW Masquerade Mezza",
//       "createdAt": "2024-06-10T08:51:02.021Z",
//       "updatedAt": "2024-06-10T08:51:02.021Z",
//       "id_parser": "86873",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "254": {
//       "id": 254,
//       "Name": "AW Masquerade Lamia",
//       "createdAt": "2024-06-10T08:52:09.847Z",
//       "updatedAt": "2024-06-10T08:52:09.847Z",
//       "id_parser": "86874",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "255": {
//       "id": 255,
//       "Name": "AW Masquerade Costanza",
//       "createdAt": "2024-06-10T08:52:21.239Z",
//       "updatedAt": "2024-06-10T08:52:21.239Z",
//       "id_parser": "86875",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "256": {
//       "id": 256,
//       "Name": "AW Masquerade Palio",
//       "createdAt": "2024-06-10T08:52:33.201Z",
//       "updatedAt": "2024-06-10T08:52:33.201Z",
//       "id_parser": "86876",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "257": {
//       "id": 257,
//       "Name": "AW Masquerade Kai",
//       "createdAt": "2024-06-10T08:52:43.332Z",
//       "updatedAt": "2024-06-10T08:52:43.332Z",
//       "id_parser": "86877",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "258": {
//       "id": 258,
//       "Name": "AW Masquerade Corallina",
//       "createdAt": "2024-06-10T08:52:54.826Z",
//       "updatedAt": "2024-06-10T08:52:54.826Z",
//       "id_parser": "86878",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "259": {
//       "id": 259,
//       "Name": "AW Masquerade Fedone",
//       "createdAt": "2024-06-10T08:53:12.178Z",
//       "updatedAt": "2024-06-10T08:53:12.178Z",
//       "id_parser": "86879",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "260": {
//       "id": 260,
//       "Name": "AW Masquerade Moana",
//       "createdAt": "2024-06-10T09:39:49.497Z",
//       "updatedAt": "2024-06-10T09:39:49.497Z",
//       "id_parser": "86880",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "261": {
//       "id": 261,
//       "Name": "AW Masquerade Dioniso",
//       "createdAt": "2024-06-10T09:40:00.313Z",
//       "updatedAt": "2024-06-10T09:40:00.313Z",
//       "id_parser": "86881",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "262": {
//       "id": 262,
//       "Name": "AW Masquerade Rosetta",
//       "createdAt": "2024-06-10T09:40:11.204Z",
//       "updatedAt": "2024-06-10T09:40:11.204Z",
//       "id_parser": "86882",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "263": {
//       "id": 263,
//       "Name": "AW Masquerade Varuna",
//       "createdAt": "2024-06-10T09:40:21.115Z",
//       "updatedAt": "2024-06-10T09:40:21.115Z",
//       "id_parser": "86883",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "264": {
//       "id": 264,
//       "Name": "AW Masquerade Moretta",
//       "createdAt": "2024-06-10T09:40:31.213Z",
//       "updatedAt": "2024-06-10T09:40:31.213Z",
//       "id_parser": "86884",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "265": {
//       "id": 265,
//       "Name": "AW Masquerade Euphoria",
//       "createdAt": "2024-06-10T09:40:43.413Z",
//       "updatedAt": "2024-06-10T09:40:43.413Z",
//       "id_parser": "86885",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "266": {
//       "id": 266,
//       "Name": "AW Masquerade Yara",
//       "createdAt": "2024-06-10T09:41:04.990Z",
//       "updatedAt": "2024-06-10T09:41:04.990Z",
//       "id_parser": "86886",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "267": {
//       "id": 267,
//       "Name": "Пол",
//       "createdAt": "2024-06-10T09:41:32.272Z",
//       "updatedAt": "2024-06-10T09:41:32.272Z",
//       "id_parser": "84843",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "268": {
//       "id": 268,
//       "Name": "Подложки",
//       "createdAt": "2024-06-10T09:41:41.767Z",
//       "updatedAt": "2024-06-10T09:41:41.767Z",
//       "id_parser": "84858",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "269": {
//       "id": 269,
//       "Name": "Клей, герметик, монтажные пены",
//       "createdAt": "2024-06-10T09:41:54.628Z",
//       "updatedAt": "2024-06-10T09:41:54.628Z",
//       "id_parser": "84859",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "270": {
//       "id": 270,
//       "Name": "Клей",
//       "createdAt": "2024-06-10T09:42:05.888Z",
//       "updatedAt": "2024-06-10T09:42:05.888Z",
//       "id_parser": "84862",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "271": {
//       "id": 271,
//       "Name": "Sam Negin",
//       "createdAt": "2024-06-10T09:42:23.086Z",
//       "updatedAt": "2024-06-10T09:42:23.086Z",
//       "id_parser": "87998",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "272": {
//       "id": 272,
//       "Name": "Sam Negin Uyma",
//       "createdAt": "2024-06-10T09:42:39.633Z",
//       "updatedAt": "2024-06-10T09:42:39.633Z",
//       "id_parser": "87999",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "273": {
//       "id": 273,
//       "Name": "Sam Negin Kibrit",
//       "createdAt": "2024-06-10T10:01:33.207Z",
//       "updatedAt": "2024-06-10T10:01:33.207Z",
//       "id_parser": "88000",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "274": {
//       "id": 274,
//       "Name": "Mers",
//       "createdAt": "2024-06-10T10:02:57.963Z",
//       "updatedAt": "2024-06-10T10:02:57.963Z",
//       "id_parser": "88001",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "275": {
//       "id": 275,
//       "Name": "Mers Lalee",
//       "createdAt": "2024-06-10T10:03:20.214Z",
//       "updatedAt": "2024-06-10T10:03:20.214Z",
//       "id_parser": "88002",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "276": {
//       "id": 276,
//       "Name": "Mers Victoria Lux",
//       "createdAt": "2024-06-10T10:03:31.239Z",
//       "updatedAt": "2024-06-10T10:03:31.239Z",
//       "id_parser": "88003",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "277": {
//       "id": 277,
//       "Name": "Filoteks",
//       "createdAt": "2024-06-10T10:03:44.496Z",
//       "updatedAt": "2024-06-10T10:03:44.496Z",
//       "id_parser": "88004",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "278": {
//       "id": 278,
//       "Name": "Filoteks Star",
//       "createdAt": "2024-06-10T10:03:55.008Z",
//       "updatedAt": "2024-06-10T10:03:55.008Z",
//       "id_parser": "88005",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "279": {
//       "id": 279,
//       "Name": "Filoteks Mercury Elite",
//       "createdAt": "2024-06-10T10:04:06.154Z",
//       "updatedAt": "2024-06-10T10:04:06.154Z",
//       "id_parser": "88006",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "280": {
//       "id": 280,
//       "Name": "Filoteks Discovery",
//       "createdAt": "2024-06-10T10:04:20.751Z",
//       "updatedAt": "2024-06-10T10:04:20.751Z",
//       "id_parser": "88007",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "281": {
//       "id": 281,
//       "Name": "Filoteks Vegas",
//       "createdAt": "2024-06-10T10:04:30.422Z",
//       "updatedAt": "2024-06-10T10:04:30.422Z",
//       "id_parser": "88008",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "282": {
//       "id": 282,
//       "Name": "Safyun",
//       "createdAt": "2024-06-10T10:04:43.890Z",
//       "updatedAt": "2024-06-10T10:04:43.890Z",
//       "id_parser": "88009",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "283": {
//       "id": 283,
//       "Name": "Safyun Alissa",
//       "createdAt": "2024-06-10T10:04:55.726Z",
//       "updatedAt": "2024-06-10T10:04:55.726Z",
//       "id_parser": "88010",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "284": {
//       "id": 284,
//       "Name": "Safyun Niceness",
//       "createdAt": "2024-06-10T10:05:09.225Z",
//       "updatedAt": "2024-06-10T10:05:09.225Z",
//       "id_parser": "88011",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "285": {
//       "id": 285,
//       "Name": "Safyun Liparis",
//       "createdAt": "2024-06-10T10:05:20.982Z",
//       "updatedAt": "2024-06-10T10:05:20.982Z",
//       "id_parser": "88012",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "286": {
//       "id": 286,
//       "Name": "Merinos",
//       "createdAt": "2024-06-10T10:05:38.160Z",
//       "updatedAt": "2024-06-10T10:05:38.160Z",
//       "id_parser": "88013",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "287": {
//       "id": 287,
//       "Name": "Merinos Mix Art",
//       "createdAt": "2024-06-10T10:05:49.891Z",
//       "updatedAt": "2024-06-10T10:05:49.891Z",
//       "id_parser": "88014",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "288": {
//       "id": 288,
//       "Name": "Merinos Milan",
//       "createdAt": "2024-06-10T10:06:02.178Z",
//       "updatedAt": "2024-06-10T10:06:02.178Z",
//       "id_parser": "88015",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "289": {
//       "id": 289,
//       "Name": "Merinos Space Art",
//       "createdAt": "2024-06-10T10:06:13.922Z",
//       "updatedAt": "2024-06-10T10:06:13.922Z",
//       "id_parser": "88016",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "290": {
//       "id": 290,
//       "Name": "Plato Hali",
//       "createdAt": "2024-06-10T10:06:26.108Z",
//       "updatedAt": "2024-06-10T10:06:26.108Z",
//       "id_parser": "88017",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "291": {
//       "id": 291,
//       "Name": "Plato Hali Vitrin",
//       "createdAt": "2024-06-10T10:06:37.649Z",
//       "updatedAt": "2024-06-10T10:06:37.649Z",
//       "id_parser": "88018",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "292": {
//       "id": 292,
//       "Name": "Plato Hali Parantez Class",
//       "createdAt": "2024-06-10T10:06:49.906Z",
//       "updatedAt": "2024-06-10T10:06:49.906Z",
//       "id_parser": "88019",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "293": {
//       "id": 293,
//       "Name": "Associated Weawers (AW)",
//       "createdAt": "2024-06-10T10:07:04.711Z",
//       "updatedAt": "2024-06-10T10:07:04.711Z",
//       "id_parser": "88020",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "294": {
//       "id": 294,
//       "Name": "Associated Weawers (AW) Cordoba",
//       "createdAt": "2024-06-10T10:07:18.655Z",
//       "updatedAt": "2024-06-10T10:07:18.655Z",
//       "id_parser": "88021",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "295": {
//       "id": 295,
//       "Name": "Associated Weawers (AW) Sunset",
//       "createdAt": "2024-06-10T10:07:31.808Z",
//       "updatedAt": "2024-06-10T10:07:31.808Z",
//       "id_parser": "88022",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "296": {
//       "id": 296,
//       "Name": "Kaplanser",
//       "createdAt": "2024-06-10T10:07:45.458Z",
//       "updatedAt": "2024-06-10T10:07:45.458Z",
//       "id_parser": "88023",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "297": {
//       "id": 297,
//       "Name": "Kaplanser Super Paula",
//       "createdAt": "2024-06-10T10:08:32.267Z",
//       "updatedAt": "2024-06-10T10:08:32.267Z",
//       "id_parser": "88024",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "298": {
//       "id": 298,
//       "Name": "Kaplanser Faiber",
//       "createdAt": "2024-06-10T10:08:42.302Z",
//       "updatedAt": "2024-06-10T10:08:42.302Z",
//       "id_parser": "88025",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "299": {
//       "id": 299,
//       "Name": "Kaplanser Iris",
//       "createdAt": "2024-06-10T10:08:52.738Z",
//       "updatedAt": "2024-06-10T10:08:52.738Z",
//       "id_parser": "88026",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "300": {
//       "id": 300,
//       "Name": "Oz Kaplan",
//       "createdAt": "2024-06-10T10:09:06.724Z",
//       "updatedAt": "2024-06-10T10:09:06.724Z",
//       "id_parser": "88027",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "301": {
//       "id": 301,
//       "Name": "Oz Kaplan Defier",
//       "createdAt": "2024-06-10T10:09:17.746Z",
//       "updatedAt": "2024-06-10T10:09:17.746Z",
//       "id_parser": "88028",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "302": {
//       "id": 302,
//       "Name": "Oz Kaplan Gold Shaggy",
//       "createdAt": "2024-06-10T10:09:28.629Z",
//       "updatedAt": "2024-06-10T10:09:28.629Z",
//       "id_parser": "88029",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "303": {
//       "id": 303,
//       "Name": "Carpetoff",
//       "createdAt": "2024-06-10T10:09:45.877Z",
//       "updatedAt": "2024-06-10T10:09:45.877Z",
//       "id_parser": "88032",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "304": {
//       "id": 304,
//       "Name": "Carpetoff Mira",
//       "createdAt": "2024-06-10T10:09:56.455Z",
//       "updatedAt": "2024-06-10T10:09:56.455Z",
//       "id_parser": "88033",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "305": {
//       "id": 305,
//       "Name": "Витебские Ковры",
//       "createdAt": "2024-06-10T10:10:12.006Z",
//       "updatedAt": "2024-06-10T10:10:12.006Z",
//       "id_parser": "88034",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "306": {
//       "id": 306,
//       "Name": "Витебские Ковры Консонанс",
//       "createdAt": "2024-06-10T10:10:23.708Z",
//       "updatedAt": "2024-06-10T10:10:23.708Z",
//       "id_parser": "88035",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "307": {
//       "id": 307,
//       "Name": "Витебские Ковры Mirt",
//       "createdAt": "2024-06-10T10:10:33.729Z",
//       "updatedAt": "2024-06-10T10:10:33.729Z",
//       "id_parser": "88036",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "308": {
//       "id": 308,
//       "Name": "Витебские Ковры Киндер Микс",
//       "createdAt": "2024-06-10T10:10:47.637Z",
//       "updatedAt": "2024-06-10T10:10:47.637Z",
//       "id_parser": "88037",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "309": {
//       "id": 309,
//       "Name": "Витебские Ковры Эспрессо",
//       "createdAt": "2024-06-10T10:10:58.898Z",
//       "updatedAt": "2024-06-10T10:10:58.898Z",
//       "id_parser": "88038",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "310": {
//       "id": 310,
//       "Name": "Витебские Ковры Шегги",
//       "createdAt": "2024-06-10T10:11:10.154Z",
//       "updatedAt": "2024-06-10T10:11:10.154Z",
//       "id_parser": "88039",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "311": {
//       "id": 311,
//       "Name": "Витебские Ковры Оливия<",
//       "createdAt": "2024-06-10T10:11:21.363Z",
//       "updatedAt": "2024-06-10T10:11:21.363Z",
//       "id_parser": "88040",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "312": {
//       "id": 312,
//       "Name": "Витебские Ковры Сити",
//       "createdAt": "2024-06-10T10:11:30.402Z",
//       "updatedAt": "2024-06-10T10:11:30.402Z",
//       "id_parser": "88041",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "313": {
//       "id": 313,
//       "Name": "Витебские Ковры Boston",
//       "createdAt": "2024-06-10T10:11:40.840Z",
//       "updatedAt": "2024-06-10T10:11:40.840Z",
//       "id_parser": "88042",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "314": {
//       "id": 314,
//       "Name": "Нева Тафт",
//       "createdAt": "2024-06-10T10:12:01.710Z",
//       "updatedAt": "2024-06-10T10:12:01.710Z",
//       "id_parser": "88043",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "315": {
//       "id": 315,
//       "Name": "Нева Тафт Галеон",
//       "createdAt": "2024-06-10T10:12:12.422Z",
//       "updatedAt": "2024-06-10T10:12:12.422Z",
//       "id_parser": "88044",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "316": {
//       "id": 316,
//       "Name": "Нева Тафт Ария",
//       "createdAt": "2024-06-10T10:12:23.413Z",
//       "updatedAt": "2024-06-10T10:12:23.413Z",
//       "id_parser": "88045",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "317": {
//       "id": 317,
//       "Name": "Нева Тафт Фламинго",
//       "createdAt": "2024-06-10T10:12:35.167Z",
//       "updatedAt": "2024-06-10T10:12:35.167Z",
//       "id_parser": "88046",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "318": {
//       "id": 318,
//       "Name": "Нева Тафт Мегаполис",
//       "createdAt": "2024-06-10T10:12:46.594Z",
//       "updatedAt": "2024-06-10T10:12:46.594Z",
//       "id_parser": "88047",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "319": {
//       "id": 319,
//       "Name": "Sintelon",
//       "createdAt": "2024-06-10T10:13:11.233Z",
//       "updatedAt": "2024-06-10T10:13:11.233Z",
//       "id_parser": "88048",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "320": {
//       "id": 320,
//       "Name": "Sintelon Лидер",
//       "createdAt": "2024-06-10T10:13:22.817Z",
//       "updatedAt": "2024-06-10T10:13:22.817Z",
//       "id_parser": "88049",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "321": {
//       "id": 321,
//       "Name": "Sintelon Meridian",
//       "createdAt": "2024-06-10T10:13:32.781Z",
//       "updatedAt": "2024-06-10T10:13:32.781Z",
//       "id_parser": "88050",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "322": {
//       "id": 322,
//       "Name": "Sintelon Favorit URB",
//       "createdAt": "2024-06-10T10:13:42.912Z",
//       "updatedAt": "2024-06-10T10:13:42.912Z",
//       "id_parser": "88051",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "323": {
//       "id": 323,
//       "Name": "Sintelon Staze",
//       "createdAt": "2024-06-10T10:13:52.593Z",
//       "updatedAt": "2024-06-10T10:13:52.593Z",
//       "id_parser": "88052",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "324": {
//       "id": 324,
//       "Name": "Sintelon Capri",
//       "createdAt": "2024-06-10T10:14:02.254Z",
//       "updatedAt": "2024-06-10T10:14:02.254Z",
//       "id_parser": "88053",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "325": {
//       "id": 325,
//       "Name": "Sintelon Sensation Termo",
//       "createdAt": "2024-06-10T10:14:11.446Z",
//       "updatedAt": "2024-06-10T10:14:11.446Z",
//       "id_parser": "88054",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "326": {
//       "id": 326,
//       "Name": "Urggazcarpet",
//       "createdAt": "2024-06-10T10:14:23.893Z",
//       "updatedAt": "2024-06-10T10:14:23.893Z",
//       "id_parser": "88055",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "327": {
//       "id": 327,
//       "Name": "Urggazcarpet Либерти",
//       "createdAt": "2024-06-10T10:14:33.865Z",
//       "updatedAt": "2024-06-10T10:14:33.865Z",
//       "id_parser": "88056",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "328": {
//       "id": 328,
//       "Name": "Urggazcarpet Платан",
//       "createdAt": "2024-06-10T10:14:44.645Z",
//       "updatedAt": "2024-06-10T10:14:44.645Z",
//       "id_parser": "88057",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "329": {
//       "id": 329,
//       "Name": "Urggazcarpet Тополь",
//       "createdAt": "2024-06-10T10:14:54.772Z",
//       "updatedAt": "2024-06-10T10:14:54.772Z",
//       "id_parser": "88058",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "330": {
//       "id": 330,
//       "Name": "Urggazcarpet Twid",
//       "createdAt": "2024-06-10T10:15:06.293Z",
//       "updatedAt": "2024-06-10T10:15:06.293Z",
//       "id_parser": "88059",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "331": {
//       "id": 331,
//       "Name": "Urggazcarpet Vena",
//       "createdAt": "2024-06-10T10:15:16.936Z",
//       "updatedAt": "2024-06-10T10:15:16.936Z",
//       "id_parser": "88060",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "332": {
//       "id": 332,
//       "Name": "Urggazcarpet Vivat",
//       "createdAt": "2024-06-10T10:15:27.390Z",
//       "updatedAt": "2024-06-10T10:15:27.390Z",
//       "id_parser": "88061",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "333": {
//       "id": 333,
//       "Name": "Tarkett",
//       "createdAt": "2024-06-10T10:15:38.785Z",
//       "updatedAt": "2024-06-10T10:15:38.785Z",
//       "id_parser": "88062",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "334": {
//       "id": 334,
//       "Name": "Tarkett Dragon",
//       "createdAt": "2024-06-10T10:15:49.105Z",
//       "updatedAt": "2024-06-10T10:15:49.105Z",
//       "id_parser": "88063",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "335": {
//       "id": 335,
//       "Name": "Novin Ceram",
//       "createdAt": "2024-06-10T10:16:51.789Z",
//       "updatedAt": "2024-06-10T10:16:51.789Z",
//       "id_parser": "90169",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "336": {
//       "id": 336,
//       "Name": "Novin Ceram - 60х60",
//       "createdAt": "2024-06-10T10:17:03.158Z",
//       "updatedAt": "2024-06-10T10:17:03.158Z",
//       "id_parser": "90170",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "337": {
//       "id": 337,
//       "Name": "Novin Ceram - 60х120",
//       "createdAt": "2024-06-10T10:17:16.183Z",
//       "updatedAt": "2024-06-10T10:17:16.183Z",
//       "id_parser": "90171",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "338": {
//       "id": 338,
//       "Name": "Novin Ceram - Утолщенный х2",
//       "createdAt": "2024-06-10T10:17:29.486Z",
//       "updatedAt": "2024-06-10T10:17:29.486Z",
//       "id_parser": "90172",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "339": {
//       "id": 339,
//       "Name": "Prettie Grass",
//       "createdAt": "2024-06-10T10:18:07.672Z",
//       "updatedAt": "2024-06-10T10:18:07.672Z",
//       "id_parser": "90470",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "340": {
//       "id": 340,
//       "Name": "Prettie Grass Deco",
//       "createdAt": "2024-06-10T10:18:18.140Z",
//       "updatedAt": "2024-06-10T10:18:18.140Z",
//       "id_parser": "90472",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "341": {
//       "id": 341,
//       "Name": "Prettie Grass Lux",
//       "createdAt": "2024-06-10T10:18:29.119Z",
//       "updatedAt": "2024-06-10T10:18:29.119Z",
//       "id_parser": "90473",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "342": {
//       "id": 342,
//       "Name": "Prettie Grass",
//       "createdAt": "2024-06-10T10:18:39.131Z",
//       "updatedAt": "2024-06-10T10:18:39.131Z",
//       "id_parser": "90474",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "343": {
//       "id": 343,
//       "Name": "Люберецкие ковры",
//       "createdAt": "2024-06-10T10:18:54.599Z",
//       "updatedAt": "2024-06-10T10:18:54.599Z",
//       "id_parser": "90471",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "344": {
//       "id": 344,
//       "Name": "Люберецкие ковры Grass Komfort",
//       "createdAt": "2024-06-10T10:19:08.752Z",
//       "updatedAt": "2024-06-10T10:19:08.752Z",
//       "id_parser": "90475",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "345": {
//       "id": 345,
//       "Name": "Люберецкие ковры Grass Mix",
//       "createdAt": "2024-06-10T10:19:19.459Z",
//       "updatedAt": "2024-06-10T10:19:19.459Z",
//       "id_parser": "90476",
//       "products": null,
//       "Img": null,
//       "parent": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::calc-type.calc-type": {
//     "1": {
//       "id": 1,
//       "Name": "v2",
//       "createdAt": "2023-10-20T04:57:28.599Z",
//       "updatedAt": "2023-10-20T04:58:34.491Z",
//       "products": null,
//       "faskas": null,
//       "shirinas": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "v1",
//       "createdAt": "2023-10-20T04:57:57.703Z",
//       "updatedAt": "2023-10-20T04:58:38.572Z",
//       "products": null,
//       "faskas": null,
//       "shirinas": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "v3",
//       "createdAt": "2023-10-20T04:58:30.135Z",
//       "updatedAt": "2023-10-20T04:58:30.135Z",
//       "products": null,
//       "faskas": null,
//       "shirinas": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "v4",
//       "createdAt": "2023-10-20T04:58:44.679Z",
//       "updatedAt": "2023-10-20T04:58:44.679Z",
//       "products": null,
//       "faskas": null,
//       "shirinas": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "v5",
//       "createdAt": "2023-10-20T04:58:49.253Z",
//       "updatedAt": "2023-10-20T04:58:49.253Z",
//       "products": null,
//       "faskas": null,
//       "shirinas": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::brand.brand": {
//     "4": {
//       "id": 4,
//       "Name": "AGT",
//       "createdAt": "2024-06-09T11:44:32.018Z",
//       "updatedAt": "2024-06-09T11:44:32.018Z",
//       "id_parser": "85214",
//       "products": null,
//       "collections": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::basis.basis": {
//     "1": {
//       "id": 1,
//       "Name": "влагостойкая HDF-плита",
//       "createdAt": "2024-06-11T10:53:00.312Z",
//       "updatedAt": "2024-06-11T10:53:00.312Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "SPC (Stone Plastic Composite)",
//       "createdAt": "2024-06-11T10:53:00.410Z",
//       "updatedAt": "2024-06-11T10:53:00.410Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "LVT (Luxury Vinyl Tile) кварц-винил",
//       "createdAt": "2024-06-11T10:53:00.493Z",
//       "updatedAt": "2024-06-11T10:53:00.493Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Полимерная",
//       "createdAt": "2024-06-11T10:53:00.579Z",
//       "updatedAt": "2024-06-11T10:53:00.579Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Полиэстер",
//       "createdAt": "2024-06-11T10:53:00.651Z",
//       "updatedAt": "2024-06-11T10:53:00.651Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "Акрил",
//       "createdAt": "2024-06-11T10:53:00.721Z",
//       "updatedAt": "2024-06-11T10:53:00.721Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "Полиуретан",
//       "createdAt": "2024-06-11T10:53:00.812Z",
//       "updatedAt": "2024-06-11T10:53:00.812Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "8": {
//       "id": 8,
//       "Name": "Водная дисперсия",
//       "createdAt": "2024-06-11T10:53:00.884Z",
//       "updatedAt": "2024-06-11T10:53:00.884Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "9": {
//       "id": 9,
//       "Name": "влагостойкая плита Aquastop",
//       "createdAt": "2024-06-11T10:53:00.970Z",
//       "updatedAt": "2024-06-11T10:53:00.970Z",
//       "prtoducts": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::appointment.appointment": {
//     "1": {
//       "id": 1,
//       "Name": "для полов",
//       "createdAt": "2024-06-11T10:27:28.282Z",
//       "updatedAt": "2024-06-11T10:27:28.282Z",
//       "tovaries": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "для стен",
//       "createdAt": "2024-06-11T10:27:28.585Z",
//       "updatedAt": "2024-06-11T10:27:28.585Z",
//       "tovaries": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "для бассейна",
//       "createdAt": "2024-06-11T10:27:28.859Z",
//       "updatedAt": "2024-06-11T10:27:28.859Z",
//       "tovaries": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "Для полов",
//       "createdAt": "2024-06-11T10:27:29.071Z",
//       "updatedAt": "2024-06-11T10:27:29.071Z",
//       "tovaries": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "Для стен",
//       "createdAt": "2024-06-11T10:27:29.342Z",
//       "updatedAt": "2024-06-11T10:27:29.342Z",
//       "tovaries": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   },
//   "api::abrasion.abrasion": {
//     "1": {
//       "id": 1,
//       "Name": "Группа 4 (PEI IV)",
//       "createdAt": "2024-06-11T10:29:29.021Z",
//       "updatedAt": "2024-06-11T10:29:29.021Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "2": {
//       "id": 2,
//       "Name": "Группа 3 (PEI III)",
//       "createdAt": "2024-06-11T10:29:29.322Z",
//       "updatedAt": "2024-06-11T10:29:29.322Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "3": {
//       "id": 3,
//       "Name": "Группа 2 (PEI II)",
//       "createdAt": "2024-06-11T10:29:29.620Z",
//       "updatedAt": "2024-06-11T10:29:29.620Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "4": {
//       "id": 4,
//       "Name": "AC4",
//       "createdAt": "2024-06-11T10:29:29.899Z",
//       "updatedAt": "2024-06-11T10:29:29.899Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "5": {
//       "id": 5,
//       "Name": "AC5",
//       "createdAt": "2024-06-11T10:29:30.179Z",
//       "updatedAt": "2024-06-11T10:29:30.179Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "6": {
//       "id": 6,
//       "Name": "AC3",
//       "createdAt": "2024-06-11T10:29:30.399Z",
//       "updatedAt": "2024-06-11T10:29:30.399Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     },
//     "7": {
//       "id": 7,
//       "Name": "AC6",
//       "createdAt": "2024-06-11T10:29:30.670Z",
//       "updatedAt": "2024-06-11T10:29:30.670Z",
//       "products": null,
//       "createdBy": null,
//       "updatedBy": null
//     }
//   }
// }
//
// function searchParams(name, value, type = null, data) {
//   if(type) {
//     let val = []
//     for (const nameKey in data.param) {
//       if(data.param[nameKey]['$']?.name === type) {
//         for (const property in params[name]) {
//           if(params[name][property].Name === data.param[nameKey]['_']) {
//             val.push(params[name][property].id)
//           }
//         }
//       }
//     }
//     return val.length > 1 ? val : val[0]
//   } else {
//     for (const property in params[name]) {
//       if(params[name][property].Name === value) {
//         return params[name][property].id
//       }
//     }
//   }
//
// }
//
// async function parse(data) {
//   // console.log({
//   //   Name: data.name,
//   //   Desc: data.description,
//   //   Price: data.price,
//   //   ART: data.vendorCode,
//   //   categories: searchParamsCat(data.categoryId),
//   //   brand: null,
//   //   collection: searchParams("api::collection.collection", '', 'коллекция', data) ?? null,
//   //   class_p: searchParams("api::class-p.class-p", '', 'класс применения', data) ?? null,
//   //   country: searchParams("api::country.country", '', 'страна', data) ?? null,
//   //   // Connected_P: null,
//   //   // klass_pozharnoj: null,
//   //   // namotka: null,
//   //   proizvoditel: searchParams("api::manufacturer.manufacturer", '', 'производитель', data) ?? null,
//   //   faska: searchParams("api::faska.faska", '', 'фаска', data) ?? null,
//   //   czveta: searchParams("api::color.color", '', 'цвет', data) ?? null,
//   //   shirina: searchParams("api::shirina.shirina", '', 'Ширина, мм', data) ?? null,
//   //   obshhaya_tolshhina: searchParams("api::ob-toshina.ob-toshina", '', 'Толщина, мм', data) ?? null,
//   //   // zashitniy_sloy: null,
//   //   // vlagostoikost: null,
//   //   // visota_vorsa: null,
//   //   // Slicing: null,
//   //   type_designs: searchParams("api::type-design.type-design", '', 'тип дизайна', data) ?? null,
//   //   views: searchParams("api::view.view", '', 'вид', data) ?? null,
//   //   types: searchParams("api::type.type", '', 'тип', data) ?? null,
//   //   length: searchParams("api::length.length", '', 'Длина, мм', data) ?? null,
//   //   surfaces: searchParams("api::surface.surface", '', 'поверхность', data) ?? null,
//   //   properties: searchParams("api::propertie.propertie", '', 'свойства', data) ?? null,
//   //   appointments: searchParams("api::appointment.appointment", '', 'назначение', data) ?? null,
//   //   abrasions: searchParams("api::abrasion.abrasion", '', 'истираемость', data) ?? null,
//   //   forms: searchParams("api::form.form", '', 'форма', data) ?? null,
//   //   formats: searchParams("api::format.format", '', 'формат', data) ?? null,
//   //   rooms: searchParams("api::room.room", '', 'помещение', data) ?? null,
//   //   dimensions: searchParams("api::dimension.dimension", '', 'размеры', data) ?? null,
//   //   color_spectrums: searchParams("api::color-spectrum.color-spectrum", '', 'цветовая гамма', data) ?? null,
//   //   connection_types: searchParams("api::connection-type.connection-type", '', 'тип соединения', data) ?? null,
//   //   lock_connections: searchParams("api::lock-connection.lock-connection", '', 'замковое соединение', data) ?? null,
//   //   bases: searchParams("api::basis.basis", '', 'основа', data) ?? null,
//   //   wood_types: searchParams("api::wood-type.wood-type", '', 'порода дерева', data) ?? null,
//   //   gloss_levels: searchParams("api::gloss-level.gloss-level", '', 'степень блеска', data) ?? null,
//   //   type_processings: searchParams("api::type-processing.type-processing", '', 'вид обработки', data) ?? null,
//   //   materials: searchParams("api::material.material", '', 'материал', data) ?? null,
//   //   weight: searchParams("api::weight.weight", '', 'Вес, кг', data) ?? null,
//   //   packages: searchParams("api::package.package", '', 'Упаковка', data) ?? null,
//   //   destination_materials: searchParams("api::destination-material.destination-material", '', 'материал назначения', data) ?? null,
//   //   componentialities: searchParams("api::componentiality.componentiality", '', 'компонентность', data) ?? null
//   // })
//   return await strapi.entityService.create('api::product.product', {
//     data: {
//       Name: data.name,
//       Desc: data.description,
//       Price: data.price,
//       ART: data.barcode,
//       categories: searchParamsCat(data.categoryId),
//       brand: null,
//       id_parser :data['$'].id,
//       collection: searchParams("api::collection.collection", '', 'коллекция', data) ?? null,
//       class_p: searchParams("api::class-p.class-p", '', 'класс применения', data) ?? null,
//       country: searchParams("api::country.country", '', 'страна', data) ?? null,
//       // Connected_P: null,
//       // klass_pozharnoj: null,
//       // namotka: null,
//       proizvoditel: searchParams("api::manufacturer.manufacturer", '', 'производитель', data) ?? null,
//       faska: searchParams("api::faska.faska", '', 'фаска', data) ?? null,
//       czveta: searchParams("api::color.color", '', 'цвет', data) ?? null,
//       shirina: searchParams("api::shirina.shirina", '', 'Ширина, мм', data) ?? null,
//       obshhaya_tolshhina: searchParams("api::ob-toshina.ob-toshina", '', 'Толщина, мм', data) ?? null,
//       // zashitniy_sloy: null,
//       // vlagostoikost: null,
//       // visota_vorsa: null,
//       // Slicing: null,
//       type_designs: searchParams("api::type-design.type-design", '', 'тип дизайна', data) ?? null,
//       views: searchParams("api::view.view", '', 'вид', data) ?? null,
//       types: searchParams("api::type.type", '', 'тип', data) ?? null,
//       length: searchParams("api::length.length", '', 'Длина, мм', data) ?? null,
//       surfaces: searchParams("api::surface.surface", '', 'поверхность', data) ?? null,
//       properties: searchParams("api::propertie.propertie", '', 'свойства', data) ?? null,
//       appointments: searchParams("api::appointment.appointment", '', 'назначение', data) ?? null,
//       abrasions: searchParams("api::abrasion.abrasion", '', 'истираемость', data) ?? null,
//       forms: searchParams("api::form.form", '', 'форма', data) ?? null,
//       formats: searchParams("api::format.format", '', 'формат', data) ?? null,
//       rooms: searchParams("api::room.room", '', 'помещение', data) ?? null,
//       dimensions: searchParams("api::dimension.dimension", '', 'размеры', data) ?? null,
//       color_spectrums: searchParams("api::color-spectrum.color-spectrum", '', 'цветовая гамма', data) ?? null,
//       connection_types: searchParams("api::connection-type.connection-type", '', 'тип соединения', data) ?? null,
//       lock_connections: searchParams("api::lock-connection.lock-connection", '', 'замковое соединение', data) ?? null,
//       bases: searchParams("api::basis.basis", '', 'основа', data) ?? null,
//       wood_types: searchParams("api::wood-type.wood-type", '', 'порода дерева', data) ?? null,
//       gloss_levels: searchParams("api::gloss-level.gloss-level", '', 'степень блеска', data) ?? null,
//       type_processings: searchParams("api::type-processing.type-processing", '', 'вид обработки', data) ?? null,
//       materials: searchParams("api::material.material", '', 'материал', data) ?? null,
//       weight: searchParams("api::weight.weight", '', 'Вес, кг', data) ?? null,
//       packages: searchParams("api::package.package", '', 'Упаковка', data) ?? null,
//       destination_materials: searchParams("api::destination-material.destination-material", '', 'материал назначения', data) ?? null,
//       componentialities: searchParams("api::componentiality.componentiality", '', 'компонентность', data) ?? null
//     }
//   });
// }
//
// function searchParamsCat(value) {
//   console.log('value -> ', value)
//   for (const property in params['api::category.category']) {
//     if(params['api::category.category'][property].id_parser === value) {
//       console.log('data[name][property]', params['api::category.category'][property].id)
//       return params['api::category.category'][property].id
//     }
//   }
//
// }
//
// function itemParser(data) {
//   parse(data).then(res => {
//     console.log('res -> OK')
//   })
// }
//
// module.exports = itemParser;
