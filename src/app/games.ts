import { ImpactStyle } from "@capacitor/haptics";

export interface Game{
    id:number;
    title:string;
    level:number;
    description:string;
    }

export const games = [
    {
        id : 1,
        title : 'Genshin Impact',
        level : 46,
        description : 'Action, Adventure, Open World'
    },
    {
        id : 2,
        title : 'Mir4',
        level : 41,
        description : 'Action, Adventure, Open World'
    },
    {
        id : 3,
        title : 'Clash of Clans',
        level : 103,
        description : 'Action, Strategy'
    }
]
