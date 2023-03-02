import { useState } from 'react';
import { Dispatch, bindActionCreators, AnyAction } from 'redux'
import { connect } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { Ilist } from '@/redux/reducers/homeReducer';
import * as homeActions from '@/redux/actions/homeActions';
import styles from './index.module.scss';


interface Iprops {
    todoList: Ilist[];
    homeActionsHandle: {
        add: (p: any) => void;
        deleteItem: (p: any) => void;
        toggleState: (p: {id: number|string}) => void;
    };
    count: number;
}

function Home({todoList = [], homeActionsHandle, count, ...resProps}: Iprops) {
    const [inputText, setInputText] = useState('');

    // 输入框输入
    const onChange = ({target}: any) => {
        setInputText(target.value);
    };

    // 新增task
    const addTask = () => {
        if (!inputText) return;
        homeActionsHandle.add({
            id: todoList.length+1,
            task: inputText,
            complete: false
        });
        setInputText('');
    };

    // 切换item状态
    const handleToggleComplete = (id: number | string) => {
        homeActionsHandle.toggleState({id});
    };

    return (
        <div className={styles.home}>
            <div className='add_container'>
                <input value={inputText} placeholder='输入task内容' onChange={onChange} />
                <button onClick={addTask}>新增task</button>
            </div>
            <p>当前列表个数: {count}</p>
            <div className='list_container'>
                {
                    todoList.map((item: any, index) => {
                        return (
                            <div key={`${item.id}-${index}`} className='item'>
                                <p className={`${item.complete ? 'complete' : ''}`} onClick={() => handleToggleComplete(item.id)}>{item.task}</p>
                                <span onClick={() => homeActionsHandle.deleteItem({id: item.id})}>删除</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state: RootState, oweProps: any) => {
    return {
        todoList: state.homeReducer.todoList,
        count: state.homeReducer.count
    }
};

const mapDispatchToProps = (dispatch: Dispatch, oweProps: any) => {
    return {
        homeActionsHandle: bindActionCreators(homeActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);