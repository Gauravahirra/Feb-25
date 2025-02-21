/*
Snippet 11:
public class IncorrectLoopUpdate { 
    public static void main(String[] args) { 
        int i = 0; 
        while (i < 5) { 
            System.out.println(i); 
            i += 2; 
        } 
    } 
} 

Error: The loop increments `i` by 2, skipping numbers.
Fix: Change `i += 2` to `i++` for sequential counting.
*/

// Corrected code:


public class Snippet11 {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            System.out.println(i);
            i++;
        }
    }
}