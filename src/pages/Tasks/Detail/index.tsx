import React, {useState, useEffect} from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../../services/api'

import moment from 'moment'

interface ITask {
    id: number;
    title: string;
    description: string;
    finished:boolean;
    created_at: Date;
    updated_at: Date;
}

const Detail: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [task, setTask] = useState<ITask>()

    useEffect(() => {
        findTask()  
    }, [id])

    function back(){
        navigate(-1)
    }

    async function findTask(){
        const response = await api.get<ITask>(`tasks/${id}`)
        console.log(response)
        setTask(response.data)
    }

    function formateDate(date: Date | undefined){
        return moment(date).format('DD/MM/YYYY')
    }

    return(
        <div className="container">
            <div className="task-header d-flex mt-2 mb-3">
                <h1>Task details</h1>
                <Button variant="dark" size="sm" onClick={back}>Back</Button>
            </div>
            <div className="row">
                <Card>
                    <Card.Body>
                        <Card.Title>{ task?.title }</Card.Title>
                        <Card.Text>{ task?.description}</Card.Text>
                        <Badge pill bg={ task?.finished ? "success" : "warning" } text="dark">
                            { task?.finished ? "Finished" : "Pending" }
                        </Badge>
                        <br/>
                        <strong>Created at:</strong>
                        <Badge bg="info">
                            { formateDate(task?.created_at) }
                        </Badge>
                        <br/>
                        <strong>Updated at:</strong>
                        <Badge bg="info">
                            { formateDate(task?.updated_at) }
                        </Badge>

                    </Card.Body>
                </Card>
            </div>
        </div>

    );
}

export default Detail;