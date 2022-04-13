import React from 'react';
import './Preprocessing.scss';
import imageOCRCorrection from '../../../assets/OCRCorrection.png';
import imagePreprocessingPipeline from '../../../assets/Preprocessing Pipeline.png';
import { Image } from 'antd';

const Preprocessing = () => {
    return (
        <div className='preprocessing about-tab'>
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Thu thập dữ liệu
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Do người Bahnar sống tập trung chủ yếu ở khu vực Tây Nguyên (Gia Lai, Kontum) và
                        Duyên hải miền trung (Bình Định, Phú Yên) [Vie20] nên dữ liệu cần thu thập chủ yếu có nguồn gốc
                        tập trung trong phạm vi các tỉnh này. Các đối tượng cần thu thập gồm:<br/>
                        <ul>
                            <li>
                                Dữ liệu dạng pdf hoặc hình ảnh từ các tài liệu nghiên cứu, giảng dạy tiếng Bahnar; các
                                tác phẩm văn học, sách, báo, tạp chí song ngữ Việt - Bahnar,...
                            </li>
                            <li>
                                Dữ liệu dạng text từ nội dung các bản tin của đài phát thanh, chương trình truyền
                                hình tại các địa phương.
                            </li>
                        </ul>
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Trong đó, yêu cầu quan trọng là dữ liệu cần tồn tại ở dạng các câu hoặc đoạn văn bản song
                        ngữ để dùng trong việc huấn luyện mô hình học sâu. Các dữ liệu dạng khác như: đơn ngữ,
                        dữ liệu dạng từ điển, dạng ngữ vựng đối chiếu... được dùng để hỗ trợ trong các phương pháp
                        làm giàu dữ liệu, đánh giá kết quả,...
                    </div>                    
                    <div className='about-tab--section--body--paragraph'>
                        Đối với các dữ liệu dạng pdf hoặc hình ảnh, phương pháp nhận diện ký tự quang học 
                        (Optical Character Recognition - OCR) [PPP12] được sử dụng với hỗ trợ từ các thư viện
                        Pytesserect, OpenCV để trích xuất nội dung văn bản vào định dạng file .txt. Mặc dù hiện
                        nay Pytesserect chưa hỗ trợ cho tiếng Bahnar nhưng do sự tương đồng trong bảng chữ cái
                        giữa tiếng Việt và tiếng Bahnar nên định dạng tiếng Việt được lựa chọn để trích xuất 
                        cho cả văn bản tiếng Việt và tiếng Bahnar. Riêng phần tiếng Bahnar sau đó sẽ được 
                        áp dụng một số heuristic để cho kết quả chính xác:
                        <ul>
                            <li>
                                Thay thế các dấu "sắc", "huyền", "hỏi", "ngã" thành dấu "vành trăng khuyết" vì trong
                                tiếng Bahnar chỉ có dấu vành trăng khuyết được đặt trên các nguyên âm nên khả năng
                                cao bộ OCR của Pyteserect cho tiếng Việt nhận diện nhầm thành một các dấu trên.
                                Ngoài ra dấu "nặng" cũng được loại bỏ vì tiếng Bahnar không có dấu này.
                            </li>
                            <li>
                                Chỉnh sửa các ký tự thường bị nhận diện sai
                            </li>
                        </ul>        
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image
                            alt={'Bảng các ký tự nhận diện sai được chỉnh sửa bằng heuristic'} 
                            width={200} src={imageOCRCorrection}
                        />
                    </div>
                </div>
            </div> 
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Tiền xử  lý dữ liệu
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                    Tiền xử lý dữ liệu là tác vụ đầu tiên và không thể thiếu trong các bài toán xử lý ngôn ngữ
                    tự nhiên vì văn bản là loại dữ liệu không có cấu trúc và thường chứa nhiều nhiễu (noise)
                    gây khó khăn cho quá trình huấn luyện.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image
                            alt={'Luồng tiền xử lý dữ liệu dạng văn bản'} 
                            width={600} src={imagePreprocessingPipeline}
                        />
                    </div>                  
                    <div className='about-tab--section--body--paragraph'>
                        <ul>
                            <li>
                                Làm sạch dữ liệu (cleaning): là bước loại bỏ nhiễu trong dữ liệu như các thẻ html,
                                xml, đường link,...
                            </li>
                            <li>
                                Tách từ (tokenization hay word segmentation): là quá trình chuyển văn bản thành
                                một chuỗi các token với mỗi token là một chuỗi ký tự mang ý nghĩa cụ thể, biểu thị
                                cho một đơn vị ngữ nghĩa. Một cách gần đúng, có thể xem token là một từ trong văn
                                bản.
                            </li>
                            <li>
                                Nhận diện thực thể (named entity recognition - NER): là bước nhận diện từ hoặc
                                cụm từ trong câu có phải là các thực thể như: người (person), tổ chức (organization),
                                vị trí (location),... hay không. Trong dự án này, bộ NER được dùng
                                để hỗ trợ quá trình xử lý hiện tượng vay mượn từ trong cặp ngôn ngữ Việt - Bahnar.
                            </li>
                            <li>
                                Chuẩn hóa từ (normalization): là bước đưa các biểu diễn khác nhau của cùng một từ
                                về một dạng biểu diễn. Một số phương pháp chuẩn hóa gồm có: biến đổi từ về dạng gốc
                                (stemming); từ vựng hóa (lemmatization); chuyển từ về dạng viết thường (lowercase
                                conversion); chuyển dữ liệu dạng ngày, số, ký hiệu về dạng chữ,... Tuy nhiên, hiện tại
                                chỉ có NFC normalization được dùng để chuẩn hóa chuỗi Unicode.
                            </li>
                            <li>
                                Vector hóa từ (vectorization): là bước mã hóa từng từ trong dữ liệu thành một vector
                                trong không gian nhiều chiều để có thể xử lý được bỏi các mạng nơ-ron.
                            </li>
                        </ul>        
                    </div>
                </div>
            </div>         
        </div>
    );
}

export default Preprocessing;