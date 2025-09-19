package com.velocicar.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocicar.model.Register;

@RestController
@RequestMapping("/api/auth/register")
@CrossOrigin(origins = "*")

public class RegisterController {

    private List<Register> register = new ArrayList<>();

    @PostMapping
    public Register addRegister(@RequestBody Register register) {
        this.register.add(register);
        return register;
    }


    @GetMapping
    public List<Register> getAllRegisters() {
        return register;
    }

}