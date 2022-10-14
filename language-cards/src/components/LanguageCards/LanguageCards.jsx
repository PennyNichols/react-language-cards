import React, {useState} from 'react'
import {Card} from 'react-bootstrap'

const LanguageCards = (props) => {
  return (
    <div className='card-wrapper'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>{props.options}</Card.Text>
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default LanguageCards
