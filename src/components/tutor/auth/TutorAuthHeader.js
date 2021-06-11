import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

// importin css
import "./index.css";

export const TutorAuthHeader=()=>{
    return(
        <Row className="Tutor-signup-header">
            <Link to='/' className="floating-header p-3 m-3">BrooderHall</Link>
        </Row>
    )
}