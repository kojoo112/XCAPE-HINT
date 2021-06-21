package com.samsan.xcape.service;

import com.samsan.xcape.mapper.HintMapper;
import com.samsan.xcape.vo.HintVO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HintServiceImpl implements HintService{

    private HintMapper hintMapper;

    HintServiceImpl(HintMapper hintMapper){
        this.hintMapper = hintMapper;
    }

    @Override
    public List<HintVO> getHint() {
        return hintMapper.getHint();
    }

    @Override
    public HintVO registerHint(HintVO hintVO) {
        return hintMapper.registerHint(hintVO);
    }
}
