export class User {
    lastname?: string;
    firstname?: string;
    email?: string;
    username?: string;
    password?: string;
    address?: string;
    city?: string;
    country?: string;
    postalcode?: string;
}

export class Cours {
    _id?: string;
    nom?: string;
    ouverture?: string;
    volume?: string;
    variation?: string;
    haut?: string;
    bas?: string;
    dernier?: string;
    __v?: number;
}

export class Order {
    _id?: string;
    valeur?: string;
    va?: string;
    quantite?: string;
    type?: string;
    user?: string;
    __v?: number;
    status?: string;
}

export class History {
    _id?: string;
    valeur?: string;
    va?: string;
    type?: string;
    user?: string;
    __v?: number;
    timestamp?: Date;
    status?: string;
}

export class GetUser {
    _id?: string;
    lastname?: string;
    firstname?: string;
    email?: string;
    username?: string;
    password?: string;
    address?: string;
    city?: string;
    country?: string;
    postalcode?: string;
    __v?: number;
    profilepic?: string;
    portfolioperformance?: string;
    portfoliobalance?: string;
    gender?: string;
}

export class Valeur {
    _id?: string;
    cour?: string;
    user?: string;
    variation?: string;
    derniercours?: string;
    moyenpondere?: string;
    quantite?: string;
    nom?: string;
    __v?: number;
}
export class Transaction {
    username?: string;
    nomCours?: string;
    orderid?: string;
    side?: string;
    ordertype?: string;
    orderqty?: string;
    price?: string;
    symbol?: string;
}
