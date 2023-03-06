import { useState } from 'react';
import { autorun } from 'mobx';
import { inject, observer } from 'mobx-react';
import { IHome } from '@/mobx/home';
import styles from './index.module.scss';


interface Iprops {
    homeStore?: any;
    personStore?: any;
}


let renderCount = 0;
function Home({ homeStore, personStore, ...resProps }: Iprops) {
    const { todoList, count } = homeStore;
    // const { time } = personStore; // 加这一行就会一直渲染
    console.log('wwwwwwwwwwwwww渲染了吗', {resProps}, homeStore, personStore)
    const [inputText, setInputText] = useState('');
    renderCount = renderCount + 1;
    autorun(() => {
        console.log('自动执行')
    })

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
        })
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
            <p>当前列表个数: {count}-{personStore.list.length}</p>
            <p>当前组件渲染次数：{renderCount}</p>
            <div className='list_container'>
                {
                    todoList.map((item: any, index: number) => {
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


export default inject('homeStore', 'personStore')(observer(Home));
