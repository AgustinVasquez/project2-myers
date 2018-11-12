package com.ex.mvcs.web;

import com.ex.mvcs.entities.Matches;
import com.ex.mvcs.entities.UserInfo;
import com.ex.mvcs.service.MatchService;
import com.ex.mvcs.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @Author Justin Smith
 * Controller to handle the User Information
 */
@RestController
@RequestMapping("userinfo-api")
public class UserInfoController {
    UserInfoService service;
    @Autowired
    MatchService mService;

    @Autowired
    public UserInfoController(UserInfoService service){this.service = service;}

    /**
     * @Author Justin Smith
     * @param user_id id
     * @return UserInfo user
     */
    @GetMapping(value = "/userinfo/{id}")
    public UserInfo getUserById(@PathVariable Integer id){
        return service.getUserInfo(id);
    }

    /**
     * @Author Justin Smith
     * @param myer
     * @return ArrayList<UserInfo> uMatches an array of matched users
     */
    @GetMapping(value = "usermatches/{myer}")
    public ArrayList<UserInfo> getUsersByMatches(@PathVariable String myer){
        Matches m = mService.getMatches(myer);
        ArrayList<UserInfo> uMatches = new ArrayList<>();
        for(String s: m.getMatchArray()){
            for(UserInfo u: service.getMatchUsers(s)){
                uMatches.add(u);
            }
        }
        return uMatches;
    }

    /**
     * @Author Justin Smith
     * @param UserInfo u information to be saved / updated about the User
     */
    @PutMapping(value = "/save")
    public void saveUser(UserInfo u){
        service.addUserInfo(u);
    }
}
