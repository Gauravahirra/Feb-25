/*
		Write a program to accept 20 integer numbers in a single Dimensional Array. Find and
		Display the following:
			○ Number of even numbers.
			○ Number of odd numbers.
			○ Number of multiples of 3.
*/
import java.util.*;
public class Q12 {
    public static void main(String args[]) {
		int arr[] = new int[20];
		int even=0, odd=0, multiples=0;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter 20 integer numbers : ");
        for(int i = 0; i<20;i++)
		{
			arr[i] = sc.nextInt();
		}
		System.out.println("\n-----------------------------");
		System.out.println("Array you entered : ");
		for(int i : arr)
		{
			System.out.print(i+" ");
			//Number of even and odd numbers
			if(i%2 == 1)
				odd++;
			else
				even++;
			
			if(i%3 == 0)
				multiples++;
		}
		System.out.println("\n-----------------------------");
		System.out.println("\nNumber of even numbers : "+even);
		System.out.println("Number of odd numbers : "+odd);
		System.out.println("Number of multiples of 3 : "+multiples);
		System.out.println("\n-----------------------------");
	}
}