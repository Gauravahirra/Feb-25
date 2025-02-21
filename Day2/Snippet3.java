/*
Snippet 3:  

public class Main { 
    public static int main(String[] args) { 
        System.out.println("Hello, World!"); 
        return 0; 
    }

Error:
The main method is declared with int return type instead of void.
The JVM expects void since it does not return anything.

*/
// Correct code:


public class Snippet3 { 
    public static void main(String[] args) { 
        System.out.println("Hello, World!"); 
    } 
} 
