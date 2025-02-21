/*
Snippet 11:  
public class Main { 
    public static void main(String[] args) { 
        int[] arr = {1, 2, 3}; 
        System.out.println(arr[5]); 
    } 

error:

arr[5] causes ArrayIndexOutOfBoundsException.




//correct code:

public class Snippet11 { 
    public static void main(String[] args) { 
        int[] arr = {1, 2, 3}; 
        System.out.println(arr[2]); 
    } 
}