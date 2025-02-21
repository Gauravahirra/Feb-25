/*

Snippet 19:  
public class Main { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 0; 
        int result = a / b; 
        System.out.println(result); 
    } 
} 


error:


Division by zero causes ArithmeticException.
*/

//correct code :

public class Snippet19 { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 0; 
        if (b != 0) {
            int result = a / b; 
            System.out.println(result);
        } else {
            System.out.println("Cannot divide by zero");
        }
    } 
} 

