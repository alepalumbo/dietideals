package com.dietideals.model;

import jakarta.persistence.*;

@Entity
@Table(name = "fixed_time_auctions")
public class FixedTimeAuction extends Auction {
    private double minimumPrice;

    public double getMinimumPrice() {
        return minimumPrice;
    }

    public void setMinimumPrice(double minimumPrice) {
        this.minimumPrice = minimumPrice;
    }
}
