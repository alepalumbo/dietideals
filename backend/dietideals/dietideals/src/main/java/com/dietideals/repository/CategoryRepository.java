package com.dietideals.repository;

import com.dietideals.model.CategoryImp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryImp, Long> {
}
