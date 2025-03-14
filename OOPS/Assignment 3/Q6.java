/*
	Remove Duplicates from a Sorted Array
		○ Remove duplicate elements from a sorted array without using extra space.
*/
    public class Q6 {
    public static void main(String args[]) {
        int[] arr = {1, 1, 2, 3, 4, 5, 5, 6, 8};
        int j = 0; 
        System.out.print("Array before removing duplicate elements: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[j]) { 
                j++;
            arr[j] = arr[i]; 
            }
        }
        System.out.print("Array after removing duplicate elements: ");
        for (int i = 0; i <= j; i++) {
            System.out.print(arr[i] + " ");
		}
	}
	}