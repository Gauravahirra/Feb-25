/*
Snippet 12:
public class LoopVariableScope { 
    public static void main(String[] args) { 
        for (int i = 0; i < 5; i++) { 
            int x = i * 2; 
        } 
        System.out.println(x); 
    } 
} 

Error: `x` is declared inside the loop, making it inaccessible outside.
Fix: Declare `x` outside the loop.
*/

// Corrected code:

public class Snippet12 {
    public static void main(String[] args) {
        int x = 0;
        for (int i = 0; i < 5; i++) {
            x = i * 2;
        }
        System.out.println(x);
    }
}