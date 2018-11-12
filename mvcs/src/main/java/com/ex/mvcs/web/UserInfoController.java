package com.ex.mvcs.web;

import com.ex.mvcs.entities.UserLogin;
import com.ex.mvcs.service.UserInfoService;
import com.ex.mvcs.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

/**
 *
 * @Author:JustinSmith
 *
 */
@RestController
@RequestMapping("userlogin-api")
public class UserInfoController {
    UserInfoService service;

    @Autowired
    public UserInfoController(UserInfoService service){this.service = service;}


}
