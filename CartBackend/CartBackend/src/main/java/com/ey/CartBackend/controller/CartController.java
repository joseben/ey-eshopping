package com.ey.CartBackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ey.CartBackend.exception.ResourceNotFoundException;
import com.ey.CartBackend.model.CustQtyOnly;
import com.ey.CartBackend.model.Product;
import com.ey.CartBackend.repository.CustQtyRepository;
import com.ey.CartBackend.repository.ProductRepository;


@CrossOrigin(origins = "http://localhost:3000")//--> to connect react
@RestController
@RequestMapping("/api/v1/")   //http://localhost:8085/api/v1/

public class CartController {

	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
    // create product rest api
	@PostMapping("/products")
	public Product createProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateEmployee(@PathVariable String id, @RequestBody Product productDetails){
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		product.setBookID(productDetails.getBookID());
		//product.setBookName(productDetails.getBookName());
		product.setCustQty(productDetails.getCustQty());
		//product.setTotalQty(productDetails.getTotalQty());
		//product.setPrice(productDetails.getPrice());
		
		Product updatedEmployee = productRepository.save(product);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	//updating only the customer Quantity
//	@PatchMapping("/products/{id}")
//	public ResponseEntity<?> partialUpdateCustQty(
//	  @RequestBody Map<String, String> updates, @PathVariable("id") String id) {
//	    
//	    if(updates.containsKey("CustQty")) {
//	    	productRepository.updateCustQty(id, updates.get("CustQty"));
//	        return ResponseEntity.ok("CustQty updated");
//	    }
//	    return ResponseEntity.badRequest().body("CustQty not provided");
//	}
	
	//updating only the customer Quantity
	@PatchMapping("/products/{id}")
	public ResponseEntity<?> partialUpdateName(
	  @RequestBody CustQtyOnly partialUpdate, @PathVariable("id") String id) {
	    
		CustQtyRepository.save(partialUpdate);
	    return ResponseEntity.ok("resource address updated");
	}
	
	
	// delete product rest api
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable String id){
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
