package com.dietideals.model.impl;

import com.dietideals.model.BidEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "fixed_time_bid")
public class FixedTimeBidEntityEntity extends BidEntity {

    @ManyToOne
    @JoinColumn(name = "auction_id")
    private FixedTimeAuctionEntityEntity auctionId;

}
