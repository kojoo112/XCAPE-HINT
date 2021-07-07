import React, {useEffect, useState} from "react";
import Header from "./Header";
import Article from "./Article";

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
        await fetch('/registerHint', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const getThemeList = async () => {
        const response = await fetch(`/theme/list?merchantCode=${merchant}`);
        const data = await response.json();
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
        const response = await fetch(`/getHint?merchantCode=${merchant}&themeCode=${themeCode}`);
        const data = await response.json();
        setHintList(data);
        setHintListSize(data.length+1);
    }

    useEffect(() => {
        getThemeList();
        getHintList();
    },[merchant, themeCode]);

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