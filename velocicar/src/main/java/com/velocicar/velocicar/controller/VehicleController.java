package com.velocicar.velocicar.controller;

import com.velocicar.velocicar.model.Vehicle;
import com.velocicar.velocicar.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    @PostMapping
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
       
        System.out.println("Available: " + vehicle.isAvailable());
        return vehicleRepository.save(vehicle);
    }

    
}
