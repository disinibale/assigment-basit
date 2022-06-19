import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import TanimoreLogo from '../Assets/Images/tanimore_logo_1_font blue-01 1 copy.png'
import Person from '../Assets/Images/image (2).png'
import Logos from '../Assets/Images/Logos.png'

const Testimonial = () => {
    return (
        <Container className='py-5'>
            <div className='testimonial-title text-center py-5 w-100'>
                <h1>Apa Kata Client</h1>
                <p>Kami mendengarkan masukan dan apresiasi dari client kami di seluruh dunia yang telah percaya terhadap kami</p>
            </div>
            <Row>
                <Col>
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#cac8c8'
                        }}
                        className='rounded-circle'
                    >
                        <div
                            className='w-100 h-100 d-flex align-items-center justify-content-center'
                        >
                            <img
                                style={{
                                    widht: '60px',
                                    height: '60px'
                                }}
                                src={TanimoreLogo} alt='' />

                        </div>
                    </div>
                    <p
                        style={{
                            fontSize: '21px'
                        }}
                        className='font-italic mt-4'>
                        <i>
                            Finmod sangat membantu kami untuk
                            menyiapkan laporan Financial Model secara
                            mudah dan lengkap yang dibutuhkan untuk
                            fase Fundraising kami kepada para calon
                            investor di perusahaan kami.
                        </i>
                    </p>

                    <div className='mt-4 d-flex justify-content-between align-items-center'>
                        <div>
                            <h3>Ardiansyah</h3>
                            <p className='text-muted'>CEO, Tanimore</p>
                        </div>
                        <div>
                            <Button
                                className='bg-transparent text-dark border-dark me-2'>
                                &lt;
                            </Button>
                            <Button
                                className='bg-transparent text-dark border-dark'>
                                &gt;
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center'>
                        <img src={Person} alt='' />
                    </div>
                </Col>
            </Row>

            {/* Partner Kami */}
            <div className='my-5 pt-5'>
                <Row className='my-5 py-5'>
                    <Col xl='4'>
                        <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                            <div>
                                <h1>Partner Kami</h1>
                                <p>
                                    Pelanggan yang menggunakan Finmod
                                    untuk menilai perusahaan mereka.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xl='8'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Logos} alt='' />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Testimonial