package com.dietideals.service.impl;

import com.dietideals.model.impl.FixedTimeBidEntity;
import com.dietideals.repository.FixedTimeBidRepository;
import com.dietideals.service.FixedTimeBidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FixedTimeBidServiceImpl implements FixedTimeBidService {

    private FixedTimeBidRepository fixedTimeBidRepository;

    @Autowired
    public FixedTimeBidServiceImpl(FixedTimeBidRepository fixedTimeBidRepository) {
        this.fixedTimeBidRepository = fixedTimeBidRepository;
    }

    @Override
    public FixedTimeBidEntity createBid(FixedTimeBidEntity fixedTimeBidEntity) {
        return null;
    }

    @Override
    public Optional<FixedTimeBidEntity> findOne(Long bidId) {
        return Optional.empty();
    }

    @Override
    public Optional<FixedTimeBidEntity> findByAuction(Long auctionId) {
        return Optional.empty();
    }
}
