/*
Snippet 9:
public class InfiniteForLoopUpdate { 
    public static void main(String[] args) { 
        for (int i = 0; i < 5; i += 2) { 
            System.out.println(i); 
        } 
    } 
} 

Error: The loop does not run infinitely, but it skips values.
Fix: Use `i++` to increment correctly.
*/

// Corrected code:


public class Snippet9 {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}