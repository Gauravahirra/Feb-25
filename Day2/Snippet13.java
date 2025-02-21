/*
Snippet 13:  
public class Main { 
    public static void main(String[] args) { 
        String str = null; 
        System.out.println(str.length()); 
    } 
}


error:

str.length() causes NullPointerException.


*/

//Correct code:

public class Snippet13 { 
    public static void main(String[] args) { 
        String str = null; 
        if (str != null) {
            System.out.println(str.length());
        } else {
            System.out.println("String is null");
        }
    } 
} 
