//Write a program to find and print the largest digit in the number 4825. 


public class Sec3Q9{
    public static void main(String[] args) {
        int number = 4825;
        int largestDigit = 0;
        
        while (number > 0) {
            int digit = number % 10;
            if (digit > largestDigit) {
                largestDigit = digit;
            }
            number /= 10;
        }
        
        System.out.println("The largest digit in 4825 is: " + largestDigit);
    }
}
