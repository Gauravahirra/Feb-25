/* Write a Java program to demonstrate the use of both pre-increment and post-decrement 
operators in a single expression */


public class Sec3Q11{
    public static void main(String[] args) {
        int a = 5, b = 10;
        
        int result = ++a + b--;
        
        System.out.println("Value of a after pre-increment: " + a);
        System.out.println("Value of b after post-decrement: " + b);
        System.out.println("Result of the expression (++a + b--): " + result);
    }
}