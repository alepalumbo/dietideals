//package com.dietideals.util;
//
//import com.dietideals.dto.AuctionRequest;
//import com.dietideals.model.Auction;
//import org.springframework.stereotype.Component;
//
//@Component
//public class AuctionFactory {
//
//    public static Auction createAuction(AuctionRequest auctionRequest) {
//        Auction auction = new Auction();
//
//        auction.setSellerId(auctionRequest.getSellerId());
//        auction.setTitle(auctionRequest.getTitle());
//        auction.setDescription(auctionRequest.getDescription());
//        auction.setInitialPrice(auctionRequest.getInitialPrice());
//        auction.setMinimumPrice(auctionRequest.getMinimumPrice());
//        auction.setStartTime(auctionRequest.getStartTime());
//        auction.setCondition(auctionRequest.getCondition());
//        auction.setAuctionType(auctionRequest.getAuctionType());
//        auction.setStatus("active");
//
//        if ("fixed_time".equals(auctionRequest.getAuctionType())) {
//            auction.setEndTime(auctionRequest.getEndTime());
//        } else if ("descending_price".equals(auctionRequest.getAuctionType())) {
//            auction.setDecrementAmount(auctionRequest.getDecrementAmount());
//            auction.setDecrementInterval(auctionRequest.getDecrementInterval());
//        }
//
//        return auction;
//    }
//}
