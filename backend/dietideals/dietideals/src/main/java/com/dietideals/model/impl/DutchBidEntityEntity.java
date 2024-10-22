package com.dietideals.model.impl;

import com.dietideals.model.BidEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "dutch_bid")
public class DutchBidEntityEntity extends BidEntity {

    @ManyToOne
    @JoinColumn(name = "auction_id")
    private DutchAuctionEntityEntity auctionId;

}
