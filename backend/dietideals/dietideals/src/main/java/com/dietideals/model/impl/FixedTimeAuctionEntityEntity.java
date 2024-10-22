package com.dietideals.model.impl;

import com.dietideals.model.AuctionEntity;
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
public class FixedTimeAuctionEntityEntity extends AuctionEntity {

    @Column(name = "end_time")
    private LocalDateTime endTime;
}
