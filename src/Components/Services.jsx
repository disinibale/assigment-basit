import React from 'react'

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const cardDetails = [
    {
        title: 'Starter',
        price: 'Free',
        list: ['1 Perusahaan', 'Penilaian 1 Bulan', 'No Detail Report']
    },
    {
        title: 'Premium',
        price: '$29/month',
        list: ['5 Perusahaan', 'Penilaian 6 Bulan', 'Detail Report']
    },
    {
        title: 'Enterprise',
        price: '$49/month',
        list: ['10 Perusahaan', 'Penilaian 1 Tahun', 'Detail Report']
    },
]

const Services = () => {
    return (
        <Container className='mb-5'>
            <Row>
                <Col xl='4'>
                    <ButtonGroup>
                        <Button size='lg'>Monthly</Button>
                        <Button size='lg' variant='light'>Yearly</Button>
                    </ButtonGroup>
                </Col>
                <Col xl='8'>
                    <h1>
                        Penilaian yang tepat
                        untuk rencana kedepan
                    </h1>
                </Col>
            </Row>
            <Row className='mt-5'>
                {
                    cardDetails.map((list) => {
                        return (
                            <Col lg='4' xs='12'>
                                <Card
                                    className={`py-5 border-0 ${list.title === 'Premium' && 'bg-primary text-white'}`}
                                    style={{
                                        borderRadius: '20px'
                                    }}>
                                    <Card.Body>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <Card.Title className='mb-5'>{list.title}</Card.Title>
                                            <h1>{list.price}</h1>
                                            {/* <ul className={`list-group ${item.title === 'Premium' && 'text-white'}`}> */}
                                            <ul className={`list-group`}>
                                                {
                                                    list.list.map((item) => {
                                                        return (
                                                            <li className={`
                                                                bg-transparent 
                                                                list-group-item 
                                                                border-0 
                                                                mt-2
                                                                ${list.title === 'Premium' && 'text-white'}
                                                                `
                                                            }>{item}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className='w-100 px-4 mt-5'>
                                                {
                                                    list.title === 'Premium' ? (
                                                        <Button className='btnColorPrimary btn-lg w-100'>Get Started</Button>
                                                    ) : (
                                                            <Button className='btn-light btn-lg text-primary border w-100'>Get Started</Button>
                                                    )
                                               }
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Services