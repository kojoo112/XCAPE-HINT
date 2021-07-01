package com.samsan.xcape.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class HintVO {
    private int seq;
    private String theme;
    private String merchant;
    private String index_of_theme;
    private String key;
    private String message1;
    private String message2;
    private char use;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date create_time;
}
