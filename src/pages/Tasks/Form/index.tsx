import React, { useState, useEffect } from "react";
import { Badge, Button, Form } from 'react-bootstrap'

import './index.css'

interface ITasks {
    id: number;
    title: string;
    description: string;
    finished:boolean;
    created_at: Date;
    updated_at: Date;
}

const TasksForm: React.FC = () => {

    return (
        <div className="container">
            <br/>
            <div className="task-header d-flex">
                <h1>New task</h1>
                <Button variant="dark" size="sm">Back</Button>
            </div>
            <div className="row container">
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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