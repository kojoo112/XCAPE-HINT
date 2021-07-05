package com.samsan.xcape.vo;

import com.samsan.xcape.enums.Merchant;
import lombok.Data;

@Data
public class HintVO {
    private int seq;
    private String theme;
    private Merchant merchant;
    private String theme_code;
    private String theme_name;
    private String index_of_theme;
    private String key;
    private String message1;
    private String message2;
    private char use;
    private String create_time;

    public void setMerchant(String merchantCode) {
        this.merchant = Merchant.getMerchantEnum(merchantCode);
    }
}
