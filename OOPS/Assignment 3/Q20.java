/*
	Sum of Two Matrices
	○ Given two matrices of the same size, compute their sum.
*/
import java.util.*;
public class Q20 {

		public static void main(String args[])
		{
			//Two dimensional array addition
			Scanner sc = new Scanner(System.in);
			
			int arr[][] = new int[3][3];
			
			int arr1[][] = new int[3][3];
			int arr2[][] = new int[3][3];
			
			System.out.println("Enter 3 * 3 matrix 1: ");
			System.out.println("------------------------ ");
			for(int i=0; i<3; i++)//rows
			{
				for(int j=0; j<3; j++)//columns
				{
					arr[i][j] = sc.nextInt(); // i j
				}
			}
		
			
			System.out.println("Enter 3 * 3 matrix 2: ");
			System.out.println("------------------------ ");
			for(int i=0; i<3; i++)
			{
				for(int j=0; j<3; j++)
				{
					arr1[i][j] = sc.nextInt();
				}
			}
			System.out.println("------------------------ ");
			System.out.println("Thanks for entering 2 matrixex... :)");
			System.out.println("------------------------ ");
			
			System.out.println("You entered matrixex :)");
			System.out.println("------------------------ ");
			System.out.println("Entered 3 * 3 matrix 1: ");
			System.out.println("------------------------ ");
			
			
			for(int ar[] : arr)
			{
				for(int x : ar)
				{
					System.out.print(x+" ");
				}
				System.out.println();
			}
			
			System.out.println("------------------------ ");
			System.out.println("Entered 3 * 3 matrix 2: ");
			System.out.println("------------------------ ");
			for(int ar[] : arr1)
			{
				for(int x : ar)
				{
					System.out.print(x+" ");
				}
				System.out.println();
			}
			
			System.out.println("------------------------ ");
			
			for(int i=0;i<arr1.length; i++)
			{
				for(int j=0; j<arr1.length; j++)
				{
					arr2[i][j] = arr[i][j] + arr1[i][j];
				}
			}
			
			
			System.out.println("Calculated 3 * 3 matrix : ");
			System.out.println("------------------------ ");
			for(int ar[] : arr2)
			{
				for(int x : ar)
				{
					System.out.print(x+" ");
				}
				System.out.println();
			}		
		}
}