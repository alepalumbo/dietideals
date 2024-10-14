package com.dietideals.service;

import com.dietideals.model.Auction;


public interface AuctionService {
    Auction saveAuction(Auction auction);
    Auction findAuctionById(Long auctionId);
}
