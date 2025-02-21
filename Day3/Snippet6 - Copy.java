/*
Snippet 6:
public class MisplacedForLoopBody { 
    public static void main(String[] args) { 
        for (int i = 0; i < 5; i++) 
            System.out.println(i); 
            System.out.println("Done"); 
    } 
} 

Error: The "Done" message is outside the loop due to missing braces `{}`.
Fix: Enclose the loop body with `{}`.
*/

// Corrected code:

public class Snippet6 {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
        System.out.println("Done");
    }
}