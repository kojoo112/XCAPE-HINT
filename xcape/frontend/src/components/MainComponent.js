import React, {useEffect, useState} from "react";
import Header from "./Header";
import Article from "./Article";

export default function MainComponent(){

    // const [merchantList, setMerchantList] = useState([])

    let hintListSize = 0;

    const [merchant, setMerchant] = useState('MRC001');
    const [theme, setTheme] = useState('THM001');

    const [themeList, setThemeList] = useState([]);
    const [hintList, setHintList] = useState([]);

    const getThemeList = async () => {
        const response = await fetch(`/theme/list?merchantCode=${merchant}`);
        const data = await response.json();
        setThemeList(data);
    }

    const handleMerchantState = (merchant) => {
        setMerchant(merchant);
        console.log(`TestComponent console : ${merchant}`)
    }

    const handleThemeState = (theme) => {
        setTheme(theme);
        console.log(theme);
    }

    const getHintList = async () => {
        const response = await fetch(`/getHint?merchantCode=${merchant}&themeCode=${theme}`);
        const data = await response.json();
        setHintList(data);
    }

    useEffect(() => {
        getThemeList();
        getHintList();
    },[merchant, theme]);

    return(
      <div>
          <Header handleMerchantState={handleMerchantState} merchantState={ merchant } themeState={ handleThemeState } themeListState={ themeList }/>
          <Article hintListSize={hintListSize} hintState={hintList}/>
      </div>
    );
}