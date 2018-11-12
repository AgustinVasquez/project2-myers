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

    MatchDao matchDao;

    @Autowired
    public MatchService(MatchDao matchDao){this.matchDao = matchDao;}

    @Transactional(readOnly = true)
    public Matches getMatches(String myer_id){
        Optional<Matches> u = matchDao.getMatchesByMyerkey(myer_id);

        if(u.isPresent()){
            return u.get();
        }else{
            return null;
        }
    }
}

