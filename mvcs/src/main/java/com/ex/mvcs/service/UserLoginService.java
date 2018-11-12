package com.ex.mvcs.service;

import com.ex.mvcs.data.UserLoginDao;
import com.ex.mvcs.entities.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


/**
 *
 * @Author:JustinSmith
 *
 */
@Service
@Transactional
public class UserLoginService {
    UserLoginDao userLoginDao;

    @Autowired
    public UserLoginService(UserLoginDao userLoginDao){this.userLoginDao = userLoginDao;}

    @Transactional(readOnly = true)
    public UserLogin getUserLogin(String username){
        Optional<UserLogin> u = userLoginDao.getUserLoginByUsername(username);

        if(u.isPresent()){
            return u.get();
        } else{
            return null;
        }
    }

    @Transactional
    public Integer addUserLogin(UserLogin u){
        return userLoginDao.save(u).getId();
    }

}
