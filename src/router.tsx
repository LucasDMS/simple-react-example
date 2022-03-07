import React from "react"
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tasks from "./pages/Tasks"
import TaskForm from "./pages/Tasks/Form"
import TaskDetail from "./pages/Tasks/Detail"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks_form" element={<TaskForm />} />
            <Route path="/tasks_form/:id" element={<TaskForm />} />
            <Route path="/tasks_detail/:id" element={<TaskDetail />} />
        </Routes>
    )
}

export default Router;