/*
	Write a Java program to find the maximum product of two integers in a given array of
	integers.
	Example:
	Input :
	nums = { 2, 3, 5, 7, -7, 5, 8, -5 }
	Output:
	Pair is (7, 8), Maximum is 56.
*/
import java.util.Scanner;

public class Q17 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the size of the array:");
        int n = sc.nextInt();

        int[] arr = new int[n];
		int largest=0, secondLargest=0;
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }


        for (int i = 0; i < n; i++) {
           
		    if (arr[i] > largest) {  
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest) {  
                secondLargest = arr[i];
            }
        }
        System.out.println("Pair is (" + secondLargest + ", " + largest + "), Maximum product is " + (largest*secondLargest));
        sc.close();
	}
}