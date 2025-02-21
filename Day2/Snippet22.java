/*

Snippet 22:  
public class Main { 
    public static void main(String[] args) { 
        static void displayMessage() { 
            System.out.println("Message"); 
        } 
    } 
} 


Error:
Illegal start of expression

Explanation:
A method cannot be declared inside another method in Java. The displayMessage() method must be moved outside main().

*/

//correct code:

public class Snippet22 { 
    public static void displayMessage() { 
        System.out.println("Message"); 
    }

    public static void main(String[] args) { 
        displayMessage();
    } 
} 
