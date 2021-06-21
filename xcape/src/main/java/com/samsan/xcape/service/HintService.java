package com.samsan.xcape.service;

import com.samsan.xcape.vo.HintVO;

import java.util.List;

public interface HintService {

    List<HintVO> getHint();

    HintVO registerHint(HintVO hintVO);

}
