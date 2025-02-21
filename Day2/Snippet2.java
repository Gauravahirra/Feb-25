/*
Snippet 2:  
public class Main { 
    static void main(String[] args) { 
        System.out.println("Hello, World!"); 
    } 
}

error:
The main method is declared as static void main, but it must be public static void main.
Since the method is not public, the JVM will not recognize it as the entry point
*/

//correct code:


public class Snippet2 { 
    public static void main(String[] args) { 
        System.out.println("Hello, World!"); 
    } 
} 