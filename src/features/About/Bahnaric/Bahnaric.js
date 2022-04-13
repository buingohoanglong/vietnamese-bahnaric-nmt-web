import { Avatar, Col, Image, Row } from 'antd';
import React from 'react';
import './Bahnaric.scss';
import imageBahnaricPopulationByProvince from '../../../assets/Bahnaric population distribution by province_city in 2019.png';
import imageBahnaricPopulationBySocialEconomicRegion from '../../../assets/Bahnaric population distribution by Socio-Economic Region in 2019.png';
import imageBahnaricAlphabet from '../../../assets/bangchucai.png';

const Bahnaric = () => {
    return (
        <div className='bahnaric about-tab'>
            {/* <span>Bahnaric section is unavailable</span> */}
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Dân số  Bahnar
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Bahnar là một trong 54 dân tộc sống trong lãnh thổ Việt Nam. Theo số liệu thống kê từ Kết
                        quả toàn bộ của Tổng điều tra dân số và nhà ở năm 2019 [Vie20], dân số Bahnar khoảng
                        286910 người, tập trung chủ yếu ở khu vực Tây Nguyên (Gia Lai, Kon Tum) và Duyên hải
                        miền trung (Bình Định, Phú Yên), trong đó: tại Bình Định là 21650
                        người (1.45% dân số tỉnh), tại Phú Yên là 4680 người (0.53% dân số tỉnh), tại Kon Tum là
                        68799 người (12.73% dân số tỉnh), và Gia Lai là 189367 người (12.51% dân số tỉnh).
                    </div>
                    <Row justify={'space-between'} className='about-tab--section--body--paragraph'>
                        <Col span={11}>
                            <div>
                                <Image alt={'Bahnaric population distribution by province/city in 2019'} width={400} src={imageBahnaricPopulationByProvince}/>
                            </div>
                        </Col>
                        <Col span={11}>
                            <div>
                                <Image alt={'Bahnaric population distribution by Social Economic Regions in 2019'} width={400} src={imageBahnaricPopulationBySocialEconomicRegion}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Hệ thống chữ viết Bahnar
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Ngôn ngữ Bahnar là một nhánh của Ngữ hệ Nam Á (Austroasiatic) (còn gọi là Môn-Khmer)
                        được sử dụng ở các cộng đồng không chỉ ở vùng Tây Nguyên và Duyên hải Việt Nam mà còn ở nam Lào và đông Campuchia [CH13]. Tiếng Bahnar được trải qua quá trình nghiên cứu
                        phát triển tương đối lâu dài. Hệ thống chữ viết Bahnar được các giáo sĩ người Pháp trong
                        Hội truyền giáo Kontum đặt nền móng nghiên cứu và đến năm 1861 được dùng để dịch Kinh
                        thánh cũng như giảng đạo. Đến khoảng những năm 1965-1975, Viện chuyên khảo ngữ học Sài
                        Gòn (Summer Institute of Linguistics - SIL) đã đưa ra một số sửa đổi trong tiếng Bahnar để
                        tiện in ấn. Đến sau năm 1975, Sở giáo dục tỉnh Gia Lai - Kontum tiếp tục có những nghiên
                        cứu, công nhận một số thay đổi và biên soạn sách học tiếng Bahnar. Cho đến ngày nay tiếng
                        Bahnar vẫn đang được hoàn thiện để vừa có sự thống nhất cũng vừa giữ được bản sắc các
                        địa phương [Ngu+08].
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Do ảnh hưởng bởi yếu tố địa lý, văn hóa và có nhiều thay đổi trong lịch sử, tiếng Bahnar
                        tồn tại khá nhiều phương ngữ. Những phương ngữ chính gồm có: Bahnar Roh (huyện Đak
                        Đoa, Mang Yang tỉnh Gia Lai), Bahnar Tơlô (huyện Đak Pơ, K’Bang, Kông Chro tỉnh Gia
                        Lai), Bahnar Kon KơĐeh (huyện K’Bang tỉnh Gia Lai; tỉnh Kontum) Bahnar Bơnâm (huyện
                        K’Bang, thị xã An Khê tỉnh Gia Lai) và Bahnar Kriêm (huyện Vĩnh Thạnh Bình Định
                        province; tỉnh Phú Yên). Trong đó sự khác biệt giữa các phương ngữ chỉ ở phương diện từ
                        vựng [Jil+18].
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Theo cuốn Chữ BaNa Kriêm Bình Định [Ngu+08], bẳng chữ cái tiếng Bahnar gồm các
                        nguyên âm: a, e, ê, o, ô, ơ, u, ư, i; các phụ âm: b, c, d, ,đ, g, h, j, k, l, m, n, p, r, s, t, w, y; và
                        2 dấu là dấu vành trăng khuyết (˘) trên các nguyên âm và dấu phẩy trên (’ ) trước các phụ
                        âm.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image 
                            alt={'Bảng chữ cái Bahnar'} 
                            width={350} src={imageBahnaricAlphabet}
                        />
                    </div>
                </div>
            </div>

            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Những thách thức trong bài toán dịch máy Việt - Bahnar
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Với những đặc điểm nêu trên, bài toán dịch máy Việt - Bahnar bằng mạng nơ-ron tồn tại
                        một số khó khăn sau:<br/>
                        <ul>
                            <li>
                                Nguồn tài liệu dạng văn bảng của tiếng Bahnar vô cùng khan hiếm do do văn hóa
                                truyền miệng vẫn còn là phương thức truyền tải văn hóa, thông tin, tri thức chính của
                                cộng đồng này. Điều này gây khó khăn rất nhiều cho các mô hình dịch máy bằng mạng
                                nơ-ron bởi vì để huấn luyện được các mô hình thì cần một lượng dữ liệu rất lớn.
                            </li>
                            <li>
                                Tiếng Bahnar có rất nhiều phương ngữ và vẫn đang trong quá trình hoàn thiện. Vì có
                                nhiều phương ngữ nên để xây dựng một mô hình dịch máy hiệu quả thì cần phải thu
                                thập dữ liệu từ nhiều vùng miền và nhiều phương ngữ khác nhau.
                            </li>
                            <li>
                                Cặp ngôn ngữ này gặp phải vấn đề mất cân bằng tài nguyên rất lớn, trong đó tiếng
                                Việt có khoảng 40000 từ [Hoà+98], còn tiếng Bahnar theo ước tính sơ bộ chỉ có khoảng
                                4000 từ [Dou89] [BB+79]. Và vì là một cộng đồng trong lãnh thổ Việt Nam nên người
                                Bahnar thường tận dụng các từ vay mượn (loanword ), nghĩa là sử dụng trực tiếp từ
                                tiếng Việt khi không có từ nào trong tiếng Bahnar mang ý nghĩa tương tự. Ví dụ, câu
                                tiếng Việt "Tôi học NLP" dịch sang tiếng Bahnar sẽ là "Inh hok NLP" với từ "NLP"
                                do không có trong tiếng Bahnar nên đã được vay mượn từ tiếng Việt. Rõ ràng rằng với
                                cộng đồng dân số nhỏ như cộng đồng Bahnar thì lượng từ vựng của ngôn ngữ không
                                thể kịp mở rộng để dịch được những từ mới của các ngôn ngữ phát triển khác như tiếng
                                Việt nên việc sử dụng những từ vay mượn là một giải pháp hữu hiệu. Vì vậy mô hình
                                dịch máy Việt - Bahnar cần phải xử lý vấn đề này một cách phù hợp.
                            </li>
                            <li>
                                Do cách biệt về địa lý và cộng đồng người Bahnar tương đối nhỏ nên sẽ gặp khó khăn
                                trong việc tiếp cận và thu thập đánh giá từ các chuyên gia, những người biết tiếng
                                Bahnar.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bahnaric;