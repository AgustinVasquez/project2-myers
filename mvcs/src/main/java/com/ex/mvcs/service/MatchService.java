package com.ex.mvcs.service;


import com.ex.mvcs.data.MatchDao;
import com.ex.mvcs.entities.Matches;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
@Transactional
public class MatchService {

    MatchDao dao;

    @Autowired
    public MatchService(MatchDao dao){this.dao = dao;}

    @Transactional(readOnly = true)
    public Matches getMatches(String Myer){
        Optional<Matches> u = dao.getMatchesByMyer_id(Myer);

        if(u.isPresent()){
            return u.get();
        }else{
            return null;
        }
    }
}

