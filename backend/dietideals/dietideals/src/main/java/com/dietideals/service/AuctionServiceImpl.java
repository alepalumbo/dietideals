package com.dietideals.service;

import com.dietideals.dto.AuctionRequest;
import com.dietideals.model.Auction;
import com.dietideals.util.AuctionFactory;
import com.dietideals.repository.AuctionRepository;
import org.springframework.stereotype.Service;

@Service
public class AuctionServiceImpl implements AuctionService {

    private final AuctionRepository auctionRepository;

    public AuctionServiceImpl(AuctionRepository auctionRepository) {
        this.auctionRepository = auctionRepository;
    }

    @Override
    public Auction createAuction(AuctionRequest auctionRequest) {
        Auction auction = AuctionFactory.createAuction(auctionRequest);
        return auctionRepository.save(auction);
    }
}
