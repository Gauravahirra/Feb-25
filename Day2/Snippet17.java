/*

Snippet 17:  
public class Main { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 5; 
        int result = a ** b; 
        System.out.println(result); 
    } 
}


error:

** is not a valid operator in Java.


*/

//correct code:


public class Snippet17 { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 5; 
        int result = (int) Math.pow(a, b); 
        System.out.println(result); 
    } 
} 
