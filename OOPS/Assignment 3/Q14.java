/*
	Write a java program to accept 20 numbers in a single dimensional array arr[20]. Transfer
	and store all the even numbers in an array even[ ] and all the odd numbers in another array
	odd[ ]. Finally, print the elements of the even & the odd array.
*/

import java.util.*;
public class Q14 {
    public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int arr[] = new int[20];
		int arrEven[] = new int[20];
		int arrOdd[] = new int[20];
		int even=0, odd=0;
		
		System.out.println("------------------------------");
		System.out.print("Enter Array : ");
		for(int i =0; i<20; i++)
		{
			arr[i] = sc.nextInt();
			if(arr[i] % 2 == 0){
				arrEven[even] = arr[i];
				even++;
			}
			else{
				arrOdd[odd] = arr[i];
				odd++;
			}
		}
		System.out.println("\n------------------------------");
		System.out.println("Original array : ");
		for(int i : arr)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
		System.out.println("Even array : ");
		for(int i : arrEven)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
		System.out.println("Odd array : ");
		for(int i : arrOdd)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
	}
}