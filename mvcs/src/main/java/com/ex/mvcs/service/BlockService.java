package com.ex.mvcs.service;

import com.ex.mvcs.data.BlockDao;
import com.ex.mvcs.entities.Blocked;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 *
 * @Author:AgustinVasquez
 *
 */
@Service
@Transactional
public class BlockService {
    BlockDao blockDao;

    @Autowired
    public BlockService(BlockDao blockDao){this.blockDao = blockDao;}

    @Transactional(readOnly = true)
    public Blocked getBlocked(int BlockID){
        Optional<Blocked> u =blockDao.getBlockedByBlockId(BlockID);
        if(u.isPresent()){
            return u.get();
        }else{
            return null;
        }
    }

    @Transactional
    public void addBlocked(Blocked b){
        blockDao.save(b);
    }
}



