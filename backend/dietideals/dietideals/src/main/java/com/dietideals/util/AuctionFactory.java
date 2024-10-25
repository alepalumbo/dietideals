package com.dietideals.util;

import com.dietideals.enums.AuctionType;
import com.dietideals.model.AuctionEntity;
import org.springframework.stereotype.Component;

@Component
public interface AuctionFactory {

    AuctionEntity create(AuctionType auctionType) throws ClassNotFoundException;
}
