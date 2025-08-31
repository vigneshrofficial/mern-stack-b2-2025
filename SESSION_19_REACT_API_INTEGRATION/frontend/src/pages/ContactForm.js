import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom"

export default function ContactForm() {

    let navigate = useNavigate();

    return <div>

        <span>
            <span onClick={() => navigate('/')}>Home Page</span>
            <span onClick={() => navigate('/contact')}>Contact Page</span>
        </span>

        Contact Form</div>;
}
