package com.ex.mvcs.service;

import com.ex.mvcs.data.BlockDao;
import com.ex.mvcs.entities.Blocked;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class BlockService {
    BlockDao dao;

    @Autowired
    public BlockService(BlockDao dao){this.dao = dao;}

    @Transactional(readOnly = true)
    public Blocked getBlocked(int BlockID){
        Optional<Blocked> u =dao.getBlockedByBlockId(BlockID);
        if(u.isPresent()){
            return u.get();
        }else{
            return null;
        }
    }

    @Transactional
    public void addBlocked(Blocked b){
        dao.save(b);
    }
}



