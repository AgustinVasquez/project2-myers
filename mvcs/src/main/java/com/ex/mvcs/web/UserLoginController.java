package com.ex.mvcs.web;

import com.ex.mvcs.entities.UserLogin;
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
public class UserLoginController {
    UserLoginService service;

    @Autowired
    UserLoginController(UserLoginService service){this.service = service;}

    @PostMapping(value = "/auth", consumes="application/json")
    public boolean authenticateUser(@RequestBody UserLogin uAuth){
        UserLogin u = service.getUserLogin(uAuth.getUsername());

        if (u != null){
            if(u.getPassword().equals(uAuth.getPassword())){
                return true;
            }
        }
        return false;
    }

    @PostMapping(value = "/create", consumes="application/json")
    public Integer addNewUser(@RequestBody UserLogin uAuth){
        System.out.println(uAuth);
        return service.addUserLogin(uAuth);
    }
}
