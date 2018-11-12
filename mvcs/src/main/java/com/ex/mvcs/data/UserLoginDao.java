package com.ex.mvcs.data;

import com.ex.mvcs.entities.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *
 * @Author:JustinSmith
 *
 */
@Repository
public interface UserLoginDao extends JpaRepository<UserLogin, Integer> {
    public Optional<UserLogin> getUserLoginByUsername(String username);
}
