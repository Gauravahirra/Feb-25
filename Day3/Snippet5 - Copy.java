/*
Snippet 5:
public class WrongInitializationForLoop { 
    public static void main(String[] args) { 
        for (int i = 10; i >= 0; i++) { 
            System.out.println(i); 
        } 
    } 
} 

Error: `i++` is increasing instead of decreasing, causing an infinite loop.
Fix: Change `i++` to `i--` to count down from 10 to 0.
*/

// Corrected code:




public class Snippet5 {
    public static void main(String[] args) {
        for (int i = 10; i >= 0; i--) {
            System.out.println(i);
        }
    }
}