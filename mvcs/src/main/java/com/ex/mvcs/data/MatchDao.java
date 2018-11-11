package com.ex.mvcs.data;
import com.ex.mvcs.entities.Matches;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface MatchDao extends JpaRepository<Matches,Integer>{
    public Optional<Matches> getMatchesByMyer_id(String Myer);
}
