import { makeObservable, action, makeAutoObservable } from 'mobx';

class Person {
    constructor () {
        makeAutoObservable(this);
    };

    time = 0;
    list = [];

    @action add (num: number) {
        this.time = this.time + num;
    };

    @action addList(payload: any) {
        this.list = this.list.concat(payload);
    }

}

const person = new Person();
export default person;