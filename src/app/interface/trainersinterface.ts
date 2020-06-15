export interface ITrainer {
    id:string,
    fullname: string,
    title: string,
    smallbackgroundString: string,
    bigbackgroundString: string
    content: ITrainerContent[];
    foto:IFoto[];
}

export interface ITrainerContent {
    image: string
    content: string
} 
export interface IFoto
{
    src:string
}