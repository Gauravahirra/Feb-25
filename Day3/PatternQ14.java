/*
14. Write a program to print the following pattern: 
* 
 ** 
 *** 
 ***** 
 ******* 
 *********

*/

public class PatternQ14{

	public static void main(String args[])
	{
		int n=5;
		for(int i=1; i<=n; i++)
		{
			for(int j=1; j<=2*i-1; j++)
			{
				System.out.print("*");
			}
			System.out.println();
		}
	}
}