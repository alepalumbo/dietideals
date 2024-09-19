package com.dietideals.util;

import com.dietideals.dto.AuctionRequest;
import com.dietideals.model.Auction;
import com.dietideals.model.FixedTimeAuction;
import com.dietideals.model.DescendingPriceAuction;

public class AuctionFactory {
    public static Auction createAuction(AuctionRequest auctionRequest) {
        if ("fixed_time".equalsIgnoreCase(auctionRequest.getAuctionType())) {
            FixedTimeAuction auction = new FixedTimeAuction();
            auction.setMinimumPrice(auctionRequest.getMinimumPrice());

            return auction;
        } else if ("descending_price".equalsIgnoreCase(auctionRequest.getAuctionType())) {
            DescendingPriceAuction auction = new DescendingPriceAuction();
            auction.setInitialPrice(auctionRequest.getInitialPrice());
            auction.setDecrementInterval(auctionRequest.getDecrementInterval());
            auction.setDecrementAmount(auctionRequest.getDecrementAmount());
            auction.setMinimumPrice(auctionRequest.getMinimumPrice());

            return auction;
        }
        throw new IllegalArgumentException("Tipo di asta non valido");
    }
}
