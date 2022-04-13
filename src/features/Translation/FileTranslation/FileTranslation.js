import React, { useEffect, useState } from 'react';
import './FileTranslation.scss';
import { Button, message, Card, Upload, Select, Row, Col, Spin } from 'antd';
import { AiOutlineUpload, AiOutlineDownload } from 'react-icons/ai';
import { fileTranslateAPI, getModelsAPI } from '../../../api/api';

const { Option } = Select

var fileDownload = require('js-file-download');


const FileTranslation = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [supportedModels, setSupportedModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [translating, setTranslating] = useState(false);
    const [translatedData, setTranslatedData] = useState(null);


    useEffect(() => {
        getModelsAPI()
            .then(response => {
                const models = response.data.models;
                console.log(models);
                setSupportedModels(models);
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    message.error(error.response.data.error);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    message.error('Server does not reponse !');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    message.error(error.message);
                }
                // console.log(error.config);
            })
    },[])

    const handleFileSelected = ({file, fileList, e}) => {
        console.log(file);
        setSelectedFile(file.status !== 'removed' ? file : null);
    }

    const handleBeforeUpload = (file) => {
        const correctFileType = file.type === 'text/plain' || file.type === 'application/pdf';
        if (!correctFileType) {
          message.error('You can only upload .txt or .pdf file!');
        }
        return false;
    }

    const handleModelSelected = (model) => {
        setSelectedModel(model);
    }

    const handleTranslationBtnClicked = (e) => {
        e.preventDefault();
        setTranslating(true);
        fileTranslateAPI(selectedFile, selectedModel)
            .then(response => {
                const data = response.data;
                console.log("Response");
                console.log(data);
                setTranslatedData({
                    'filename': selectedFile.lastModified + selectedFile.name,
                    'data': data
                })
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    message.error(error.response.data.error);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    message.error('Server does not reponse !');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    message.error(error.message);
                }
                // console.log(error.config);
                setSelectedFile(null);
            }).finally(() => {
                setTranslating(false);
            })
    }

    const handleDownload = () => {
        fileDownload(translatedData.data, translatedData.filename);
        setTranslatedData(null);
        setSelectedFile(null);
    }

    const vietnameseCardTitle = (
        <div>
            <Row justify='space-between' align='middle'>
                <Col span={8}>
                    <div>Vietnamese</div>
                </Col>
                <Col span={8} style={{textAlign: 'center'}}>
                    <Select 
                        placeholder="Select a model"
                        // defaultValue={selectedModel}
                        onChange={handleModelSelected}
                        style={{margin: '0 auto'}}
                    >
                        {supportedModels.map((model) => 
                            <Option key={model}>{model}</Option>
                        )}
                    </Select>
                </Col>
                <Col span={8}>
                    <Button 
                        disabled={translating || !selectedFile || !selectedModel}
                        type={'primary'} 
                        style={{float: 'right'}}
                        onClick={handleTranslationBtnClicked}
                    >
                        Translate
                    </Button>
                </Col>
            </Row>
        </div>
    );

    const bahnaricCardTitle = 'Bahnaric';

    return (
        <div className='file-translation'>
            <Row justify='center' wrap>
                <Col>
                    <Card title={vietnameseCardTitle}>
                        <div className='file-translation--content'>
                            <Upload
                                onChange={handleFileSelected}
                                beforeUpload={handleBeforeUpload}
                                fileList={selectedFile ? [selectedFile] : []}
                                disabled={translating}
                                accept='.txt,.pdf'
                                listType='text'
                                maxCount={1}
                            >
                                <Button icon={<AiOutlineUpload size={'1.5em'} />}>Upload</Button>
                            </Upload>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card title={bahnaricCardTitle}>
                        <Spin 
                            tip='Translating...'
                            spinning={translating}
                        >
                            <div className='file-translation--content'>
                                {
                                    translatedData
                                        ?   (<>
                                                <Button 
                                                    icon={<AiOutlineDownload size={'1.5em'} />}
                                                    onClick={handleDownload}
                                                >
                                                    Download
                                                </Button>
                                                <div>{translatedData.filename}</div>
                                            </>)
                                        :   'Download target file here !'
                                }
                            </div>
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default FileTranslation;