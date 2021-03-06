import React, { useState, useEffect } from "react";
import { Badge, Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import moment from 'moment'

import './index.css'

interface ITasks {
    id: number;
    title: string;
    description: string;
    finished:boolean;
    created_at: Date;
    updated_at: Date;
}

const Tasks: React.FC = () => {

    const [ tasks, setTasks ] = useState<ITasks[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks(){
        const response = await api.get('/tasks')
        console.log(response.data)
        setTasks(response.data)
    }

    function formateDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    function newTask(){
        navigate('/tasks_form')
    }

    function editTask(id: number){
        navigate(`/tasks_form/${id}`)
    }

    function viewTask(id: number){
        navigate(`/tasks/${id}`)
    }

    async function finishTask(id: number){
        await api.patch(`/tasks/${id}`)
        loadTasks()
    }

    async function deleteTask(id: number){
        await api.delete(`/tasks/${id}`)
        loadTasks()
    }

    return (
        <div className="container">
            <br/>
            <div className="task-header d-flex">
                <h1>Tasks</h1>
                <Button variant="dark" size="sm" onClick={newTask}>New task</Button>
            </div>
            
            <br/>
            <Table striped bordered hover responsive variant="dark" className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Update date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={ task.id }>
                                <td>{ task.id }</td>
                                <td>{ task.title }</td>
                                <td>{ formateDate(task.updated_at) }</td>
                                <td>
                                    <Badge pill bg={ task.finished ? "success" : "warning" } text="dark">
                                        {task.finished ? "Finished" : "Pending" }
                                    </Badge>
                                </td>
                                <td>
                                    <Button size="sm" disabled={task.finished} onClick={() => editTask(task.id)}>Edit</Button>{' '}
                                    <Button size="sm"  disabled={task.finished} variant="success" onClick={() => finishTask(task.id)}>Finish</Button>{' '}
                                    <Button size="sm" variant="info" onClick={() => viewTask(task.id)}>View</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))
                    }

                    
                </tbody>
            </Table>
        </div>
    );
}

export default Tasks;