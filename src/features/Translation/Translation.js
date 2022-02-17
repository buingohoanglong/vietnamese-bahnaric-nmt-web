import { Button, Col, Radio, Row, Space } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import './Translation.scss';
import { FileOutlined, TranslationOutlined } from '@ant-design/icons';
import TextTranslation from './TextTranslation/TextTranslation';
import { MdTranslate } from 'react-icons/md';
import { AiOutlineFile } from 'react-icons/ai';
import FileTranslation from './FileTranslation/FileTranslation';


const Translation = () => {
    const [mode, setMode] = useState("text");

    const handleModeChange = (e) => {
        // console.log(e.target.value);
        setMode(e.target.value); 
    }


    return (
        <div className='translation'>
            {/* <Row justify={'start'} style={{position: 'relative', top: '-50px', height: 0}}>
                <Col span={2} style={{minWidth: '100px', borderRadius: '5px'}}>
                    <Button
                        icon={<TranslationOutlined />}
                        size={'large'}
                        style={{borderRadius: '5px'}}
                        value={'text'}
                        onClick={handleModeChange}
                    >
                        Text
                    </Button>
                </Col>
                <Col span={2} style={{minWidth: '100px', borderRadius: '5px'}}>
                    <Button
                        icon={<FileOutlined />}
                        size={'large'}
                        style={{borderRadius: '5px'}}
                        value={'file'}
                        onClick={handleModeChange}
                    >
                        File
                    </Button>
                </Col>
            </Row> */}
            <Row justify={'start'} style={{position: 'relative', top: '-50px', height: 0}}>
                <Col span={24}>
                    <Radio.Group 
                        onChange={handleModeChange} 
                        defaultValue="text" 
                    >
                        <Radio.Button value="text" style={{minWidth: '90px'}}>
                            <MdTranslate size={'1.5em'} />
                            <span>Text</span>
                        </Radio.Button>
                        <Radio.Button value="file" style={{minWidth: '90px'}}>
                            <AiOutlineFile size={'1.5em'} />
                            <span>File</span>
                        </Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            {mode == 'text'
                ? <TextTranslation />
                : <FileTranslation />
            }
        </div>
    );
};

export default Translation;