/*
	Find Sum and Average
	○ Compute the sum and average of all elements in the array.

*/
public class Q5{
	public static void main(String args[])
	{
		int[] arr = {3,5,7,1,8};
		double avg=0, sum=0;
		System.out.print("Array : ");
		for(int i : arr)
		{
			System.out.print(i+" ");
			sum+=i;
		}
		avg = sum/(arr.length);
		System.out.println();
		System.out.println("Sum of array elements : "+sum);
		System.out.println("Average of array elements : "+avg);
		
	}
}