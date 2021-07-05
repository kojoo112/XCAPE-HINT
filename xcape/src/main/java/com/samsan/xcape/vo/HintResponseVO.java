package com.samsan.xcape.vo;

import lombok.Data;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Data
public class HintResponseVO implements ResponseVO {
    private List<HintVO> hintVOList;

    public HintResponseVO(List<HintVO> hintVOList) {
        this.hintVOList = hintVOList;
    }

    @Override
    public int getTotalCount() { // int totalCount;
        if (CollectionUtils.isEmpty(this.hintVOList)) {
            return 0;
        }

        return this.hintVOList.size();
    }
}
