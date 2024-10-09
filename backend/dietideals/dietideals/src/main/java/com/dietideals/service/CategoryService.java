package com.dietideals.service;

import com.dietideals.model.CategoryImp;
import com.dietideals.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryImp> getAllCategories() {
        return categoryRepository.findAll();
    }
}
