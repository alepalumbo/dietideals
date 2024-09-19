package com.dietideals.model;

import jakarta.persistence.*;
import java.time.Duration;

@Entity
@Table(name = "descending_price_auctions")
public class DescendingPriceAuction extends Auction {
    private double initialPrice;
    private Duration decrementInterval;
    private double decrementAmount;
    private double minimumPrice;


    public double getInitialPrice() {
        return initialPrice;
    }

    public void setInitialPrice(double initialPrice) {
        this.initialPrice = initialPrice;
    }

    public Duration getDecrementInterval() {
        return decrementInterval;
    }

    public void setDecrementInterval(Duration decrementInterval) {
        this.decrementInterval = decrementInterval;
    }

    public double getDecrementAmount() {
        return decrementAmount;
    }

    public void setDecrementAmount(double decrementAmount) {
        this.decrementAmount = decrementAmount;
    }

    public double getMinimumPrice() {
        return minimumPrice;
    }

    public void setMinimumPrice(double minimumPrice) {
        this.minimumPrice = minimumPrice;
    }
}
