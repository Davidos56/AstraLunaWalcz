export interface EventList {
    id: number;
    name: string;
    place: string;
    datetime:DateTime;
    desc: string

}

export interface DateTime {
    day: Date;
    time: string;

}

export interface Date {
    day: number;
    month: string;
    year: number;

}



// "name": "TURNIEJ TAŃCA",
//     "place": "WARSZAWA",
//         "subtitle": "o coś się tam dzieje ",
//             "datetime": {
//     "day": {
//         "day": "30",
//             "month": "Aug",
//                 "year": "2020"
//     },
//     "time": "00:30:00"
// },
// "desc": "ZAPRASZAMY WSZYSTKICH"
//     }