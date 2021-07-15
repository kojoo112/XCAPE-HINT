package com.samsan.xcape.controller;

import com.samsan.xcape.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.security.GeneralSecurityException;

@Controller
@Log4j2
public class GoogleLoginCotroller {

    private UserService userService;

    public GoogleLoginCotroller(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/googleLogin")
    @ResponseBody
    public String googleLogin(String idtoken) throws GeneralSecurityException, IOException {
        String reslut = userService.googleLogin(idtoken);
        return reslut;
    }
}
