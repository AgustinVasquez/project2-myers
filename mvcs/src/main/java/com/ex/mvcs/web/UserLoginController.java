package com.ex.MVCS.web;

import com.ex.MVCS.entities.UserLogin;
import com.ex.MVCS.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

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
