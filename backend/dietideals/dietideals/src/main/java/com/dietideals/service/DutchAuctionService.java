package com.dietideals.service;

import com.dietideals.model.impl.DutchAuctionEntity;
import com.dietideals.model.impl.FixedTimeAuctionEntity;

import java.util.List;
import java.util.Optional;

public interface DutchAuctionService {

    DutchAuctionEntity createAuction(DutchAuctionEntity dutchAuctionEntity);

    Optional<DutchAuctionEntity> findAuctionById(Long auctionId);

    DutchAuctionEntity partialUpdate(Long auctioId, DutchAuctionEntity dutchAuctionEntity);

    List<DutchAuctionEntity> getByCategory(Long categoryId);
}
