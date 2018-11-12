package com.ex.mvcs.web;

import com.ex.mvcs.entities.UserInfo;
import com.ex.mvcs.entities.UserLogin;
import com.ex.mvcs.service.UserInfoService;
import com.ex.mvcs.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

/**
 * @Author Justin Smith
 * Controller to handle the User Authentication
 */
@RestController
@RequestMapping("/userlogin-api")
public class UserLoginController {
    UserLoginService service;

    @Autowired
    UserLoginController(UserLoginService service){this.service = service;}

    /**
     * @Author Justin Smith
     * @param UserLogin uAuth
     * @return user_id | null
     */
    @PostMapping(value = "/auth")
    public Integer authenticateUser(@RequestBody UserLogin uAuth){
        UserLogin u = service.getUserLogin(uAuth.getUsername());

        if (u != null){
            u.setPassword(u.getPassword().trim());
            if(u.getPassword().equals(uAuth.getPassword())){
                return u.getId();
            }
        }
        return null;
    }

    /**
     * @Author Justin Smith
     * @param UserLogin uAuth
     * @return user_id
     */
    @PostMapping(value = "/userlogin")
    public Integer addNewUser(@RequestBody UserLogin uAuth){
        return service.addUserLogin(uAuth);
    }
}
