/*
Snippet 8:
public class OffByOneDoWhileLoop { 
    public static void main(String[] args) { 
        int num = 1; 
        do { 
            System.out.println(num); 
            num--; 
        } while (num > 0); 
    } 
} 

Error: The loop decreases `num`, printing only `1`.
Fix: Change the loop to count up to 5 instead of down.
*/

// Corrected code:

public class Snippet8 {
    public static void main(String[] args) {
        int num = 1;
        do {
            System.out.println(num);
            num++;
        } while (num <= 5);
    }
}