package com.example.bookapi.controller;

import com.example.bookapi.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String,String> request){

        String username =
                request.get("username");

        String password =
                request.get("password");

        // temporary login credentials
        if(username.equals("rathi")
                && password.equals("R@th!123")){

            String token =
                    jwtUtil.generateToken(
                            username
                    );

            return ResponseEntity.ok(
                    Map.of(
                            "token",
                            token,
                            "username",
                            username
                    )
            );
        }

        return ResponseEntity
                .status(401)
                .body(
                        Map.of(
                                "message",
                                "Invalid username or password"
                        )
                );
    }

}