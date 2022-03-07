import React, { useState, useEffect, ChangeEvent } from "react";
import { Badge, Button, Form } from 'react-bootstrap'
import api from '../../../services/api'

import './index.css'

interface ITasks {
    title: string;
    description: string;
}

const TasksForm: React.FC = () => {

    const [model, setModel] = useState<ITasks>({
        title: '',
        description: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>){

        setModel({
            ...model,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        const response = await api.post('/tasks', model)

        console.log(response)

    }

    return (
        <div className="container">
            <br/>
            <div className="task-header d-flex">
                <h1>New task</h1>
                <Button variant="dark" size="sm">Back</Button>
            </div>
            <div className="row container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter title" 
                            name="title" 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            name="description" 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                        />
                    </Form.Group>
                  
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default TasksForm;