package com.samsan.xcape.mapper;

import com.samsan.xcape.vo.HintVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface HintMapper {

    List<HintVO> getHint();

    HintVO registerHint(HintVO hintVO);
}
