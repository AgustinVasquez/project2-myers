package com.ex.mvcs.data;
import com.ex.mvcs.entities.Blocked;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface BlockDao extends JpaRepository<Blocked,Integer>{
    public Optional<Blocked> getBlockedByBlockId(int blockId);
}