/*
Snippet 10:
public class IncorrectWhileLoopControl { 
    public static void main(String[] args) { 
        int num = 10; 
        while (num = 10) { 
            System.out.println(num); 
            num--; 
        } 
    } 
} 

Error: `num = 10` is an assignment, not a condition.
Fix: Change `num = 10` to `num == 10`.
*/

// Corrected code:


public class Snippet10 {
    public static void main(String[] args) {
        int num = 10;
        while (num > 0) {
            System.out.println(num);
            num--;
        }
    }
}