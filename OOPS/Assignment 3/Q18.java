/*
 Print a Matrix
○ Given an m x n matrix, print all its elements row-wise.
*/
import java.util.Scanner;

public class Q18 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		System.out.print("\nEnter rows size : ");
		int m = sc.nextInt();
		System.out.println("----------------------------");
		System.out.print("Enter columns size : ");
		int n = sc.nextInt();
		int arr[][] = new int[m][n];
		System.out.println("Enter matrix "+m+" x "+n+" : ");
		for(int i=0; i<m; i++)
		{
			for(int j=0; j<n; j++)
			{
				arr[i][j] = sc.nextInt();
			}
		}
		System.out.println("----------------------------");
		System.out.println("Matrix you entered :");
		for(int ar[] : arr)
		{
			for(int x : ar)
			{
				System.out.print(x+" ");
			}
			System.out.println();
		}
		System.out.println("----------------------------");
	}
}