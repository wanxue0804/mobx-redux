import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './index.module.scss';
import { useHomeStore, usePersonStore } from '@/mobx/storeHooks';


function Home() {
    const homeStore = useHomeStore();
    const personStore = usePersonStore();
    const { todoList = [], count = 0 } = homeStore;
    const [inputText, setInputText] = useState('');

    let timer: any = null;
    useEffect(() => {
        timer && clearInterval(timer);
        timer = setInterval(() => {
            personStore.add(1);
        }, 5000);
    }, [])

    // 输入框输入
    const onChange = ({target}: any) => {
        setInputText(target.value);
    };

    // 新增task
    const addTask = () => {
        if (!inputText) return;
        homeStore.add({
            id: todoList.length + 1,
            task: inputText,
            complete: false
        });
        personStore.addList({
            id: todoList.length + 1,
            task: inputText,
            complete: false
        });
        setInputText('');
    };

    // 切换item状态
    const handleToggleComplete = (id: number | string) => {
        homeStore.toggleComplete(id);
    };

    return (
        <div className={styles.home}>
            <div className='add_container'>
                <input value={inputText} placeholder='输入task内容' onChange={onChange} />
                <button onClick={addTask}>新增task</button>
            </div>
            <p>当前列表个数: {count}-{personStore.time}</p>
            <div className='list_container'>
                {
                    todoList.map((item: any, index) => {
                        return (
                            <div key={`${item.id}-${index}`} className='item'>
                                <p className={`${item.complete ? 'complete' : ''}`} onClick={() => handleToggleComplete(item.id)}>{item.task}</p>
                                <span onClick={() => homeStore.deleteItem(item.id)}>删除</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default observer(Home);
