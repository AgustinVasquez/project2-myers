package com.ex.MVCS.data;

import com.ex.MVCS.entities.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLoginDao extends JpaRepository<UserLogin, Integer> {
    public Optional<UserLogin> getUserLoginByUsername(String username);
}
