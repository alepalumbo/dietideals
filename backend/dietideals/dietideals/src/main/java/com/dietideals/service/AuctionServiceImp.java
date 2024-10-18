//package com.dietideals.service;
//
//import com.dietideals.model.Auction;
//import com.dietideals.repository.AuctionRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuctionServiceImp implements AuctionService {
//
//    @Autowired
//    private AuctionRepository auctionRepository;
//
//    @Override
//    public Auction saveAuction(Auction auction) {
//        return auctionRepository.save(auction);
//    }
//
//    public Auction findAuctionById(Long auctionId) {
//        return auctionRepository.findById(auctionId).orElse(null);
//    }
//
//}
