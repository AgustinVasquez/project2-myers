package com.ex.mvcs.data;

import com.ex.mvcs.entities.UserInfo;
import com.ex.mvcs.entities.UserLogin;
import com.ex.mvcs.entities.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.Optional;

/**
 * @Author:JustinSmith
 * @Author:AgustinVasquez
 *
 */
@Repository
public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {
    public Optional<UserInfo> getUserInfoByUserId(Integer id);
    public Optional<ArrayList<UserInfo>> getUserInfoByMyers(String Myer);
}
