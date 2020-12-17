import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
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
    checked = (event, index) => {
        let { unFinishedList } = this.state;
        let { FinishedList } = this.state;
        if (event.target.checked) {
            unFinishedList[index].checked = true;
            FinishedList.push(unFinishedList[index])
            unFinishedList.splice(index, 1);
            this.setState({ unFinishedList });
            event.target.checked = false;
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
        this.setState({value})
    }
    handleEnter = (event) => {
        console.log("master");
        if (event.charCode === 13) {
            this.todoClickSub();
        }
    }
    SubmitText = (event) =>{
        this.setState({value:event.target.value})
    }
    todoRetuen =(index) =>{
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
                        onKeyPress={(event) => this.handleEnter(event)}
                        value={value}
                        onChange={(event)=>this.SubmitText(event)}
                    />
                    <button
                        onClick={this.todoClickSub}
                    >
                        添加
                        <span className='iconfont'>&#xe608;</span>
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
                                <li key={index}
                               className='todoLi'
                                >
                                    <input type="checkbox" 
                                        onChange={(event) => this.checked(event, index)
                                        }
                                        id="input-1"
                                    />
                                    <label
                                    htmlFor="input-1"
                                    className='label-check'
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
                    <span className='todoNum'>
                {FinishedList.length}
                </span>
                条
            </p>
                <ul className='Finished'>
                    {
                        FinishedList.map((FList, index) => {
                            return (
                                <li key={index}
                                className='todoLi'
                                >
                                <input type="checkbox" 
                                       readOnly
                                        checked={FList.checked}
                                        id="input-2"
                                    />
                                    <label htmlFor="input-2"
                                    className='label-check label-check2'
                                    >
                                    </label>
                                     <span className='todoList'>
                                     {FList.text}
                                     </span>
                                     <span className='todoDelList iconfont'
                                        onClick={() => this.delFinList(index)}
                                    >
                                   &#xe604;
                                    </span>
                                    <span className='todoReturn iconfont'
                                    onClick={(event) => this.todoRetuen(event, index)}
                                    >
                                    &#xe61d;
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