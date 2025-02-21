/*

Snippet 26:  
public class Switch { 
    public static void main(String[] args) { 
        int number = 5; 
        switch(number) { 
            case 5: 
                System.out.println("Number is 5"); 
                break; 
            case 5: 
                System.out.println("This is another case 5"); 
                break; 
            default: 
                System.out.println("This is the default case"); 
        } 
    } 
} 


Error:
Duplicate case label

Explanation:
Each case label must be unique within a switch block. Remove the duplicate case 5.

*/

// correct code

public class Snippet26 { 
    public static void main(String[] args) { 
        int number = 5; 
        switch(number) { 
            case 5: 
                System.out.println("Number is 5"); 
                break; 
            case 6: // Changed duplicate case 5 to 6
                System.out.println("This is another case 6"); 
                break; 
            default: 
                System.out.println("This is the default case"); 
        } 
    } 
} 

