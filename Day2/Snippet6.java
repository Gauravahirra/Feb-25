/*
Snippet 6:  

public class Main { 
    public static void main(String[] args) { 
        int x = y + 10; 
        System.out.println(x); 
    } 
}


error:

y is not declared before use.


*/

//correct code:


public class Snippet6 { 
    public static void main(String[] args) {
      int y = 5; 
        int x = y + 10; 
        System.out.println(x); 
    } 
}

