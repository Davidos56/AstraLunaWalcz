export interface ITrainer {
    fullname: string,
    title: string,
    smallbackgroundString: string
    content: ITrainerContent[];
    foto:IFoto[];
}

export interface ITrainerContent {
    bigbackgroundString: string
    content: string
} 
export interface IFoto
{
    src:string
}