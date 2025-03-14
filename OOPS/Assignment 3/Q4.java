/*
	 Count Even and Odd Numbers
		○ Count the number of even and odd numbers in an array.

*/
public class Q4{
	public static void main(String args[])
	{
		int[] arr = {3,5,7,1,8};
		int even=0, odd=0;
		System.out.print("Array : ");
		for(int i : arr)
		{
			System.out.print(i+" ");
			if(i%2 == 0)
				even++;
			else
				odd++;
		}
		System.out.println();
		System.out.println("Count of even numbers : "+even);
		System.out.println("Count of odd numbers : "+odd);
		
	}
}