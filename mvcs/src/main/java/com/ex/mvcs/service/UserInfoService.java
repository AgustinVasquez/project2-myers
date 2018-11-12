package com.ex.mvcs.service;

import com.ex.mvcs.data.UserInfoDao;
import com.ex.mvcs.entities.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Optional;

/**
 * @Author
 */
@Service
@Transactional
public class UserInfoService {
    UserInfoDao dao;

    @Autowired
    public UserInfoService(UserInfoDao dao){this.dao = dao;}

    @Transactional(readOnly = true)
    public UserInfo getUserInfo(Integer authId){
        Optional<UserInfo> u = dao.findById(authId);
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

    @Transactional
    public ArrayList<UserInfo> getMatchUsers(String Myer){

            Optional<ArrayList<UserInfo>> u =dao.getAllByMyers(Myer);
            if(u.isPresent()){
                return u.get();
            }else{
                return null;
            }
    }
}
