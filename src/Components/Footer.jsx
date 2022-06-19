import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FacebookLogo from '../Assets/Images/Facebook icon.png'
import InstagramLogo from '../Assets/Images/twitter icon.png'
import LinkedinLogo from '../Assets/Images/lindedin icon.png'

const Footer = () => {
    return (
        <Container className='my-5 py-5'>
            <Row>
                <Col>
                    <h1 className='text-primary mb-2'>
                        Finmod.id
                    </h1>
                    <p className='text-muted'>
                        Platform penilaian online untuk startup dan UMKM.
                        Ini lebih cepat dan lebih hemat biaya daripada cara
                        tradisional.
                    </p>
                    <div className='d-flex'>
                        <img style={{ width: '40px' }} src={FacebookLogo} alt='' />
                        <img className='mx-3' style={{ width: '40px' }} src={InstagramLogo} alt='' />
                        <img style={{ width: '40px' }} src={LinkedinLogo} alt='' />
                    </div>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div className='d-flex w-100 justify-content-center align-items-center'>
                                <div>
                                    <h5 className='mb-4'>Finmod</h5>
                                    <p className='text-muted'>About</p>
                                    <p className='text-muted'>Price</p>
                                    <p className='text-muted'>Karir</p>
                                    <p className='text-muted'>Contact</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex w-100 justify-content-center align-items-center'>
                                <div>
                                    <h5 className='mb-4'>Product</h5>
                                    <p className='text-muted'>Laporan Penilaian</p>
                                    <p className='text-muted'>Metode</p>
                                    <p className='text-muted'>Akurasi Data</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer