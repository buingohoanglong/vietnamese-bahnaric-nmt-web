import { Col, Layout, Row } from 'antd';
import './App.css';
import Translation from './features/Translation/Translation';
import Header from './features/Header/Header';

function App() {
  return (
    <div className='app'>
        <Header />
        <div className='header-body-divider'>
        </div>
        <Row justify='center'>
          <Col span={20}>
            <div className='body'>
              <Translation />
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default App;
