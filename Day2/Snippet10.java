/*
Snippet 10:  
public class Main { 
    public void display() { 
        System.out.println("No parameters"); 
    } 
    public void display(int num) { 
        System.out.println("With parameter: " + num); 
    } 
    public static void main(String[] args) { 
        display(); 
        display(5); 
    } 
} 


error:
The display() methods are not static and cannot be called from main directly.
*/

//correct code:

public class Snippet10 { 
    public void display() { 
        System.out.println("No parameters"); 
    } 
    public void display(int num) { 
        System.out.println("With parameter: " + num); 
    } 
    public static void main(String[] args) { 
        Snippet10 obj = new Snippet10();
        obj.display(); 
        obj.display(5); 
    } 
} 
