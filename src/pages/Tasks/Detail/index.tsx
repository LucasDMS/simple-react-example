import React from "react";
import { Button } from "react-bootstrap";

const Detail: React.FC = () => {
    return(
        <div className="container">
            <br/>
            <div className="task-header d-flex">
                <h1>Task details</h1>
                <Button variant="dark" size="sm">Back</Button>
            </div>
        </div>
    );
}

export default Detail;