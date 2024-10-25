package com.dietideals.service.impl;

import com.dietideals.model.impl.DutchAuctionEntity;
import com.dietideals.repository.DutchAuctionRepository;
import com.dietideals.service.DutchAuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DutchAuctionServiceImpl implements DutchAuctionService {

    private DutchAuctionRepository dutchAuctionRepository;

    @Autowired
    public DutchAuctionServiceImpl(DutchAuctionRepository dutchAuctionRepository) {
        this.dutchAuctionRepository = dutchAuctionRepository;
    }

    @Override
    public DutchAuctionEntity createAuction(DutchAuctionEntity dutchAuctionEntity) {
        return null;
    }

    @Override
    public Optional<DutchAuctionEntity> findAuctionById(Long auctionId) {
        return Optional.empty();
    }

    @Override
    public DutchAuctionEntity partialUpdate(Long auctioId, DutchAuctionEntity dutchAuctionEntity) {
        return null;
    }

    @Override
    public List<DutchAuctionEntity> getByCategory(Long categoryId) {
        return List.of();
    }
}
