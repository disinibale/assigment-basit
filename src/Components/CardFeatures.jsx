import React from 'react'

import Card from 'react-bootstrap/Card'

const CardFeatures = (props) => {
    return (
        <Card
            className='border-0'
            style={{
                height: '400px',
                backgroundColor: 'transparent',
            }}>
            <Card.Body className='text-center'>
                <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                    <div style={{
                        width: '100px',
                        height: '100px'
                    }}>
                        <img style={{ width: '50px', height: '50px' }} src={props.icon} alt='' />
                    </div>
                    <h3>{props.title}</h3>
                    <Card.Text style={{ minHeight: '80px' }}>{props.text}</Card.Text>
                    <a className='text-decoration-none' href='?#'>Learn more</a>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardFeatures