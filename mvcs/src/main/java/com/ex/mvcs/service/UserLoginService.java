package com.ex.MVCS.service;

import com.ex.MVCS.data.UserLoginDao;
import com.ex.MVCS.entities.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserLoginService {
    UserLoginDao dao;

    @Autowired
    public UserLoginService(UserLoginDao userLoginDao){this.dao = userLoginDao;}

    @Transactional(readOnly = true)
    public UserLogin getUserLogin(String username){
        Optional<UserLogin> u = dao.getUserLoginByUsername(username);

        if(u.isPresent()){
            return u.get();
        } else{
            return null;
        }
    }

    @Transactional
    public Integer addUserLogin(UserLogin u){
        return dao.save(u).getId();
    }

}
