package com.dietideals.dto;

import com.dietideals.enums.AuctionType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AuctionDto {

    private Long auctionId;

    private Long seller;

    private String title;

    private String description;

    private String condition;

    private Long categoryEntity;

    private double initialPrice;

    private double minimumPrice;

    private LocalDateTime startTime;

    private String status;

    private String auctionImages;

    private String decrementInterval;

    private Double decrementAmount;

    private LocalDateTime endTime;

    private AuctionType auctionType;

}
