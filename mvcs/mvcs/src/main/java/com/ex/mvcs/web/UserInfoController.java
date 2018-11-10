package com.ex.MVCS.web;

import com.ex.MVCS.entities.UserLogin;
import com.ex.MVCS.service.UserInfoService;
import com.ex.MVCS.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("userlogin-api")
public class UserInfoController {
    UserInfoService service;

    @Autowired
    public UserInfoController(UserInfoService service){this.service = service;}


}
