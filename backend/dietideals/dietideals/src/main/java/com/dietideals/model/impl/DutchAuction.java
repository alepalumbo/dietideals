package com.dietideals.model.impl;

import com.dietideals.model.Auction;
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
public class DutchAuction extends Auction {

    @Column(name = "decrement_interval")
    private String decrementInterval;

    @Column(name = "decrement_amount")
    private Double decrementAmount;
}
