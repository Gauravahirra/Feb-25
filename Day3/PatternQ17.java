/*
 Write a program to print the following pattern: 

* * * * *
 * * * *
  * * *
   * *
    *
*/


public class PatternQ17{

	public static void main(String args[])
	{
		int n=5;
		for(int i=n; i>=1; i--)
		{
			
			for(int j=i; j<n; j++)
			{
				System.out.print(" ");
			}
					
			for(int j=1; j<=i; j++)
			{
				System.out.print("* ");
			}
			System.out.println();
		}
		
	}
}