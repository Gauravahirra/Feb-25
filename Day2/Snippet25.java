/*

Snippet 25:  
public class Switch { 
    public static void main(String[] args) { 
        double score = 85.0; 
        switch(score) { 
            case 100: 
                System.out.println("Perfect score!"); 
                break; 
            case 85: 
                System.out.println("Great job!"); 
                break; 
            default: 
                System.out.println("Keep trying!"); 
        } 
    } 
}

Error:
Cannot switch on a value of type double

Explanation:
switch only supports byte, short, char, int, String, and enum. double is not allowed. Use if-else instead.

*/

//correct code:

public class Snippet25 { 
    public static void main(String[] args) { 
        int score = 85; // Changed from double to int
        switch(score) { 
            case 100: 
                System.out.println("Perfect score!"); 
                break; 
            case 85: 
                System.out.println("Great job!"); 
                break; 
            default: 
                System.out.println("Keep trying!"); 
        } 
    } 
} 
