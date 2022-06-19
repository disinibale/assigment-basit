import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import StartupImage from '../Assets/Images/Startup.png'
import LinkedinLogo from '../Assets/Images/lindedin icon.png'
import FacebookLogo from '../Assets/Images/Facebook icon.png'
import TwitterLogo from '../Assets/Images/twitter icon.png'

const HeroComponent = () => {
    return (
        <Container
            className='hero-content'
            >
            <Row>
                <Col>
                    <div className='d-flex align-items-center h-100'>
                        <div className='pr-5'>
                            <h1 className='h1'>
                                Ceritakan Tentang Startup Anda
                            </h1>
                            <p>
                                Kami akan membantu anda menganalisa dan memahami bagaimana berharganya perusahaan anda
                            </p>
                            {/* Form Email */}
                            <div>
                                <Row>
                                    <Col>
                                        <InputGroup>
                                            <Form.Control
                                                size='lg'
                                                placeholder='Coba Demo'
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <Button
                                            bg='primary'
                                            size='lg'
                                            style={{ width: '100%' }}>
                                            Beli Sekarang
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col className='mt-sm-5'>
                                        <Row>
                                            <Col>
                                                <div className='d-flex h-100 justify-content-center align-items-center'>
                                                    <div
                                                        className='bg-primary'
                                                        style={{ width: '100%', height: '3px' }}>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <img alt='' style={{ width: '42px' }} src={FacebookLogo} />
                                                    <img alt='' className='ms-3 me-3' style={{ width: '42px' }} src={TwitterLogo} />
                                                    <img alt='' style={{ width: '42px' }} src={LinkedinLogo} />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='d-flex h-100 justify-content-center align-items-center'>
                                                    <div
                                                        className='bg-primary'
                                                        style={{ width: '100%', height: '3px' }}>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='d-none d-md-flex align-items-center justify-content-center'>
                    <div>
                        <img src={StartupImage} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroComponent