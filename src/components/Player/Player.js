import React from "react";
import { Button, Card } from 'react-bootstrap';
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Player(props) {

    const { name, img, price } = props.player;
    return (
        <div style={{ margin: "auto" }}>

            <Card style={{ width: '18rem', textAlign: 'center' }} className="card-style">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <h4>Salary: ${price}</h4>
                    </Card.Text>

                    <Button onClick={() => props.handleSelect(props.player)} variant="primary"><FontAwesomeIcon icon={faPlus} /> Select</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Player;