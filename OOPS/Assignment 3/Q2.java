

/* Reverse an Array 
○  Reverse the given array in place.*/

public class Q2
{
public static void main(String args[])
{
int[] arr = {3,5,7,1,8};
int left = 0, right = arr.length - 1;
System.out.print("Original array : ");
for(int x : arr)
{
System.out.print(x+" ");
}
while(left < right)
{
int temp = arr[left];
arr[left] = arr[right];
arr[right] = temp;
left++;
right--;
}
System.out.println();
System.out.print("Reversed array : ");
for(int x : arr)
{
System.out.print(x+" ");
}
}
}
