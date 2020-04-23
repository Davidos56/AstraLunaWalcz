export interface ITrainer {
    fullname: string,
    title: string,
    smallbackgroundString: string
    content: ITrainerContent[];
}

export interface ITrainerContent {
    bigbackgroundString: string
    content: string
} 