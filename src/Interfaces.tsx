import React, { MouseEventHandler } from 'react';

export interface IButtonProps{
    title?:string,
    src?: string,
    alt?: string,
    anotherClass?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}
export interface IModal {
    showModal: boolean;
    selectedDishId: number;
    dishes: Array<IDish>;
    closeModal: () => void;
}
export interface ICard{
    class?: string,
    ImgSrc?:string,
    ImgAlt?:string,
    name?:string,
    chefName?:string,
    moreInfoSrc?:string ,
    moreInfoAlt?: string,
    ingredients?: string,
    currency?: string,
    price?: number,
    priceLine?:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IProperties{
    spicy?: boolean,
    vegan?: boolean,
    vegetarian?: boolean,
}

export interface IChefPortrait {
    onClickDelete?:  React.MouseEventHandler<HTMLDivElement>
    src: string,
    alt: string,
    name: string,
    idDescription?: string,
    description?: string,
    deleteCardBtn?: string;
}
export interface IRestaurant {
    id:number,
    name:string,
    image:string,
    imageHero?:string,
    chefName:string,
    address:string ,
    rating: string,
    isPopular: boolean,
    isNew: boolean,
    mostPopular: boolean,
    openHour: number,
    closeHour: number,
    dishes:Array<number>,
}

export interface IRestaurantsState {
    value: Array<IRestaurant>;
}

export interface IChef {
    id:number,
    name:string,
    portrait: string,
    restaurants: Array<string>,
    isChefOfTheWeek:boolean, 
    description: string,
    isNew: boolean,
    viewCount: number,
    mostViewed: boolean,
}
export interface IChefsState {
    value: Array<IChef>;
}

export interface IUser {
    firstName?:string,
    lastName?:string,
    address?:string,
    email:string,
    password: string,
    token?:string,
}

export interface IUsersState {
    value: Array<IUser>;
}

export interface IDish {
    id:number,
    name:string,
    image: string,
    price: number,
    isSignatureDish:boolean, 
    chefId: string,
    restaurant: string,
    ingredients: string,
    properties: Array<string>,
    optionalSides: Array<string>,
    optionalChanges: Array<string>,
}
export interface IDishesState {
    value: Array<IDish>;
}
