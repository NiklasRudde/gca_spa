package lab3.gca_spa;

public class CarNotFoundException  extends RuntimeException {
    CarNotFoundException(Long id) {
        super("Could not find employee " + id);
    }
}