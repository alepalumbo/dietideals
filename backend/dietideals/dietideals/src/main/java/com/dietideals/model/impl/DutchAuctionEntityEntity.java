package com.dietideals.model.impl;

import com.dietideals.model.AuctionEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "dutch_auction")
public class DutchAuctionEntityEntity extends AuctionEntity {

    @Column(name = "decrement_interval")
    private String decrementInterval;

    @Column(name = "decrement_amount")
    private Double decrementAmount;
}
