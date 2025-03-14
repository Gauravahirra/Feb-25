/*
	Find the Second Largest Element
	○ Find the second-largest element in the given array
*/
public class Q3{
	public static void main(String args[])
	{
		int[] arr = {3,5,7,1,8};
		int largest=arr[0], secondLargest=arr[0];
		System.out.print("Array : ");
		for(int i : arr)
		{
			System.out.print(i+" ");
			if(i > largest)
			{
				secondLargest = largest;
				largest = i;
			}
		}
		System.out.println();
		System.out.println("Second largest element of array : "+secondLargest);
		
	}
}