package com.example.bookapi.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "books")
public class Book {
	@Id
	private String isbn;
	
	@NotBlank(message = "Title cannot be empty")
	private String title;
	
	@NotBlank(message = "Author cannot be empty")
	private String author;
	
	@Min(value = 1000,message = "Year must be valid")
	@Max(value = 9999,message = "Year must be valid")
	private int publicationYear;
	
	public Book() {
		
	}
	public Book(String isbn,String title,String author,int publicationYear) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
	}
	
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}

    public int getPublicationYear() {
    	return publicationYear;
    }
    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }
}
