/*
	Transpose of a Matrix
	○ Given a matrix, return its transpose (swap rows and columns).
*/
import java.util.*;
public class Q19 {

		public static void main(String args[])
		{
			Scanner sc = new Scanner(System.in);
			
			int arr[][] = new int[3][3];
			
			int arr1[][] = new int[3][3];			
			System.out.println("Enter 3 * 3 matrix 1: ");
			System.out.println("------------------------ ");
			for(int i=0; i<3; i++)//rows
			{
				for(int j=0; j<3; j++)//columns
				{
					arr[i][j] = sc.nextInt(); // i j
				}
			}
	
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
			for(int i=0;i<arr.length; i++)
			{
				for(int j=0; j<arr.length; j++)
				{
					arr1[i][j] = arr[j][i];
				}
			}
			
			
			System.out.println("Calculated 3 * 3 matrix : ");
			System.out.println("------------------------ ");
			for(int ar[] : arr1)
			{
				for(int x : ar)
				{
					System.out.print(x+" ");
				}
				System.out.println();
			}		
		}
}