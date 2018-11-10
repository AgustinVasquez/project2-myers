package com.ex.MVCS.data;

import com.ex.MVCS.entities.UserInfo;
import com.ex.MVCS.entities.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {
    public Optional<UserInfo> getUserInfoByUserId(Integer id);
}
