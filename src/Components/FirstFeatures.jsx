import React from 'react'

import Container from 'react-bootstrap/Container'
import CardFeatures from './CardFeatures'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MethodIcon from '../Assets/Images/Methode.png'
import PaperIcon from '../Assets/Images/Paper.png'
import ShieldIcon from '../Assets/Images/Shield dark.png'

import DollarIcon from '../Assets/Images/Dollar.png'
import EditIcon from '../Assets/Images/Edit Square.png'
import VectorIcon from '../Assets/Images/Vector.png'


const features = [
    {
        name: 'Metode Penilaian',
        icon: MethodIcon,
        text: 'Metode Penilaian dilakukan dari berbagai sudut pandang untuk mendapatkan hasil yang komprehensif'
    },
    {
        name: 'Laporan Penilaian',
        icon: PaperIcon,
        text: 'Laporan Penilaian dibuat secara professional, sangat terperinci dan mudah untuk di download'
    },
    {
        name: 'Kerahasiaan Data',
        icon: ShieldIcon,
        text: 'Data yang telah kami dapatkan dijamin kerahasiaanya tidak akan kami menjual atau membagikannya'
    },
    {
        name: 'Keakuratan Data',
        icon: VectorIcon,
        text: 'Sumber data disesuaikan berdasarkan negara dan industrinya untuk mendapatkan keakuratan'
    },
    {
        name: 'Penyesuaian Parameter Penilaian',
        icon: EditIcon,
        text: 'Dapat menyesuaikan parameter penilaian untuk mempermudah data'
    },
    {
        name: 'Membantu Proyeksi Keuangan',
        icon: DollarIcon,
        text: 'Kami menyediakan default berdasarkan kinerja rata-rata perusahaan di industri yang sama'
    },
]

const FirstFeatures = () => {
    return (
        <Container className='mb-5'>
            <div className='features-headline text-center my-5'>
                <h1 className='features-title'>Mengapa Harus Kami</h1>
                <h6 className='features-subtitle text-muted mt-4'>
                    Karena kami memiliki beberapa keunggulan dalam menyajikan maupun mengelola data yang telah kami dapatkan untuk penilaian perusahaan tersebut
                </h6>
            </div>
            <div className='features-card'>
                <Row>
                    {
                        features.map((item) => {
                            return (
                                <Col xs='12' sm='12' md='6' lg='4' className='mt-sm-4'>
                                    <CardFeatures title={item.name} icon={item.icon} text={item.text} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </Container>
    )
}

export default FirstFeatures