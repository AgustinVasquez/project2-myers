package com.ex.mvcs.web;


import com.ex.mvcs.entities.UserInfo;
import com.ex.mvcs.entities.UserLogin;
import com.ex.mvcs.service.UserInfoService;
import com.ex.mvcs.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/userlogin-api")
public class UserLoginController {
    UserLoginService service;

    @Autowired
    UserLoginController(UserLoginService service){this.service = service;}

    @PostMapping(value = "/auth", consumes="application/json")
    public Integer authenticateUser(@RequestBody UserLogin uAuth){
        UserLogin u = service.getUserLogin(uAuth.getUsername());
        u.setPassword(u.getPassword().trim());

        if (u != null){
            if(u.getPassword().equals(uAuth.getPassword())){
                return u.getId();
            }
        }
        return null;
    }

    @PostMapping(value = "/userlogin", consumes="application/json")
    public boolean addNewUser(@RequestBody UserLogin uAuth){
        System.out.println(uAuth);
        service.addUserLogin(uAuth);
        return true;
    }
}
