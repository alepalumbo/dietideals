package com.dietideals.service.impl;

import com.dietideals.model.impl.FixedTimeAuctionEntity;
import com.dietideals.repository.FixedTimeAuctionRepository;
import com.dietideals.service.FixedTimeAuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FixedTimeAuctionServiceImpl implements FixedTimeAuctionService {

    private FixedTimeAuctionRepository fixedTimeAuctionRepository;

    @Autowired
    public FixedTimeAuctionServiceImpl(FixedTimeAuctionRepository fixedTimeAuctionRepository) {
        this.fixedTimeAuctionRepository = fixedTimeAuctionRepository;
    }


    @Override
    public FixedTimeAuctionEntity createAuction(FixedTimeAuctionEntity fixedTimeAuctionEntity) {
        return null;
    }

    @Override
    public Optional<FixedTimeAuctionEntity> findAuctionById(Long auctionId) {
        return Optional.empty();
    }

    @Override
    public FixedTimeAuctionEntity partialUpdate(Long auctioId, FixedTimeAuctionEntity fixedTimeAuctionEntity) {
        return null;
    }

    @Override
    public List<FixedTimeAuctionEntity> getByCategory(Long categoryId) {
        return List.of();
    }
}
