package com.dietideals.service;

import com.dietideals.dto.AuctionRequest;
import com.dietideals.model.Auction;

public interface AuctionService {
    Auction createAuction(AuctionRequest auctionRequest);
}
