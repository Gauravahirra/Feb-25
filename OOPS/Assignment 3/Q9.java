/*
		Find Missing Number in an Array
		○ Given an array of size n-1 containing numbers from 1 to n, find the missing number.
*/
public class Q9 {
    public static void main(String args[]) {
        int n = 5;
		int[] arr = {1,2,4,5,6};
		int missingNo = 0, count=1;
		System.out.print("Array : ");
		
		for(int i : arr){
			System.out.print(i+" ");
		}
		for(int i : arr)
		{
			if(i != count){
				missingNo = count;
				break;
			}
			count++;
		}
		System.out.println("Missing number from array is : "+missingNo);
	}
}