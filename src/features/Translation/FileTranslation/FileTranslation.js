import React from 'react';
import './FileTranslation.scss';
import { Steps, Button, message, Card } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Upload source file',
    content: 'First-content',
  },
  {
    title: 'Select model',
    content: 'Second-content',
  },
  {
    title: 'Download target file',
    content: 'Last-content',
  },
];


const FileTranslation = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    return (
        <div className='file-translation'>
            <Card title={
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
            }>
                <div className="steps-content">
                    {steps[current].content}
                </div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
}

export default FileTranslation;