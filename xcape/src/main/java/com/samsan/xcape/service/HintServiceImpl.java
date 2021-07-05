package com.samsan.xcape.service;

import com.samsan.xcape.dao.HintDAO;
import com.samsan.xcape.enums.Merchant;
import com.samsan.xcape.vo.HintVO;
import com.samsan.xcape.vo.MerchantVO;
import com.samsan.xcape.vo.ThemeVO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HintServiceImpl implements HintService{

    private HintDAO hintDAO;

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
    public HintVO registerHint(HintVO hintVO) {
        return hintDAO.registerHint(hintVO);
    }

    @Override
    public HintVO updateHint(HintVO hintVO) {
        return hintDAO.updateHint(hintVO);
    }

    @Override
    public List<ThemeVO> getThemeList(String merchantCode) {
        return hintDAO.getThemeList(merchantCode);
    }
}
