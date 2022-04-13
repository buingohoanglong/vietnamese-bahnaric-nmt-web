import React from 'react';
import './DataAugmentation.scss';
import imageSynonymAugmentation from '../../../assets/Synonym augmentation.png';
import { Image } from 'antd';

const DataAugmentation = () => {
    return (
        <div className='data-augmentation about-tab'>
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Phương pháp sử dụng từ đồng nghĩa
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Phương pháp này còn được gọi là phương pháp thay thế từ (word replacement), hoạt động
                        bằng cách giữ nguyên chuỗi đích (target sequence) và thay thế các từ trong chuỗi nguồn
                        (source sequence) hoặc giữ nguyên chuỗi nguồn và thay thế từ trong chuỗi đích bằng các từ
                        đồng nghĩa với nó để tạo ra nhiều cặp song ngữ mới. Đối với bài toán Việt - Bahnar hiện
                        tại, do nguồn tài liệu về từ vựng, đặc biệt là từ đồng nghĩa trong tiếng Bahnar vô cùng khan
                        hiếm nên tác giả chỉ tập trung theo hướng tiếp cận thứ nhất là sử dụng các từ đồng nghĩa
                        trong tiếng Việt.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image
                            alt={'Sử dụng từ đồng nghĩa để làm giàu dữ liệu'} 
                            width={500} src={imageSynonymAugmentation}
                        />
                    </div>
                </div>
            </div> 
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Phương pháp dịch ngược
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Phương pháp dịch ngược (back translation [Edu+18]) giúp tổng hợp tập dữ liệu song ngữ
                        từ nguồn dữ liệu đơn ngữ. Với tập dữ liệu song ngữ đang có, mô hình được huấn luyện để
                        dịch từ ngôn ngữ đích sang ngôn ngữ nguồn (gọi là mô hình Model-T-S). Sau đó, sử dụng
                        mô hình Model-T-S cho tập dữ liệu đơn trong ngôn ngữ đích để tổng hợp dữ liệu trong ngôn
                        ngữ nguồn tương ứng. Cuối cùng, tập dữ liệu song ngữ tổng hợp được cùng với tập dữ liệu
                        song ngữ ban đầu được dùng để huấn luyện mô hình Model-S-T dịch từ ngôn ngữ nguồn sang
                        ngôn ngữ đích.
                    </div>
                </div>
            </div>
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Phương pháp copied corpus
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Phương pháp copied corpus [CMH17] tạo ra tập dữ liệu song ngữ từ tập dữ liệu đơn ngữ
                        bằng cách copy hoàn toàn tập dữ liệu trong ngôn ngữ đích làm ngôn ngữ nguồn, khi đó mỗi
                        câu trong ngôn ngữ nguồn hoàn toàn giống với câu trong ngôn ngữ đích. Tập dữ liệu song
                        ngữ này được gọi là copied corpus. Sau đó copied corpus được trộn với tập dữ liệu song ngữ
                        thông thường để huấn luyện mô hình.
                    </div>
                </div>
            </div>               
        </div>
    );
}

export default DataAugmentation;