package com.samsan.xcape.service;

import com.samsan.xcape.dao.HintDAO;
import com.samsan.xcape.util.RandomKeyValue;
import com.samsan.xcape.vo.HintVO;
import com.samsan.xcape.vo.MerchantVO;
import com.samsan.xcape.vo.ThemeVO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HintServiceImpl implements HintService{

    private final HintDAO hintDAO;

    HintServiceImpl(HintDAO hintDAO){
        this.hintDAO = hintDAO;
    }

    @Override
    public List<HintVO> getHint(String merchantCode, String themeCode) {
        return hintDAO.getHint(merchantCode, themeCode);
    }

    @Override
    public List<MerchantVO> getMerchantList() {
        return hintDAO.getMerchantList();
    }

    @Override
    public void registerHint(HintVO hintVO) {
        String randomKeyValue = RandomKeyValue.randomKey();
        while(isKeyOverlap(randomKeyValue)){
            randomKeyValue = RandomKeyValue.randomKey();
        }
        hintVO.setKey(randomKeyValue);
        hintDAO.registerHint(hintVO);
    }

    @Override
    public void updateHint(HintVO hintVO) {
        hintDAO.updateHint(hintVO);
    }

    @Override
    public List<ThemeVO> getThemeList(String merchantCode) {
        return hintDAO.getThemeList(merchantCode);
    }


    private boolean isKeyOverlap(String key){
        return hintDAO.getHintCount(key) != 0;
    }

    @Override
    public int getHintCount(String key) {
        return hintDAO.getHintCount(key);
    }
}
