package com.samsan.xcape.dao;

import com.samsan.xcape.vo.HintVO;
import com.samsan.xcape.vo.MerchantVO;
import com.samsan.xcape.vo.ThemeVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface HintDAO {

    List<HintVO> getHint(String merchantCode, String themeCode);

    List<MerchantVO> getMerchantList();

    void registerHint(HintVO hintVO);

    void updateHint(HintVO hintVO);

    List<ThemeVO> getThemeList(String merchantCode);

    int getHintCount(String key);
}
