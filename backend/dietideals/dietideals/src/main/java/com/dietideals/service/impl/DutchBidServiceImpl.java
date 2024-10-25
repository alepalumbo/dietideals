package com.dietideals.service.impl;

import com.dietideals.model.impl.DutchBidEntity;
import com.dietideals.repository.DutchBidRepository;
import com.dietideals.service.DutchBidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DutchBidServiceImpl implements DutchBidService {

    private DutchBidRepository dutchBidRepository;

    @Autowired
    public DutchBidServiceImpl(DutchBidRepository dutchBidRepository) {
        this.dutchBidRepository = dutchBidRepository;
    }

    @Override
    public DutchBidEntity createBid(DutchBidEntity dutchBidEntity) {
        return null;
    }

    @Override
    public Optional<DutchBidEntity> findOne(Long bidId) {
        return Optional.empty();
    }

    @Override
    public Optional<DutchBidEntity> findByAuction(Long auctionId) {
        return Optional.empty();
    }
}
