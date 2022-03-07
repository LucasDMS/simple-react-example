import React from "react"
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tasks from "./pages/Tasks"
import TasksForm from "./pages/Tasks/Form"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks_form" element={<TasksForm />} />
        </Routes>
    )
}

export default Router;