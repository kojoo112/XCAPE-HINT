package com.samsan.xcape.controller;

import com.samsan.xcape.service.HintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HintController {

    private HintService hintService;

    @Autowired
    HintController(HintService hintService) {
        this.hintService = hintService;
    }

    @GetMapping("/hint")
    @ResponseBody
    public List<Map<Object, Object>> getHint(){
        return hintService.getHint();
    }

}
