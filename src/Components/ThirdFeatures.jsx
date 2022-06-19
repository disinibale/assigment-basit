import React from 'react'

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ThirdFeatures = () => {
    return (
        <Container className='mt-5 py-5'>
            <div className='d-flex flex-column align-items-center justify-content-center my-5'>
                <h1>Di Berbagai Negara Sudah Menggunakan Finmod</h1>
                <p>
                    Tidak Hanya di Indonesia tapi beberapa perusahaan di negara lain
                    menggunakan findmod untuk mempelajari, memantau, dan
                    mengembangkan penilaian perusahaan mereka
                </p>

                <Row className='w-100 mt-4'>
                    <Col className='text-center'>
                        <h1>125.000</h1>
                        <h4 className='text-left font-weight-normal'>Asia</h4>
                    </Col>
                    <Col className='text-center'>
                        <h1>500</h1>
                        <h4 className='text-left font-weight-normal'>Eropa</h4>
                    </Col>
                    <Col className='text-center'>
                        <h1>500</h1>
                        <h4 className='text-left font-weight-normal'>Amerika</h4>
                    </Col>
                    <Col className='text-center'>
                        <h1>3.500</h1>
                        <h4 className='text-left font-weight-normal'>Oceania</h4>
                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default ThirdFeatures