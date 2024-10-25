package com.dietideals.service.impl;

import com.dietideals.model.CategoryEntity;
import com.dietideals.repository.CategoryRepository;
import com.dietideals.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<CategoryEntity> getAllCategories() {
        return List.of();
    }

    @Override
    public CategoryEntity createCategory(CategoryEntity categoryEntity) {
        return null;
    }
}
