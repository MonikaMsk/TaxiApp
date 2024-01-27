export type RideItemPrice = {
    perKm: number;
    perMinute: number;
    currenct:string;
}

export type RideItem = {
    type: string;
    description: string;
    eta: number;
    maxPassangers: number | null;
    id:string;
    price: RideItemPrice;
}