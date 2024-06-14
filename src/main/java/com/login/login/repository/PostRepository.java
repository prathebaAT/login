package com.login.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.login.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
