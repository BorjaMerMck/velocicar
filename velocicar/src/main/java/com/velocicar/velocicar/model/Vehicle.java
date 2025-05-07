package com.velocicar.velocicar.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String brand;
    private String model;
    private String licensePlate;
    private BigDecimal pricePerDay;
    private boolean available;
    // Getters y setters
}
