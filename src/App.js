import { Col, Row } from 'antd';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Translation from './features/Translation/Translation';
import Header from './features/Header/Header';
import About from './features/About/About';
import Contact from './features/Contact/Contact';

function App() {
  return (
    <div className='app'>
        <Header />
        <div className='header-body-divider'>
        </div>
        <Row justify='center'>
          <Col span={20}>
            <div className='body'>
              <Routes>
                <Route 
                  path='/translation/*' 
                  element={<Translation />} 
                />
                <Route 
                  path='/about/*' 
                  element={<About />} 
                />
                <Route 
                  path='/contact' 
                  element={<Contact />} 
                />
                <Route 
                  path='/*' 
                  element={<Navigate to='/translation' />} 
                />
              </Routes>
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default App;
