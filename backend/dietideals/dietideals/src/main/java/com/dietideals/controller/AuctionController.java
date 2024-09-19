package com.dietideals.controller;

import com.dietideals.dto.AuctionRequest;
import com.dietideals.model.Auction;
import com.dietideals.service.AuctionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auctions")
public class AuctionController {

    private final AuctionService auctionService;

    public AuctionController(AuctionService auctionService) {
        this.auctionService = auctionService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createAuction(@RequestBody AuctionRequest auctionRequest) {
        Auction auction = auctionService.createAuction(auctionRequest);
        return ResponseEntity.ok(auction);
    }

//    @GetMapping("/detail")
//    public ResponseEntity<?> getAuctionDetail(@RequestBody AuctionRequest auctionRequest){
//        Auction auction = auctionService.getDetailAuction(auctionRequest);
//        return ResponseEntity.ok(auction);
//    }
}