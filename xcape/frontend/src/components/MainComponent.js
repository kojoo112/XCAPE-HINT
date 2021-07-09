import React, {useEffect, useState} from "react";
import Header from "./Header";
import Article from "./Article";
import {getFetch} from "../util/getFetch";
import {postFetch} from "../util/postFetch";

export default function MainComponent(){

    const [hintListSize, setHintListSize] = useState();

    const [merchant, setMerchant] = useState('MRC001');
    const [themeCode, setThemeCode] = useState('THM001');
    const [message1, setMessage1] = useState();
    const [message2, setMessage2] = useState();

    const [themeList, setThemeList] = useState([]);
    const [hintList, setHintList] = useState([]);

    const registerData = {
        message1: message1,
        message2: message2,
        themeCode: themeCode,
        merchant: merchant
    };

    const registerHint = async () => {
        await postFetch('/registerHint', registerData);
    }

    const getThemeList = async () => {
        const data = await getFetch(`/theme/list?merchantCode=${merchant}`);
        setThemeList(data);
    }

    const handleMessage1 = (message1) => {
        setMessage1(message1);
    }

    const handleMessage2 = (message2) => {
        setMessage2(message2);
    }

    const handleMerchantState = (merchant) => {
        setMerchant(merchant);
    }

    const handleThemeCodeState = (themeCode) => {
        setThemeCode(themeCode);
    }

    const getHintList = async () => {
        const data = await getFetch(`/getHint?merchantCode=${merchant}&themeCode=${themeCode}`);
        setHintList(data);
        setHintListSize(data.length+1);
    }

    useEffect(() => {
        getThemeList();
        getHintList();
    },[merchant, themeCode, hintList]);

    return(
      <div>
          <Header handleMerchantState={handleMerchantState} merchantState={ merchant }
                  themeCodeState={ handleThemeCodeState } themeListState={ themeList }
                  hintListSize={hintListSize} handleMessage1={handleMessage1}
                  handleMessage2={handleMessage2} registerHint={registerHint}/>
          <Article hintListSize={hintListSize} hintState={hintList}/>
      </div>
    );
}