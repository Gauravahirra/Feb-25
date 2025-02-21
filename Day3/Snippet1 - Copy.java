/*
Snippet 1:  
public class InfiniteForLoop { 
    public static void main(String[] args) { 
        for (int i = 0; i < 10; i--) { 
            System.out.println(i); 
        } 
    } 
} 

Error: The loop condition `i < 10` is never false because `i` is decrementing (`i--`) instead of incrementing.
Fix: Change `i--` to `i++` so that it eventually reaches 10 and exits the loop.
*/

// Corrected code:
public class Snippet1 {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
    }
}