/*

Write a program to print the following pattern: 
5 
5*4 
5*4*3 
5*4*3*2 
5*4*3*2*1

*/

public class PatternQ20{

	public static void main(String args[])
	{
		int n=5;
		for(int i=1; i<=n; i++)
		{
			int count=n;
			for(int j=1; j<=(2*i-1); j++)
			{
				if(j%2 == 0 )
				{
					System.out.print("*");	
				}
				else
				{
					System.out.print(count);
					count--;
				}
			}
			System.out.println();
		}
	}
}