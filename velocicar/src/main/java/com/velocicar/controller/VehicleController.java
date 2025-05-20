package com.velocicar.controller;

import com.velocicar.model.Vehicle;
import com.velocicar.repository.VehicleRepository;
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
        System.out.println("📦 Vehículo recibido en POST:");
        System.out.println("Type: " + vehicle.getType());
        System.out.println("Brand: " + vehicle.getBrand());
        System.out.println("Model: " + vehicle.getModel());
        System.out.println("License Plate: " + vehicle.getLicensePlate());
        System.out.println("Price Per Day: " + vehicle.getPricePerDay());
        System.out.println("Available: " + vehicle.isAvailable());
        return vehicleRepository.save(vehicle);
    }

    
}
