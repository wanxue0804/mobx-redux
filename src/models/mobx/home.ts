import { observable, action, makeAutoObservable, autorun, computed } from 'mobx';

interface Ilist {
    id: number | string;
    task: string;
    complete: boolean;
}

class Home {
    constructor() {
        // mobx6.0之后必须要加上这一句
        makeAutoObservable(this);
        autorun(() => this.test());
    };
    todoList: Ilist[] = [];

    @computed
    get count () {
        return this.todoList.length;
    }

    @action test = () => {
        console.log('test方法')
    };

    // 新增列表
    @action add (payload: any) {
        console.log('zzzzzzzzzzmmmmmmm', payload, this)
        this.todoList = this.todoList.concat(payload);
    };

    // 切换todo
    @action toggleComplete (id: number | string) {
        // const todo = this.todoList.find(item => item.id === id);
        // if (todo) {
        //     todo.complete = !todo.complete;
        // }
        this.todoList.some(item => {
            if (item.id === id) {
                item.complete = !item.complete;
                return true
            }
        })
    }

    // 删除todo
    @action deleteItem (id: number|string) {
        this.todoList = this.todoList.filter(item => item.id !== id);
    }

}

const homeStore = new Home();
export default homeStore;