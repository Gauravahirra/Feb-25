/*
Snippet 4:
public class OffByOneErrorForLoop { 
    public static void main(String[] args) { 
        for (int i = 1; i <= 10; i++) { 
            System.out.println(i); 
        } 
    } 
} 

Error: The loop prints numbers from 1 to 10, but the expected output was 1 to 9.
Fix: Change `i <= 10` to `i < 10`.
*/

// Corrected code:
public class Snippet4 {
    public static void main(String[] args) {
        for (int i = 1; i < 10; i++) {
            System.out.println(i);
        }
    }
}