package come.example.WebServicesNeto.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Utils {
	
	public static List<Integer> generaNumberosAzar(int count) {
		Random random = new Random();
		List<Integer> numbers = new ArrayList<>();
		for (int i = 0; i < count; i++) {
			numbers.add(random.nextInt(100));
		}
		return numbers;
	}

}
