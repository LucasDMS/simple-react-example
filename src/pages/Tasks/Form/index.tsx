import React, { useState, useEffect } from "react";
import { Badge, Button, Table } from 'react-bootstrap'
import api from '../../../services/api'

import './index.css'

interface ITasks {
    id: number;
    title: string;
    description: string;
    finished:boolean;
    created_at: Date;
    updated_at: Date;
}

const Form: React.FC = () => {

    return (
        <div className="container">
            <br/>
            <div className="task-header d-flex">
                <h1>Tasks</h1>
                <Button variant="dark" size="sm">Back</Button>
            </div>
            
            
        </div>
    );
}

export default Form;