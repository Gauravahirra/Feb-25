/*
Snippet 14:  
public class Main { 
    public static void main(String[] args) { 
        double num = "Hello"; 
        System.out.println(num); 
    } 
} 
 

error:
Assigning "Hello" to double num.

*/


//correct code:

public class Snippet14 { 
    public static void main(String[] args) { 
        String num = "Hello"; 
        System.out.println(num); 
    } 
} 
