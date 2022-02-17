import { Button, Card, Col, message, Row, Select, Spin } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import './TextTranslation.scss';
import { translateAPI } from '../../../api/api';

const { Option } = Select

const supportedModels = [
    'Transformer',
    'PhoBERT-fused NMT',
    'Loanformer'
];

const convertToText = (str = '') => {
    // Ensure string.
    let value = String(str);
    console.log(value);
  
    // Convert encoding.
    value = value.replace(/&nbsp;/gi, ' ');
    value = value.replace(/&amp;/gi, '&');
    console.log(value);
  
    // Replace `<br>`.
    value = value.replace(/<br>/gi, '');
    console.log(value);
  
    // Replace `<div>` (from Chrome).
    value = value.replace(/<div(.*?)>/gi, '\n');
    console.log(value);
  
    // Replace `<p>` (from IE).
    value = value.replace(/<p>/gi, '\n');
    console.log(value);
  
    // Remove extra tags.
    value = value.replace(/<(.*?)>/g, '');
    console.log(value);
  
    // Trim each line.
    value = value.split('\n').map((line = '') => {
        return line.trim();
    }).join('\n');

    console.log(value);
  
    // No more than 2x newline, per "paragraph".
    // value = value.replace(/\n\n+/g, '\n\n');
    
  
    // Clean up spaces.
    value = value.replace(/[ ]+/g, ' ');
    value = value.trim();

    console.log(value);
  
    // Expose string.
    return value;
};

const TextTranslation = () => {
    const [text, setText] = useState("");
    const [selectedModel, setSelectedModel] = useState(supportedModels[0]);
    const [translatedText, setTranslatedText] = useState([]);
    const [translating, setTranslating] = useState(false);

    const srcRef = useRef(null);
    const tgtRef = useRef(null);

    useEffect(() => {
        updateHeight();
    },[])

    const updateHeight = () => {
        srcRef.current.style.height = 'auto';
        tgtRef.current.style.height = 'auto';
        const minHeight = 200;
        const currentHeight = Math.max(
            srcRef.current.scrollHeight, 
            tgtRef.current.scrollHeight,
            minHeight
        );
        srcRef.current.style.height = currentHeight + "px";
        tgtRef.current.style.height = currentHeight + "px";
    }

    const handleTextChanged = (e) => {
        e.preventDefault();
        console.log(e.target.innerHTML);
        const currentText = convertToText(e.target.innerHTML);
        setText(currentText);
        updateHeight();
    }

    const handleModelSelected = (model) => {
        setSelectedModel(model);
    }

    const handleMouseEnterTranslatedText = (text, index) => {
        if (text.trim() !== '') {
            if (index < srcRef.current.childNodes.length) {
                srcRef.current.childNodes[index].style.backgroundColor = '#69c0ff';
                tgtRef.current.childNodes[index].style.backgroundColor = '#69c0ff';
            }
        }
    }

    const handleMouseLeaveTranslatedText = (text, index) => {
        if (text.trim() !== '') {
            if (index < srcRef.current.childNodes.length) {
                srcRef.current.childNodes[index].style.backgroundColor = 'inherit';
                tgtRef.current.childNodes[index].style.backgroundColor = 'inherit';
            }
        }
    }

    const handleTranslationBtnClicked = (e) => {
        e.preventDefault();
        setTranslating(true);
        translateAPI(text, selectedModel)
            .then(response => {
            const result = response.data.ResultObj;
            const {src, tgt} = result;
            setTranslatedText(
                tgt.map((text, index) =>
                    <div 
                        key={index}
                        onMouseEnter={() => handleMouseEnterTranslatedText(text, index)}
                        onMouseLeave={() => handleMouseLeaveTranslatedText(text, index)}
                    >
                        {text.trim() !== '' ? text : <br/>}
                    </div>
                )
            );
            updateHeight();
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
                setTranslatedText("");
            }).finally(() => {
                setTranslating(false);
            })
    }

    const vietnameseCardTitle = (
        <div>
            <Row justify='space-between' align='middle'>
                <Col span={8}>
                    <div>Vietnamese</div>
                </Col>
                <Col span={8} style={{textAlign: 'center'}}>
                    <Select 
                        defaultValue={selectedModel}
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
                        disabled={translating}
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
        <div className='text-translation'>
            <Row justify='center' wrap>
                <Col>
                    <Card title={vietnameseCardTitle}>
                        <div
                            className='editable-div'
                            ref={srcRef}
                            onInput={handleTextChanged}
                            contentEditable
                            suppressContentEditableWarning={true}
                            style={{resize: 'none', overflow: 'hidden'}}
                        >
                            {/* {text} */}
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card title={bahnaricCardTitle}>
                        <Spin 
                            tip='Translating...'
                            spinning={translating}
                        >
                            <div
                                className='editable-div'
                                ref={tgtRef}
                                style={{resize: 'none', overflow: 'hidden'}}
                            >
                                {translatedText}
                            </div>
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TextTranslation;