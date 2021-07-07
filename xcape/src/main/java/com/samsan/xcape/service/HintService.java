package com.samsan.xcape.service;

import com.samsan.xcape.vo.HintVO;
import com.samsan.xcape.vo.MerchantVO;
import com.samsan.xcape.vo.ThemeVO;

import java.util.List;

public interface HintService {

    List<HintVO> getHint(String merchantCode, String themeCode);

    List<MerchantVO> getMerchantList();

    void registerHint(HintVO hintVO);

    void updateHint(HintVO hintVO);

    List<ThemeVO> getThemeList(String merchantCode);

    int getHintCount(String key);
}
