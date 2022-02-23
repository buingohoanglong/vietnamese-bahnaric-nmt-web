import { Avatar } from 'antd';
import React from 'react';
import './Contact.scss';
import imageLong from '../../assets/buingohoanglong.png';
import imagePhu from '../../assets/nguyenhuuthienphu.png';
import imageTho from '../../assets/quanthanhtho.png';
import imageTam from '../../assets/bangngocbaotam.png';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact--card'>
                    <div className='contact--card--image'>
                        <Avatar gap={10} size={150} shape='square' src={imageLong}/>
                    </div>
                    <div className='contact--card--body'>
                        <div className='contact--card--body--title'>Bui Ngo Hoang Long</div>
                        <div>Ho Chi Minh City University of Technology</div>
                        <div>Faculty of Computer Science and Engineering</div>
                        <div>long.buibk2000@hcmut.edu.vn</div>
                    </div>
            </div>
            <div className='contact--card'>
                    <div className='contact--card--image'>
                        <Avatar gap={10} size={150} shape='square' src={imagePhu}/>
                    </div>
                    <div className='contact--card--body'>
                    <div className='contact--card--body--title'>Nguyen Huu Thien Phu</div>
                        <div>Ho Chi Minh City University of Technology</div>
                        <div>Faculty of Computer Science and Engineering</div>
                        <div>phu.nguyenpfoem@hcmut.edu.vn</div>
                    </div>
            </div>
            <div className='contact--card'>
                    <div className='contact--card--image'>
                        <Avatar gap={10} size={150} shape='square' src={imageTam}/>
                    </div>
                    <div className='contact--card--body'>
                    <div className='contact--card--body--title'>MCS. Bang Ngoc Bao Tam</div>
                        <div>Ho Chi Minh City University of Technology</div>
                        <div>Faculty of Computer Science and Engineering</div>
                        <div>bnbaotam@hcmut.edu.vn</div>
                    </div>
            </div>
            <div className='contact--card'>
                    <div className='contact--card--image'>
                        <Avatar gap={10} size={150} shape='square' src={imageTho}/>
                    </div>
                    <div className='contact--card--body'>
                    <div className='contact--card--body--title'>Assoc. Prof. Quan Thanh Tho</div>
                        <div>Ho Chi Minh City University of Technology</div>
                        <div>Faculty of Computer Science and Engineering</div>
                        <div>qttho@hcmut.edu.vn</div>
                    </div>
            </div>
        </div>
    );
}

export default Contact;