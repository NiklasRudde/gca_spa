package lab3.gca_spa;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CarsController {
    private final CarRepository repository;

    public CarsController (CarRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cool-cars")
    public Collection<Car> coolCars() {
        return repository.findAll().stream().filter(this::isCool).collect(Collectors.toList());
    }

    @GetMapping("/cars")
    public Collection<Car> allCars() {
        return repository.findAll();
    }

    @GetMapping("/car/{id}")
    public Car oneCar(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new CarNotFoundException(id));
    }

    @PostMapping("/car")
    public void addCar(@RequestBody Car car) {
        if (car.getName().equals("")) {
            throw new CarNotFoundException(999L);
        }

        repository.save(car);
    }

    @DeleteMapping("/car/{id}")
    void deleteCar(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PutMapping("/car/{id}")
    Car replaceCar(@RequestBody Car newCar, @PathVariable Long id) {
        return repository.findById(id)
                .map(Car -> {
                    Car.setName(newCar.getName());
                    return repository.save(Car);
                })
                .orElseThrow(() -> new CarNotFoundException(id));
    }

    private boolean isCool(Car car) {
        return car.getName().equals("Audi") ||
                car.getName().equals("BMW") ||
                car.getName().equals("Porsche") ||
                car.getName().equals("Volkswagen");
    }
}
