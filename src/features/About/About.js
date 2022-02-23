import { Col, Radio, Row, Space } from 'antd';
import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './About.scss';
import Bahnaric from './Bahnaric/Bahnaric';
import DataAugmentation from './DataAugmentation/DataAugmentation';
import Model from './Model/Model';
import Preprocessing from './Preprocessing/Preprocessing';
import References from './References/References';

const About = () => {
    const navigate = useNavigate();

    const handleSectionChange = (e) => {
        console.log(e.target.value);
        navigate(e.target.value);
    }


    return (
        <div className='about'>
            <Row justify={'start'} style={{position: 'relative', top: '-50px', height: 0}}>
                <Col span={24}>
                    <Radio.Group 
                        onChange={handleSectionChange} 
                        defaultValue="bahnaric" 
                    >
                        <Space style={{textAlign: 'center'}}>
                            <Radio.Button value="bahnaric" style={{minWidth: '90px'}}>
                                <span>Bahnaric</span>
                            </Radio.Button>
                            <Radio.Button value="model" style={{minWidth: '90px'}}>
                                <span>Model</span>
                            </Radio.Button>
                            <Radio.Button value="data-augmentation" style={{minWidth: '90px'}}>
                                <span>Data augmentation</span>
                            </Radio.Button>
                            <Radio.Button value="preprocessing" style={{minWidth: '90px'}}>
                                <span>Preprocessing</span>
                            </Radio.Button>
                            <Radio.Button value="references" style={{minWidth: '90px'}}>
                                <span>References</span>
                            </Radio.Button>
                        </Space>
                    </Radio.Group>
                </Col>
            </Row>
            <Routes>
                <Route
                    path='bahnaric'
                    element={<Bahnaric />} 
                />
                <Route
                    path='model'
                    element={<Model />} 
                />
                <Route
                    path='data-augmentation'
                    element={<DataAugmentation />} 
                />
                <Route
                    path='preprocessing'
                    element={<Preprocessing />} 
                />
                <Route
                    path='references'
                    element={<References />} 
                />
                <Route
                    path='/*'
                    element={<Navigate to='bahnaric' />} 
                />
            </Routes>
        </div>
    );
}

export default About;