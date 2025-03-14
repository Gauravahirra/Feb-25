/*
	Given two sorted arrays A and B of size p and q, write a Java program to merge elements of
	A with B by maintaining the sorted order i.e. fill A with first p smallest elements and fill B
	with remaining elements.
	Example:
	Input :
	int[] A = { 1, 5, 6, 7, 8, 10 }
	int[] B = { 2, 4, 9 }			
	Output:
	Sorted Arrays:
	A: [1, 2, 4, 5, 6, 7]
	B: [8, 9, 10]
*/


import java.util.Scanner;

public class Q16 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter size of array 1: ");
        int p = sc.nextInt();
        System.out.println("Enter size of array 2: ");
        int q = sc.nextInt();

        int arr1[] = new int[p];
        int arr2[] = new int[q];
        int arr3[] = new int[p + q];

        System.out.println("Enter " + p + " elements for array 1 (sorted order):");
        for (int i = 0; i < p; i++) {
            arr1[i] = sc.nextInt();
        }

        System.out.println("Enter " + q + " elements for array 2 (sorted order):");
        for (int i = 0; i < q; i++) {
            arr2[i] = sc.nextInt();
        }

        for (int i = 0; i < p; i++) {
            arr3[i] = arr1[i];
        }
        for (int i = 0; i < q; i++) {
            arr3[p + i] = arr2[i];
        }

        for (int i = 0; i < arr3.length - 1; i++) {
            for (int j = i + 1; j < arr3.length; j++) {
                if (arr3[i] > arr3[j]) {
                    // Swap
                    int temp = arr3[i];
                    arr3[i] = arr3[j];
                    arr3[j] = temp;
                }
            }
        }

        for (int i = 0; i < p; i++) {
            arr1[i] = arr3[i];
        }

        for (int i = 0; i < q; i++) {
            arr2[i] = arr3[p + i];
        }

        System.out.println("Sorted Arrays:");
        System.out.print("A: ");
        for (int num : arr1) {
            System.out.print(num + " ");
        }
        System.out.println();

        System.out.print("B: ");
        for (int num : arr2) {
            System.out.print(num + " ");
        }
        System.out.println();

        sc.close();
    }
}
