/*

Snippet 18:  
public class Main { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 5; 
        int result = a + b * 2; 
        System.out.println(result); 
    } 
}


Error:


Operator precedence: b * 2 happens first.


*/


//correct code

public class Snippet18 { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 5; 
        int result = a + (b * 2); 
        System.out.println(result);
    } 
} 
