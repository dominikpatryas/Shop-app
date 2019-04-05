import { Photo } from './Photo';

export class Car {
    id: number;
    brand: string;
    model: string;
    engine: string;
    horsePower: number;
    gear: string;
    year: number;
    price: number;
    acceleration: number;
    rent: Date;
    endrent: Date;
    isrent: boolean;
    photos?: Photo[];
    photoUrl: string;
    userid: number;
    messagerent: string;

}
