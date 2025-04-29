package com.recibos.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Permitir llamadas de tu frontend
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Aquí hacemos la validación simple
        if ("admin".equals(loginRequest.getUsername()) && "password123".equals(loginRequest.getPassword())) {
            return "Login exitoso";
        } else {
            throw new RuntimeException("Credenciales inválidas");
        }
    }

    // Clase interna para recibir JSON del frontend
    public static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }
}
