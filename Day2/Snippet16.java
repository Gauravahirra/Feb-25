
/*
Snippet 16:  
public class Main { 
    public static void main(String[] args) { 
        int num = 10; 
        double result = num / 4; 
        System.out.println(result); 
    } 
}



error:

integer division truncates decimal.



*/




//Correct Code:


public class Snippet16 { 
    public static void main(String[] args) { 
        int num = 10; 
        double result = num / 4.0; 
        System.out.println(result); 
    } 
} 
