import { Button, Card, Col, message, Row, Select, Spin } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import './TextTranslation.scss';
import { getModelsAPI, textTranslateAPI, ttsAPI } from '../../../api/api';

const { Option } = Select

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
    const [supportedModels, setSupportedModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [translatedText, setTranslatedText] = useState([]);
    const [translating, setTranslating] = useState(false);
    const [ttsInput, setTtsInput] = useState("");
    const [audioData, setAudioData] = useState("");
    const [audioAvailable, setAudioAvailable] = useState(false);

    const srcRef = useRef(null);
    const tgtRef = useRef(null);

    useEffect(() => {
        getModelsAPI()
            .then(response => {
                const models = response.data.models;
                console.log(models);
                setSupportedModels(models);
                setSelectedModel(models[0]);
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

    useEffect(() => {
        updateHeight();
    },[])

    useEffect(() => {
        console.log("Tts input")
        console.log(ttsInput)
        setAudioAvailable(false);
        if (ttsInput === "") {
            return;
        }
        // const speech = "UklGRhwMAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0Ya4LAACAgICAgICAgICAgICAgICAgICAgICAgICAf3hxeH+AfXZ1eHx6dnR5fYGFgoOKi42aloubq6GOjI2Op7ythXJ0eYF5aV1AOFFib32HmZSHhpCalIiYi4SRkZaLfnhxaWptb21qaWBea2BRYmZTVmFgWFNXVVVhaGdbYGhZbXh1gXZ1goeIlot1k6yxtKaOkaWhq7KonKCZoaCjoKWuqqmurK6ztrO7tbTAvru/vb68vbW6vLGqsLOfm5yal5KKhoyBeHt2dXBnbmljVlJWUEBBPDw9Mi4zKRwhIBYaGRQcHBURGB0XFxwhGxocJSstMjg6PTc6PUxVV1lWV2JqaXN0coCHhIyPjpOenqWppK6xu72yxMu9us7Pw83Wy9nY29ve6OPr6uvs6ezu6ejk6erm3uPj3dbT1sjBzdDFuMHAt7m1r7W6qaCupJOTkpWPgHqAd3JrbGlnY1peX1hTUk9PTFRKR0RFQkRBRUVEQkdBPjs9Pzo6NT04Njs+PTxAPzo/Ojk6PEA5PUJAQD04PkRCREZLUk1KT1BRUVdXU1VRV1tZV1xgXltcXF9hXl9eY2VmZmlna3J0b3F3eHyBfX+JgIWJiouTlZCTmpybnqSgnqyrqrO3srK2uL2/u7jAwMLFxsfEv8XLzcrIy83JzcrP0s3M0dTP0drY1dPR1dzc19za19XX2dnU1NjU0dXPzdHQy8rMysfGxMLBvLu3ta+sraeioJ2YlI+MioeFfX55cnJsaWVjXVlbVE5RTktHRUVAPDw3NC8uLyknKSIiJiUdHiEeGx4eHRwZHB8cHiAfHh8eHSEhISMoJyMnKisrLCszNy8yOTg9QEJFRUVITVFOTlJVWltaXmNfX2ZqZ21xb3R3eHqAhoeJkZKTlZmhpJ6kqKeur6yxtLW1trW4t6+us7axrbK2tLa6ury7u7u9u7vCwb+/vr7Ev7y9v8G8vby6vru4uLq+tri8ubi5t7W4uLW5uLKxs7G0tLGwt7Wvs7avr7O0tLW4trS4uLO1trW1trm1tLm0r7Kyr66wramsqaKlp52bmpeWl5KQkImEhIB8fXh3eHJrbW5mYGNcWFhUUE1LRENDQUI9ODcxLy8vMCsqLCgoKCgpKScoKCYoKygpKyssLi0sLi0uMDIwMTIuLzQ0Njg4Njc8ODlBQ0A/RUdGSU5RUVFUV1pdXWFjZGdpbG1vcXJ2eXh6fICAgIWIio2OkJGSlJWanJqbnZ2cn6Kkp6enq62srbCysrO1uLy4uL+/vL7CwMHAvb/Cvbq9vLm5uba2t7Sysq+urqyqqaalpqShoJ+enZuamZqXlZWTkpGSkpCNjpCMioqLioiHhoeGhYSGg4GDhoKDg4GBg4GBgoGBgoOChISChISChIWDg4WEgoSEgYODgYGCgYGAgICAgX99f398fX18e3p6e3t7enp7fHx4e3x6e3x7fHx9fX59fn1+fX19fH19fnx9fn19fX18fHx7fHx6fH18fXx8fHx7fH1+fXx+f319fn19fn1+gH9+f4B/fn+AgICAgH+AgICAgIGAgICAgH9+f4B+f35+fn58e3t8e3p5eXh4d3Z1dHRzcXBvb21sbmxqaWhlZmVjYmFfX2BfXV1cXFxaWVlaWVlYV1hYV1hYWVhZWFlaWllbXFpbXV5fX15fYWJhYmNiYWJhYWJjZGVmZ2hqbG1ub3Fxc3V3dnd6e3t8e3x+f3+AgICAgoGBgoKDhISFh4aHiYqKi4uMjYyOj4+QkZKUlZWXmJmbm52enqCioqSlpqeoqaqrrK2ur7CxsrGys7O0tbW2tba3t7i3uLe4t7a3t7i3tre2tba1tLSzsrKysbCvrq2sq6qop6alo6OioJ+dnJqZmJeWlJKSkI+OjoyLioiIh4WEg4GBgH9+fXt6eXh3d3V0c3JxcG9ubWxsamppaWhnZmVlZGRjYmNiYWBhYGBfYF9fXl5fXl1dXVxdXF1dXF1cXF1cXF1dXV5dXV5fXl9eX19gYGFgYWJhYmFiY2NiY2RjZGNkZWRlZGVmZmVmZmVmZ2dmZ2hnaGhnaGloZ2hpaWhpamlqaWpqa2pra2xtbGxtbm1ubm5vcG9wcXBxcnFycnN0c3N0dXV2d3d4eHh5ent6e3x9fn5/f4CAgIGCg4SEhYaGh4iIiYqLi4uMjY2Oj5CQkZGSk5OUlJWWlpeYl5iZmZqbm5ybnJ2cnZ6en56fn6ChoKChoqGio6KjpKOko6SjpKWkpaSkpKSlpKWkpaSlpKSlpKOkpKOko6KioaKhoaCfoJ+enp2dnJybmpmZmJeXlpWUk5STkZGQj4+OjYyLioqJh4eGhYSEgoKBgIB/fn59fHt7enl5eHd3dnZ1dHRzc3JycXBxcG9vbm5tbWxrbGxraWppaWhpaGdnZ2dmZ2ZlZmVmZWRlZGVkY2RjZGNkZGRkZGRkZGRkZGRjZGRkY2RjZGNkZWRlZGVmZWZmZ2ZnZ2doaWhpaWpra2xsbW5tbm9ub29wcXFycnNzdHV1dXZ2d3d4eXl6enp7fHx9fX5+f4CAgIGAgYGCgoOEhISFhoWGhoeIh4iJiImKiYqLiouLjI2MjI2OjY6Pj46PkI+QkZCRkJGQkZGSkZKRkpGSkZGRkZKRkpKRkpGSkZKRkpGSkZKRkpGSkZCRkZCRkI+Qj5CPkI+Pjo+OjY6Njo2MjYyLjIuMi4qLioqJiomJiImIh4iHh4aHhoaFhoWFhIWEg4SDg4KDgoKBgoGAgYCBgICAgICAf4CAf39+f35/fn1+fX59fHx9fH18e3x7fHt6e3p7ent6e3p5enl6enl6eXp5eXl4eXh5eHl4eXh5eHl4eXh5eHh3eHh4d3h4d3h3d3h4d3l4eHd4d3h3eHd4d3h3eHh4eXh5eHl4eHl4eXh5enl6eXp5enl6eXp5ent6ent6e3x7fHx9fH18fX19fn1+fX5/fn9+f4B/gH+Af4CAgICAgIGAgYCBgoGCgYKCgoKDgoOEg4OEg4SFhIWEhYSFhoWGhYaHhoeHhoeGh4iHiIiHiImIiImKiYqJiYqJiouKi4qLiouKi4qLiouKi4qLiouKi4qLi4qLiouKi4qLiomJiomIiYiJiImIh4iIh4iHhoeGhYWGhYaFhIWEg4OEg4KDgoOCgYKBgIGAgICAgH+Af39+f359fn18fX19fHx8e3t6e3p7enl6eXp5enl6enl5eXh5eHh5eHl4eXh5eHl4eHd5eHd3eHl4d3h3eHd4d3h3eHh4d3h4d3h3d3h5eHl4eXh5eHl5eXp5enl6eXp7ent6e3p7e3t7fHt8e3x8fHx9fH1+fX59fn9+f35/gH+AgICAgICAgYGAgYKBgoGCgoKDgoOEg4SEhIWFhIWFhoWGhYaGhoaHhoeGh4aHhoeIh4iHiIeHiIeIh4iHiIeIiIiHiIeIh4iHiIiHiIeIh4iHiIeIh4eIh4eIh4aHh4aHhoeGh4aHhoWGhYaFhoWFhIWEhYSFhIWEhISDhIOEg4OCg4OCg4KDgYKCgYKCgYCBgIGAgYCBgICAgICAgICAf4B/f4B/gH+Af35/fn9+f35/fn1+fn19fn1+fX59fn19fX19fH18fXx9fH18fXx9fH18fXx8fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x8e3x7fHt8e3x7fHx8fXx9fH18fX5+fX59fn9+f35+f35/gH+Af4B/gICAgICAgICAgICAgYCBgIGAgIGAgYGBgoGCgYKBgoGCgYKBgoGCgoKDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KCgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGBgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCAgICBgIGAgYCBgIGAgYCBgIGAgYCBgExJU1RCAAAASU5GT0lDUkQMAAAAMjAwOC0wOS0yMQAASUVORwMAAAAgAAABSVNGVBYAAABTb255IFNvdW5kIEZvcmdlIDguMAAA"
        // setAudioData(speech);
        // setAudioAvailable(true);
        ttsAPI(ttsInput)            
            .then(response => {
                const speech = response.data.speech;
                setAudioData(speech);
                setAudioAvailable(true);
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    // message.error(error.response.data.error);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    // message.error('Server does not reponse !');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    // message.error(error.message);
                }
                // console.log(error.config);
                // setTtsInput("");
            })
    }, [ttsInput])

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
        textTranslateAPI(text, selectedModel)
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
            setTtsInput(tgt.join(' '));
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
                    {selectedModel && <Select 
                        placeholder="Select a model"
                        defaultValue={selectedModel}
                        onChange={handleModelSelected}
                        style={{margin: '0 auto'}}
                    >
                        {supportedModels.map((model) => 
                            <Option key={model}>{model}</Option>
                        )}
                    </Select>}
                </Col>
                <Col span={8}>
                    <Button 
                        disabled={translating || !selectedModel}
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

    // const bahnaricCardTitle = 'Bahnaric';
    const bahnaricCardTitle = (
        <div>
            <Row>
                <Col span={8}>
                    <div>Bahnaric</div>
                </Col>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <div style={{position: 'relative', top: '-0.9em'}}>
                        {audioAvailable && !translating && <audio 
                            className='audio-player'
                            controls 
                            src={`data:audio/wav;base64,${audioData}`}
                        >
                        </audio>}
                    </div>
                </Col>
            </Row>
        </div>
    );

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