/*
Snippet 2:
public class IncorrectWhileCondition { 
    public static void main(String[] args) { 
        int count = 5; 
        while (count = 0) { 
            System.out.println(count); 
            count--; 
        } 
    } 
} 

Error: `count = 0` is an assignment, not a condition. It should be `count == 0`.
Fix: Replace `count = 0` with `count > 0` to ensure the loop executes correctly.
*/

// Corrected code:
public class Snippet2 {
    public static void main(String[] args) {
        int count = 5;
        while (count > 0) {
            System.out.println(count);
            count--;
        }
    }
}
