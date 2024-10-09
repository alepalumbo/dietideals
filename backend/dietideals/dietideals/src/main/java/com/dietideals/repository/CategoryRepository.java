package com.dietideals.repository;

import com.dietideals.model.CategoryImp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryImp, Long> {
    Optional<CategoryImp> findByName(String name);
}
