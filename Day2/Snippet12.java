/*
Snippet 12:  
public class Main { 
    public static void main(String[] args) { 
        while (true) { 
            System.out.println("Infinite Loop"); 
        } 
    } 
}

error:

 Added break to prevent infinite loop

*/

 // correct code:

public class Snippet12 { 
    public static void main(String[] args) { 
        while (true) { 
            System.out.println("Infinite Loop");
            break;
 
        } 
    } 
}
