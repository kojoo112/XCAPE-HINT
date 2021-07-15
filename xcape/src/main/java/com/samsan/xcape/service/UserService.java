package com.samsan.xcape.service;

import com.samsan.xcape.vo.UserVO;

import java.io.IOException;
import java.security.GeneralSecurityException;

public interface UserService {

    public int getUserCount(String email);

    public void signUp(UserVO userVO);

    public String googleLogin(String idtoken) throws GeneralSecurityException, IOException;

    public UserVO findUserByEmail(String email);
}
