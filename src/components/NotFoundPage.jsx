import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = ({ message = "Error 404 " }) => {
    return (
        <div>
            <h1>{message}</h1>

        </div>
    )
}

export default NotFoundPage