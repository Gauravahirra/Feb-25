/*
	Find the Largest and Smallest Element
	○ Given an array, find the smallest and largest elements in it.

*/
public class Q1{
	public static void main(String args[])
	{
		int[] arr = {3,5,7,1,8};
		int smallest=arr[0], largest=arr[0];
		
		for(int i =0; i<arr.length; i++)
		{
			if(i == 0)
				continue;
			
			else if(smallest>=arr[i])
				smallest = arr[i];
			
			else
				largest = arr[i];
				largest = arr[i];
		}
		System.out.print("Array : ");
		for(int x : arr)
		{
			System.out.print(x+" ");
		}
		System.out.println();

		System.out.println("Smallest element from array is : "+smallest);
		System.out.println("Largest element from array is : "+largest);
	}
}