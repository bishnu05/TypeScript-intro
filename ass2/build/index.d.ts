interface obj {
    titel: string;
    status: boolean;
    id: number;
}
declare let detail: obj;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
declare let add: Address;
interface PersonalDetails {
    phoneNum: number[];
    address: string[];
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
}
declare let det: PersonalDetails;
