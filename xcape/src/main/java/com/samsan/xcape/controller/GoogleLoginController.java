package com.samsan.xcape.controller;

import com.samsan.xcape.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
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
    public String googleLogin(String idtoken, HttpServletRequest request, HttpServletResponse response) throws GeneralSecurityException, IOException {
        String result = userService.googleLogin(idtoken, request, response);
        response.setHeader("Location", "http://localhost:8080/main");
        response.setStatus(302);
//        HttpHeaders header = new HttpHeaders();
//        header.add("Location", "/main");
//        header
        return result;
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){
        session.invalidate();
    }
}
