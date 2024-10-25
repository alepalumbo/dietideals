package com.dietideals.service;

import com.dietideals.model.CategoryEntity;

import java.util.List;

public interface CategoryService {

    List<CategoryEntity> getAllCategories();

    CategoryEntity createCategory(CategoryEntity categoryEntity);

//    @Autowired
//    private CategoryRepository categoryRepository;
//
//    public List<CategoryImp> getAllCategories() {
//        return categoryRepository.findAll();
//    }
//
//    public CategoryImp getCategoryById(Long category_id) {
//        return categoryRepository.findById(category_id).orElse(null);
//    }
}
