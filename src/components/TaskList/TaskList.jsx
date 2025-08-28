import { Component } from "react";
import style from './TaskList.module.scss'

export class TaskList extends Component {
    tasks = [
        { id: 1, text: 'Пішов до магазину' },
        { id: 2, text: 'Купив поїсти' },
        { id: 3, text: 'Пішов додому' },
        { id: 4, text: 'Поїв' },
    ]

    deleteTask = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return <ul className={style.list}>
            {this.tasks.map(task => {
                return <li key={task.id} className={style.item}>
                    <p className={style.text}>{task.text}</p>
                    <button className={style.btn} onClick={(e)=>this.deleteTask(e)}>Delete</button>
                </li>
            })}
        </ul>
    }
}