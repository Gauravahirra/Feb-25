/*
Snippet 3:
public class DoWhileIncorrectCondition { 
    public static void main(String[] args) { 
        int num = 0; 
        do { 
            System.out.println(num); 
            num++; 
        } while (num > 0); 
    } 
} 

Error: The loop condition `num > 0` causes the loop to exit after the first iteration.
Fix: Change the condition to `num < 5` to allow multiple iterations.
*/

// Corrected code:
public class Snippet3 {
    public static void main(String[] args) {
        int num = 0;
        do {
            System.out.println(num);
            num++;
        } while (num < 5);
    }
}