import React, {useEffect, useState} from "react";
import Header from "./Header";
import Article from "./Article";
import axios from "axios";

export default function MainComponent() {

    const [hintListSize, setHintListSize] = useState();

    const [merchantCode, setMerchantCode] = useState('MRC001');
    const [themeCode, setThemeCode] = useState('THM001');
    const [message1, setMessage1] = useState();
    const [message2, setMessage2] = useState();

    const [merchantList, setMerchantList] = useState([]);
    const [themeList, setThemeList] = useState([]);
    const [hintList, setHintList] = useState([]);

    // post 메소드 실행시 힌트리스트 갱신용
    const [isModified, setIsModified] = useState(true);

    const handleMerchantCode = (e) => {
        setMerchantCode(e.target.value);
    }

    const handleThemeCode = (e) => {
        setThemeCode(e.target.value);
    }

    const handleMessage1 = (e) => {
        setMessage1(e.target.value);
    }

    const handleMessage2 = (e) => {
        setMessage2(e.target.value);
    }

    const deleteHint = (e) => {
        let isDelete = window.confirm('정말 삭제하시겠습니까?');
        let object = {
            seq: e.target.id
        }
        if(isDelete){
            axios.post('/deleteHint', object)
                .then(() => setIsModified(!isModified))
                .catch(console.log);
        }
    }

    const registerHint = () => {
        const registerData = {
            message1: message1,
            message2: message2,
            themeCode: themeCode,
            merchant: merchantCode
        };
        axios.post(`/registerHint`, registerData)
            .then(() => setIsModified(!isModified))
            .catch(console.log);
    }

    useEffect(() => {
        axios.get(`/merchant/list`)
            .then(res => setMerchantList(res.data))
            .catch(console.log);

    }, []);

    useEffect(() => {
        axios.get(`/theme/list?merchantCode=${merchantCode}`)
            .then(res => setThemeList(res.data))
            .catch(console.log);

    }, [merchantCode]);

    useEffect(() => {
        axios.get(`/getHint?merchantCode=${merchantCode}&themeCode=${themeCode}`)
            .then(res => {
                setHintList(res.data);
                setHintListSize(res.data.length + 1);
            })
            .catch(console.log);

    }, [merchantCode, themeCode, isModified])

    return (
        <div>
            <Header merchantList={merchantList} handleMerchantCode={handleMerchantCode}
                    themeList={themeList} handleThemeCode={handleThemeCode} hintListSize={hintListSize}
                    handleMessage1={handleMessage1} handleMessage2={handleMessage2} registerHint={registerHint}
                    />
            <Article hintList={hintList} deleteHint={deleteHint}/>
        </div>
    );
}