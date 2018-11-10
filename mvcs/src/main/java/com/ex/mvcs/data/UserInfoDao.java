package com.ex.mvcs.data;

import com.ex.mvcs.entities.UserInfo;
import com.ex.mvcs.entities.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {
    public Optional<UserInfo> getUserInfoByUserId(Integer id);
}
