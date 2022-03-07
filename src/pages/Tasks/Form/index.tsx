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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
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