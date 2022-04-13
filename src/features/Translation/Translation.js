import { Col, Radio, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Navigate, useLocation } from 'react-router';
import './Translation.scss';
import TextTranslation from './TextTranslation/TextTranslation';
import { MdTranslate } from 'react-icons/md';
import { AiOutlineFile } from 'react-icons/ai';
import FileTranslation from './FileTranslation/FileTranslation';


const Translation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentSection, setCurrentSection] = useState('text');

    const handleSectionChange = (e) => {
        setCurrentSection(e.target.value);
        navigate(e.target.value);
    }

    useEffect(() => {
        let startIndex = location.pathname.lastIndexOf('/');
        const currentSection = location.pathname.substring(startIndex + 1);
        setCurrentSection(currentSection);
    },[location.pathname])

    return (
        <div className='about'>
            <Row justify={'start'} style={{position: 'relative', top: '-50px', height: 0}}>
                <Col span={24}>
                    <Radio.Group 
                        onChange={handleSectionChange} 
                        value={currentSection} 
                    >
                        <Space style={{textAlign: 'center'}}>
                            <Radio.Button value="text" style={{minWidth: '90px'}}>
                                <MdTranslate size={'1.5em'} />
                                <span>Text</span>
                            </Radio.Button>
                            <Radio.Button value="file" style={{minWidth: '90px'}}>
                                <AiOutlineFile size={'1.5em'} />
                                <span>File</span>
                            </Radio.Button>
                        </Space>
                    </Radio.Group>
                </Col>
            </Row>
            <Routes>
                <Route
                    path='text'
                    element={<TextTranslation />} 
                />
                <Route
                    path='file'
                    element={<FileTranslation />} 
                />
                <Route
                    path='/*'
                    element={<Navigate to='text' />} 
                />
            </Routes>
        </div>
    );
};

export default Translation;