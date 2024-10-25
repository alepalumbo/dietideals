package com.dietideals.service;

import com.dietideals.model.impl.DutchBidEntity;

import java.util.Optional;

public interface DutchBidService {

    DutchBidEntity createBid(DutchBidEntity dutchBidEntity);

    Optional<DutchBidEntity> findOne(Long bidId);

    Optional<DutchBidEntity> findByAuction(Long auctionId);
}
