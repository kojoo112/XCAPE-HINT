package com.samsan.xcape.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface HintMapper {

    List<Map<Object, Object>> getHint();

}
