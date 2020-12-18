import React, { Component } from 'react'
import './ToDolist.css'



export default class ToDolist extends Component {
    state = {
        unFinishedList: [
            { text: "111", checked: false },
            { text: "2222", checked: false }
        ],
        FinishedList: [
            { text: "333", checked: true },
        ],
        value:'',
    }
  
    checked = (e, index) => {
        let { unFinishedList } = this.state;
        let { FinishedList } = this.state;
        if (e.target.checked) {
            unFinishedList[index].checked = true;
            FinishedList.push(unFinishedList[index])
            unFinishedList.splice(index, 1);
            this.setState({ unFinishedList });
            e.target.checked = false;
        } 
    }
    delUnFinList = (index) => {
        let { unFinishedList } = this.state;
        unFinishedList.splice(index, 1);
        this.setState({ unFinishedList });
    }
    delFinList = (index) => {
        let { FinishedList } = this.state;
        FinishedList.splice(index, 1);
        this.setState({ FinishedList });
    }
    todoClickSub = () => {
        let { unFinishedList } = this.state;
        let {value} = this.state;
        let temp = { text: value, checked: false };
        unFinishedList.push(temp);
        this.setState({ unFinishedList });
        value = '';
        this.setState({ value })
    }
    handleEnter = (e) => {
        if (e.charCode === 13) {
            this.todoClickSub();
        }
    }
    SubmitText = (e) => {
        this.setState({value:e.target.value})
    }
    todoRetuen = (index) => {
        let { unFinishedList } = this.state;
        let { FinishedList } = this.state;
        unFinishedList.push(FinishedList[index])
        FinishedList.splice(index, 1);
        this.setState({ FinishedList });
    } 
    render() {
        let {unFinishedList} = this.state;
        let {FinishedList} = this.state;
        let {value} = this.state;
        return (
            <>
             <h1 className='todoH1'>ToDoList</h1>
            <div className='todoContan'>
                <div className='todoSub'>
                    <input type="text"
                        onKeyPress={(e) => this.handleEnter(e)}
                        value={value}
                        onChange={(e)=>this.SubmitText(e)}
                    />
                    <button
                        onClick={this.todoClickSub}
                    >
                        添加
                        <span className='iconfont'>&#xe502;</span>
                    </button>
                </div>
                <p className='todoTitle'>
                    <span className='todoIcon iconfont'>&#xe606;</span>
                    今日待办
                    <span className='todoNum'>{unFinishedList.length}</span>
                    条
                </p>
                <ul className='unFinished' >
                    {
                        unFinishedList.map((unFList, index) => {
                            return (
                                <li key={index} className='todoLi'>
                                    <input type="checkbox" 
                                           onChange={(e) => this.checked(e, index)}
                                           id="checkInput"
                                    />
                                    <label
                                    htmlFor="checkInput"
                                    className='labelCheck'
                                    >  
                                    </label>
                                    <span className='todoList'>
                                    {unFList.text}
                                    </span>
                                    <span className='todoDelList iconfont'
                                          onClick={() => this.delUnFinList(index)}
                                    >
                                   &#xe604;
                                    </span>
                                </li>
                            )
                        }
                        )}
                </ul>
                <p className='todoTitle'>
                <span className='todoIcon iconfont'>&#xe605;</span>
                    已经完成
                <span className='todoNum NumGreen'>
                {FinishedList.length}
                </span>
                条
            </p>
                <ul className='Finished'>
                    {
                        FinishedList.map((FList, index) => {
                            return (
                                <li key={index} className='todoLi'>
                                <input type="checkbox" 
                                       readOnly
                                       checked={FList.checked}
                                       id="checkFin"
                                />
                                <label htmlFor="checkFin"
                                       className='labelCheck labelCheck2'
                                >
                                </label>
                                <span className='todoList'>{FList.text}</span>
                                <span className='todoDelList iconfont'
                                      onClick={() => this.delFinList(index)}
                            >
                                &#xe604;
                                </span>
                                <span className='todoReturn iconfont'
                                      onClick={() => this.todoRetuen(index)}
                                >
                                &#xe91e;
                                </span>
                                </li>
                            )
                        }
                        )}
                </ul>
            </div>
            </>
        )
    }
}