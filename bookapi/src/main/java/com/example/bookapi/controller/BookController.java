package com.example.bookapi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

import com.example.bookapi.entity.Book;
import com.example.bookapi.service.BookService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/books")
public class BookController {

	   @Autowired
	    private BookService service;
	   
	   @GetMapping
	   public List<Book> getAll(){
		   return service.getAllBooks();
	   }
	   
	   @GetMapping("/{isbn}")
	   public Book getOne(@PathVariable String isbn) {
		   return service.getBook(isbn);
	   }
	   
	   @PostMapping
	   public Book add(@Valid @RequestBody Book book) {
		   return service.addBook(book);
	   }
	   @PutMapping("/{isbn}")
	   public Book update(@PathVariable String isbn,@RequestBody Book book) {
		   return service.updateBook(isbn, book);
	   }
	   @DeleteMapping("/{isbn}")
	   public String delete(@PathVariable String isbn) {
		   service.deleteBook(isbn);
		   return "Deleted successfully";
	   }
}
