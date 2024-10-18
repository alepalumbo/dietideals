package com.dietideals.model.impl;

import com.dietideals.model.Auction;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "fixed_auction")
public class FixedTimeAuction extends Auction {

    @Column(name = "end_time")
    protected LocalDateTime endTime;
}
