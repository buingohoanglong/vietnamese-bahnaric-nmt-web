import React from 'react';
import './Model.scss';
import imageTransformer from '../../../assets/Transformer.png';
import imageBERT from '../../../assets/BERT.png';
import imageBART from '../../../assets/BART.png';
import imageBERTfusedNMT from '../../../assets/BERT-fused NMT.png';
import imageLoanformer from '../../../assets/Loanformer.png';
import { Image } from 'antd';

const Model = () => {
    return (
        <div className='model about-tab'>
            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Transformer
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Năm 2017, Vaswani và cộng sự đề xuất mô hình Transformer [Vas+17] giải quyết các nhược 
                        được nhiều nhược điểm của mô hình RNN. Mô hình Transformer cũng tuân theo kiến trúc 
                        seq2seq nhưng với encoder và decoder được xây dựng từ các khối scaled dot-product 
                        attention và feed forward.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image 
                            alt={'Transformer model'} 
                            width={450} src={imageTransformer}
                        />
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Encoder gồm N = 6 lớp giống nhau (encoder layer ) xếp chồng lên nhau. Mỗi lớp được cấu
                        tạo từ 2 lớp con (sub-layer ): multi-head self-attention với chức năng nhúng ngữ nghĩa
                        các từ xung quanh vào các vector biểu diễn từ và fully connected feedforward network
                        với chức năng tính toán, rút trích thông tin. Đầu ra của mỗi lớp con này được áp dụng
                        lớp residual connection [He+16] và layer normalization [BKH16]: LayerNorm(x +
                        Sublayer(x)) với mục đích hạn chế vanishing gradient, giảm training error và giảm
                        thời gian huấn luyện. Để áp dụng residual connection, các lớp con của mô hình đều có
                        đầu ra cùng kích thước d model = 512.
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Decoder gồm N = 6 lớp giống nhau (decoder layer ) xếp chồng lên nhau. Bên cạnh 2 lớp
                        con như encoder, decoder còn có thêm lớp con thứ 3 thực hiện attention với đầu ra của
                        từng từ sau khi qua encoder. Lớp con này đóng vai trò lấy context vector giúp mô hình 
                        tập trung vào một số từ trong chuỗi nguồn khi sinh (dịch) một từ sang chuỗi đích. 
                        Ngoài ra, Vaswani và cộng sự còn thêm một lớp mask để giống như lúc dự đoán (predict),
                        khi huấn luyện mô hình tránh lấy thông tin ngữ cảnh của các từ tương lai.
                    </div>
                </div>
            </div>

            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    BERT
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Năm 2018, Devlin và cộng sự đề xuất mô hình Pre-training of Deep Bidirectional Trans-
                        formers for Language Understanding (BERT) [Dev+18]. BERT được huấn luyện trên lượng
                        dữ liệu lớn và có thể xem là một pre-trained model thường được fine-tune cùng với một số
                        lớp nơ-ron đơn giản để tạo nên những mô hình state-of-the-art giải quyết nhiều bài toán
                        khác nhau trong lĩnh vực xử lý ngôn ngữ tự nhiên như question answering [DS13], language
                        inference [Mac09],...
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        BERT dùng chung một kiến trúc với khối encoder của Transformer, và được huấn luyện trên
                        hai mục tiêu: masked language modeling (MLM) và next sentence prediction (NSP). 
                        Với mục tiêu NSP, mô hình nhận đầu vào các cặp chuỗi ngăn cách nhau bởi token [SEP]
                        và được huấn luyện để dự đoán đó có phải là hai chuỗi liên tiếp hay không. Với mục tiêu
                        MLM: 15% token trong chuỗi đầu vào sẽ được mask (với 80% trong số đó thực sự bị thay
                        thế bởi token [MASK], 10% số token được thay thế ngẫu nhiên bởi một token khác và 10%
                        còn lại được giữ không đổi), sau đó BERT được huấn luyện để dự đoán nhưng token bị mask
                        dựa vào ngữ cảnh (context) của những token xung quanh. Vì vậy đầu ra của BERT có để
                        được dùng như một lớp embedding đã được nhúng vào thông tin ngữ cảnh từ cả hai hướng
                        nhờ vào cơ chế self-attention trong mỗi lớp Transformer encoder.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image 
                            alt={'BERT model'} 
                            width={450} src={imageBERT}
                        />
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Năm 2019, Liu và cộng sự đưa ra mô hình RoBERTa (Robustly Optimized BERT Pretraining
                        Approach) [Liu+19] áp dụng cùng kiến trúc với BERT với một số thay đổi trong chiến lược
                        huấn luyện: (i) thời gian huấn luyện lâu hơn với nhiều dữ liệu liệu và batch lớn hơn; (ii)
                        bỏ mục tiêu NSP; (iii) huấn luyện với chuỗi dài hơn; và (iv) áp dụng dynamic masking
                        pattern. RoBERTa cũng đạt được nhiều thành tựu trên GLUE, RACE và SQuAD. Nhìn
                        chung RoBERTa vẫn tuân theo kiến trúc encoder của Transformer và có thể sử dụng với
                        các mục đích tương tự BERT. Năm 2020, Dat Quoc Nguyen và cộng sự đưa ra PhoBERT
                        [NN20], một phiên bản khác của RoBERTa được huấn luyện trên dữ liệu tiếng Việt và đạt
                        được những kết quả state-of-the-art trên một số bài toán NLP như part-of-speech tagging,
                        dependency parsing, named-entity recognition và natural language inference cho tiếng Việt.
                    </div>
                </div>
            </div>

            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    BART
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Năm 2019, Lewis và cộng sự đề xuất BART [Lew+19], một mô hình pretrained sequence-to-
                        sequence sử dụng kiến trúc Transformer. Đầu vào của BART được huấn luyện bằng cách áp
                        dụng rất nhiều loại nhiễu (noise) như: token masking (thay thế ngẫu nhiên các token bằng
                        token [MASK]), token deletion (ngẫu nhiên xóa một số token), text infilling (chọn một số
                        đoạn (span) kể đoạn có chiều dài bằng 0 và thay thế cả đoạn bằng token [MASK]), sentence
                        permutation (hoán đổi vị trí các câu), và document rotation (chọn ngẫu nhiên một token và
                        xoay văn bản sao cho token này đứng ở đầu). Sau đó BART được huấn luyện để sinh ra chuỗi
                        ban đầu.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image 
                            alt={'BART model'} 
                            width={550} src={imageBART}
                        />
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Vì có cả encoder và decoder, ngoài việc có thể áp dụng cho các bài toán hiểu ngôn ngữ
                        (language comprehension task ) như BERT, BART còn có thể được fine-tune cho bài toán
                        sinh chuỗi (language generation) kể cả dịch máy. Đối với bài toán dịch máy, lớp embedding
                        của encoder của BART được thay thế bằng một khối encoder mới còn cả mô hình BART
                        được xem như một khối decoder. Khối encoder mới này được huấn luyện để có thể biểu diễn
                        ngôn ngữ nguồn dưới dạng mà BART có thể dùng để sinh ra chuỗi trong ngôn ngữ đích -
                        ngôn ngữ mà BART được huấn luyện trước đó.
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Năm 2020, một phiên bản đa ngôn ngữ của BART là mBART [Liu+20] được huấn luyện
                        trên 25 ngôn ngữ. Năm 2021, Nguyen Luong Tran và cộng sự đã huấn luyện biến thể của
                        BART trên dữ liệu tiếng Việt và đặt tên BARTpho [TLN21]. BARTpho đã cho kết quả tốt
                        hơn so với mBART trên thang đánh giá ROUGE [Lin04] trong bài toán tóm tắt văn bản
                        tiếng Việt.
                    </div>
                </div>
            </div>

            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    BERT-fused NMT
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Năm 2020, Zhu và cộng sự sử dụng BERT [Dev+18] để trích xuất thông tin chuỗi đầu vào,
                        thông tin này sau đó được kết nối (fused ) với mỗi lớp encoder và decoder của mô hình
                        Transformer [Vas+17] bằng cơ chế attention. Khi đó so với kiến trúc mô hình Transformer
                        gốc, mô hình dịch máy này, với tên gọi BERT-fused NMT [Zhu+20], có thêm 2
                        module BERT-encoder attetion và BERT-decoder attention với BERT-encoder
                        attention và BERT-decoder attention chính là scaled dot-product attention [Vas+17] với key,
                        value xuất phát từ đầu ra của BERT, còn query thì từ đầu ra của lớp encoder hay decoder
                        trước đó.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image 
                            alt={'BERT-fused NMT model'} 
                            width={650} src={imageBERTfusedNMT}
                        />
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Bằng cách dùng kết quả trung bình cộng của BERT-encoder attetion và self-attention trong
                        encoder hay trung bình cộng của BERT-decoder attention và encoder-decoder
                        attention trong decoder để đưa vào module kế tiếp, mô hình dịch máy có
                        thêm được thông tin trích xuất từ mô hình BERT huấn luyện sẵn ở mỗi lớp encoder, decoder.
                    </div>
                </div>
            </div>

            <div className='about-tab--section'>
                <div className='about-tab--section--header'>
                    Loanformer
                </div>
                <div className='about-tab--section--body'>
                    <div className='about-tab--section--body--paragraph'>
                        Mô hình Loanformer - Loanwords Processing Transformer mà nhóm tác giả đề xuất cho bài toán
                        dịch máy Việt - Bahnar trong tạp chí TALLIP (ACM Transactions on Asian and Low-Resource
                        Language Information Processing): Special Issue on New Trends in Machine Translation and
                        Technology for Low-Resource Language (manuscript), được xây dựng dựa trên mô hình BERT-fused NMT
                        [Zhu+20] kết hợp với mô hình Pointer Generator Network [SLM17], trong đó
                        BERT hỗ trợ mô hình trích xuất đặc trưng, thông tin ngữ nghĩa chuỗi nguồn trước khi được
                        dịch bởi kiến trúc seq2seq; còn Pointer Generator Network giúp copy các từ vay mượn từ
                        chuỗi nguồn sang chuỗi đích nhờ vào các trọng số được huấn luyện.
                    </div>
                    <div className='about-tab--section--body--image-block-single'>
                        <Image 
                            alt={'Loanformer model'} 
                            width={650} src={imageLoanformer}
                        />
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        BERT-fused NMT đóng vai trò là xương sống của mô hình NMT với encoder và decoder
                        hoàn toàn giống với cài đặt của Zhu và cộng sự [Zhu+20]. Tuy nhiên, BERT được thay thế
                        bằng PhoBERT để để có thể trích xuất đặc trưng cho câu tiếng Việt tốt hơn. Mặc dù chiến
                        lược huấn luyện PhoBERT dựa trên RoBERTa thay vì BERT, nhưng vì sử dụng chung kiến
                        trúc encoder của Transformer và được huấn luyện với mục tiêu MLM cho tác vụ hiểu ngôn
                        ngữ, PhoBERT có thể trích xuất đặc trưng, thông tin ngữ cảnh cho câu tiếng Việt để đưa
                        vào các lớp encoder, decoder tương tự như cách mà BERT làm. Ngoài PhoBERT, tác giả
                        còn làm thí nghiệm với BARTpho và encoder của BARTpho với mục đích tương tự.
                    </div>
                    <div className='about-tab--section--body--paragraph'>
                        Pointer Generator Network gồm 3 sub-module là Encoder-Decoder Attention with non-
                        special token mask, GenProb và CombineDistribution. Khối Encoder-Decoder attention 
                        with non-special token mask áp dụng attention cho đầu ra của encoder
                        và đầu ra của decoder để tính context matrix và attention distribution matrix 
                        dùng cho mục đích sao chép từ trong chuỗi nguồn sang chuỗi
                        đích như trong mô hình Pointer Generator Network của See và cộng sự [SLM17] nhưng với one-head scaled dot-product attention
                        [Vas+17] thay vì additive attention [BCB14]. Bằng cách này mô hình có khả năng giải quyết
                        vấn đề từ không có trong từ điển (out-of-vocab - OOV ) và sử dụng từ vay mượn trong quá
                        trình dịch. Ngoài ra, khác với bài toán tóm tắt văn bản mà See và cộng sự hay
                        Deaton và cộng sự [Dea+19] giải quyết, việc chọn 1 từ bất kỳ trong chuỗi đầu vào làm kết
                        quả đầu ra rất bình thường như cách con người vẫn làm vì đầu vào và đầu ra cùng chung
                        một ngôn ngữ, bài toán dịch máy có ngôn ngữ nguồn và ngôn ngữ đích khác nhau nên việc
                        chọn một từ đầu vào làm đầu ra chỉ nên được thực hiện cho những từ OOV và các từ vay
                        mượn như số, tên riêng và các ký tự đặc biệt như: dấu câu, biểu thức toán học, đơn vị
                        đo lường (gọi chung là special token). Vì vậy khối encoder-decoder attention này cần có 1
                        non-special token mask để đánh dấu các non-special token, các token được mask sẽ có xác
                        suất bằng 0 trong attention distribution tương ứng với việc không có khả năng được sao chép. Hai
                        sub-module còn lại là GenProbs và CombineDistribution lần lượt thực hiện chức năng xác
                        định generation probability và kết hợp attention distribution và vocab distribution thành
                        final distribution.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model;