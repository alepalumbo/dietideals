package com.dietideals.controller;

import com.dietideals.dto.AuctionRequest;
import com.dietideals.model.Auction;
import com.dietideals.service.AuctionService;
import com.dietideals.util.AuctionFactory;
import com.dietideals.repository.CategoryRepository;
import com.dietideals.model.CategoryImp;
import com.dietideals.repository.AuctionCategoryRepository;
import com.dietideals.model.AuctionCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auctions")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private AuctionFactory auctionFactory;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AuctionCategoryRepository auctionCategoryRepository;

    @PostMapping("/create")
    public ResponseEntity<Object> createAuction(@RequestBody AuctionRequest auctionRequest) {
        // Recupera l'ID della categoria dal nome
        Optional<CategoryImp> category = categoryRepository.findByName(auctionRequest.getCategory());
        if (!category.isPresent()) {
            return ResponseEntity.badRequest().body("Categoria non valida");
        }

        // Factory Method per la creazione delle aste
        Auction auction = auctionFactory.createAuction(auctionRequest);

        // Salva l'asta
        Auction savedAuction = auctionService.saveAuction(auction);

        // Associazione dell'asta con la categoria
        AuctionCategory auctionCategory = new AuctionCategory(savedAuction.getAuctionId(), category.get().getId());
        auctionCategoryRepository.save(auctionCategory);

        return ResponseEntity.ok("Asta creata con successo");
    }
}
