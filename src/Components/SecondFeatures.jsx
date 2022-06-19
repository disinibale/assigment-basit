import React from 'react'

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FirstImage from '../Assets/Images/Group 103.png'
import SecondImage from '../Assets/Images/life-pana.png'

import Button from 'react-bootstrap/Button'

const SecondFeatures = () => {
    return (
        <Container>
            {/* Gambar Pertama */}
            <Row>
                <Col>
                    <div className='d-flex flex-row align-items-center h-100'>
                        <img src={FirstImage} alt='' />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex flex-column justify-content-center align-items-end h-100'>
                        <h1>Platform Sangat Mudah Untuk Digunakan</h1>
                        <p className='mt-4'>
                            Finmod merupakan satu - satunya platform penilain online menyeluruh
                            untuk startup yang ada di indonesia dengan metode penilaian yang
                            dilakukan dari berbagai sudut pandang jika diperlukan, Anda dapat
                            memutuskan untuk menggunakan subset dari 5 metode yang
                            tersedia untuk medapatkan hasil yang komprehensif.
                        </p>
                        <div className='w-100 float-left'>
                            <Button
                                className='mt-4'
                                size='lg'
                            >
                                Beli Sekarang
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Gambar Kedua */}
            <Row className='mt-5 py-5'>
                <Col>
                    <div className='d-flex flex-column align-items-start justify-content-center h-100'>
                        <div>
                            <h1>Kami Dipercaya Banyak Startup & UMKM Indonesia</h1>
                            <p>Sudah banyak startup indonesia yang mempercai kami sebagai
                                platform penilaian online untuk perusahaan mereka, Sekarang gilliran
                                anda untuk mengetahui seberapa berharganya perusahaan anda
                            </p>
                        </div>
                        <div className='d-flex'>
                            <div className='me-3'>
                                <h2 className='text-primary'>130K+</h2>
                                <p>Perusahaan</p>
                            </div>
                            <div>
                                <h2 className='text-primary'>100K+</h2>
                                <p>Indonesia</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img src={SecondImage} alt='' />
                </Col>
            </Row>
        </Container>
    )
}

export default SecondFeatures