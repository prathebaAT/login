package com.login.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.login.model.Post;
import com.login.login.repository.PostRepository;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;
     
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    
}
