export class Taxi {

    private email: string;
    private name: string;
    private phone: string;
    public show: boolean;

    constructor(email, name, phone) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.show = false;
    }
}
