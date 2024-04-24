package com.ey.CartBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ey.CartBackend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String>{

}
