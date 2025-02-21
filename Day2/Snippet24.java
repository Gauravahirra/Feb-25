/*
Snippet 24: 
public class MissingBreakCase { 
    public static void main(String[] args) { 
        int level = 1; 
        switch(level) { 
            case 1: 
                System.out.println("Level 1"); 
            case 2: 
                System.out.println("Level 2"); 
            case 3: 
                System.out.println("Level 3"); 
            default: 
                System.out.println("Unknown level"); 
        } 
    } 
}

Error:
Missing break in switch Fixed

Explanation:
Since case 1 does not have a break, execution continues into case 2, case 3, and the default case. To fix this, add break; statements.
*/

// Correct code:


public class Snippet24 { 
    public static void main(String[] args) { 
        int level = 1; 
        switch(level) { 
            case 1: 
                System.out.println("Level 1"); 
                break;
            case 2: 
                System.out.println("Level 2"); 
                break;
            case 3: 
                System.out.println("Level 3"); 
                break;
            default: 
                System.out.println("Unknown level"); 
        } 
    } 
} 
