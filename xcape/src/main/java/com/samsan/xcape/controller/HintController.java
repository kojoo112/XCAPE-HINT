package com.samsan.xcape.controller;

import com.samsan.xcape.service.HintService;
import com.samsan.xcape.vo.HintVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class HintController {

    private HintService hintService;

    HintController(HintService hintService) {
        this.hintService = hintService;
    }

    @GetMapping("/hint")
    @ResponseBody
    public List<HintVO> getHint(){
        return hintService.getHint();
    }

    @PostMapping("/registerHint")
    public HintVO registerHint(@RequestBody HintVO hintVO){
        return hintService.registerHint(hintVO);
    }

}
