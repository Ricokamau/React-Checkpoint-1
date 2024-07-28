// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
    const firstName = "Rico"; 

    return (
        <Container className="container mt-5">
            <Card className="card">
                <Card.Body>
                    <Card.Title className="card-title"><Name /></Card.Title>
                    <Card.Text className="card-text"><Price /></Card.Text>
                    <Card.Text className="card-text"><Description /></Card.Text>
                    <Image />
                </Card.Body>
            </Card>
            <div className="mt-3">
                {firstName ? (
                    <>
                        <p>Hello, {firstName}!</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1klpX11Ie8siA2buIur4a-n7K-GxfKuDsA&s" alt="Greeting" />
                    </>
                ) : (
                    <p>Hello, there!</p>
                )}
            </div>
        </Container>
    );
};

export default App;
