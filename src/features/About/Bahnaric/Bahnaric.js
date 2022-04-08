import { Avatar, Col, Image, Row } from 'antd';
import React from 'react';
import './Bahnaric.scss';
import imageBahnaricPopulationByProvince from '../../../assets/Bahnaric population distribution by province_city in 2019.png';
import imageBahnaricPopulationBySocialEconomicRegion from '../../../assets/Bahnaric population distribution by Socio-Economic Region in 2019.png';

const Bahnaric = () => {
    return (
        <div className='bahnaric'>
            {/* <span>Bahnaric section is unavailable</span> */}
            <div className='bahnaric--section'>
                <div className='bahnaric--section--header'>
                    Bahnaric population
                </div>
                <div className='bahnaric--section--body'>
                    <div className='bahnaric--section--body--paragraph'>
                        Bahnar là một trong 54 dân tộc sống trong lãnh thổ Việt Nam. Theo số liệu thống kê từ Kết
                        quả toàn bộ của Tổng điều tra dân số và nhà ở năm 2019 [Vie20], dân số Bahnar khoảng
                        286910 người, tập trung chủ yếu ở khu vực Tây Nguyên (Gia Lai, Kon Tum) và Duyên hải
                        miền trung (Bình Định, Phú Yên) như Hình 3.1 và Hình 3.2, trong đó: tại Bình Định là 21650
                        người (1.45% dân số tỉnh), tại Phú Yên là 4680 người (0.53% dân số tỉnh), tại Kon Tum là
                        68799 người (12.73% dân số tỉnh), và Gia Lai là 189367 người (12.51% dân số tỉnh).
                    </div>
                    <Row justify={'space-between'} className='bahnaric--section--body--paragraph'>
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

            <div className='bahnaric--section'>
                <div className='bahnaric--section--header'>
                    Bahnaric writing system
                </div>
                <div className='bahnaric--section--body'>
                    <div className='bahnaric--section--body--paragraph'>
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
                </div>
            </div>
        </div>
    );
}

export default Bahnaric;