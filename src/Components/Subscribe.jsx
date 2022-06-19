import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const Subscribe = () => {
    return (
        <Container className='py-5'>
            <div className='my-5 w-100 text-center d-flex flex-column justify-content-center align-items-center'>
                <div className='text-center'>
                    <h1>Mau Coba Gratis?</h1>
                    <p className='text-center'>
                        Kalian bisa mencoba gratis terlebih dahulu selama 7 hari untuk
                        melihat dan memahami apa yang kita lakukan dalam menilai <br />
                        perusahaan dengan menginput email yang akan dijadikan akun.
                    </p>
                </div>
                <div>
                    <InputGroup size='lg'>
                        <Form.Control placeholder='Email Address' />
                        <Button className='btnColorSubmit border-0'>
                            Submit
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </Container>
    )
}

export default Subscribe