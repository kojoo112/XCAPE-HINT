package com.samsan.xcape.controller;

import com.samsan.xcape.enums.Merchant;
import com.samsan.xcape.service.HintService;
import com.samsan.xcape.vo.HintResponseVO;
import com.samsan.xcape.vo.HintVO;
import com.samsan.xcape.vo.MerchantVO;
import com.samsan.xcape.vo.ThemeVO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HintController {

    private HintService hintService;

    HintController(HintService hintService) {
        this.hintService = hintService;
    }

    @GetMapping("/theme/list")
    @ResponseBody
    public List<ThemeVO> getThemeList(String merchantCode){
        List<ThemeVO> themeVOList = hintService.getThemeList(merchantCode);
        return themeVOList;
    }

    @GetMapping("/merchant/list")
    @ResponseBody
    public List<MerchantVO> getMerchantList(){
        List<MerchantVO> merchantVOList = hintService.getMerchantList();
        return merchantVOList;
    }

    @GetMapping("/getHint")
    @ResponseBody
    public List<HintVO> getHint(String merchantCode, String themeCode){
        List<HintVO> hintVOList = hintService.getHint(merchantCode, themeCode);
        return hintVOList;
    }

    @PostMapping("/registerHint")
    public HintVO registerHint(@RequestBody HintVO hintVO){
        return hintService.registerHint(hintVO);
    }

    @PutMapping("/updateHint")
    public HintVO updateHint(@RequestBody HintVO hintVO){
        return hintService.updateHint(hintVO);
    }
}
