package com.samsan.xcape.service;

import com.samsan.xcape.mapper.HintMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HintServiceImpl implements HintService{

    private HintMapper hintMapper;

    @Autowired
    HintServiceImpl(HintMapper hintMapper){
        this.hintMapper = hintMapper;
    }

    @Override
    public List<Map<Object, Object>> getHint() {
        return hintMapper.getHint();
    }
}
