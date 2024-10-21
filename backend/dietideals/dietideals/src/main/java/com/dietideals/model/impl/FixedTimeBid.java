package com.dietideals.model.impl;

import com.dietideals.model.Bid;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "fixed_time_bid")
public class FixedTimeBid extends Bid {

    @ManyToOne
    @JoinColumn(name = "auction_id")
    private FixedTimeAuction auctionId;

}
