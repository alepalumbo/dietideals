package com.dietideals.service;

import com.dietideals.model.impl.FixedTimeAuctionEntity;

import java.util.List;
import java.util.Optional;

public interface FixedTimeAuctionService {

    FixedTimeAuctionEntity createAuction(FixedTimeAuctionEntity fixedTimeAuctionEntity);

    Optional<FixedTimeAuctionEntity> findAuctionById(Long auctionId);

    FixedTimeAuctionEntity partialUpdate(Long auctioId, FixedTimeAuctionEntity fixedTimeAuctionEntity);

    List<FixedTimeAuctionEntity> getByCategory(Long categoryId);

}
