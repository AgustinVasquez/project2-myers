package com.ex.MVCS.service;

import com.ex.MVCS.data.UserInfoDao;
import com.ex.MVCS.entities.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserInfoService {
    UserInfoDao dao;

    @Autowired
    public UserInfoService(UserInfoDao dao){this.dao = dao;}

    @Transactional(readOnly = true)
    public UserInfo getUserInfo(Integer id){
        Optional<UserInfo> u = dao.getUserInfoByUserId(id);

        if(u.isPresent()){
            return u.get();
        } else{
            return null;
        }
    }

    @Transactional(readOnly = true)
    public void addUserInfo(UserInfo u){
        dao.save(u);
    }
}
