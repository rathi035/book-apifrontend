package com.example.bookapi.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.bookapi.exception.ResourceNotFoundException;
import com.example.bookapi.entity.Book;
import com.example.bookapi.repository.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository repo;
	
	public List<Book> getAllBooks(){
		return repo.findAll();
	}
	public Book getBook(String isbn) {
	    return repo.findById(isbn)
	            .orElseThrow(() ->
	                new ResourceNotFoundException("Book not found with ISBN: " + isbn));
	}
	public Book addBook(Book book) {
		return repo.save(book);
	}
	public Book updateBook(String isbn,Book updated) {
		Book book = getBook(isbn);
		
		book.setTitle(updated.getTitle());
		book.setAuthor(updated.getAuthor());
		book.setPublicationYear(updated.getPublicationYear());
		
		return repo.save(book);
	}
	public void deleteBook(String isbn) {
		repo.deleteById(isbn);
		
	}

}
