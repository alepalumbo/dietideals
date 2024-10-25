package com.dietideals.service;

import com.dietideals.model.impl.FixedTimeBidEntity;


import java.util.Optional;

public interface FixedTimeBidService {

    FixedTimeBidEntity createBid(FixedTimeBidEntity fixedTimeBidEntity);

    Optional<FixedTimeBidEntity> findOne(Long bidId);

    Optional<FixedTimeBidEntity> findByAuction(Long auctionId);
}
