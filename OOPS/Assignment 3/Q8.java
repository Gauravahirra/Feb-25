// 8.  Merge Two Sorted Arrays 
// ○  Merge two sorted arrays into a single sorted array without using extra space.
// 

import java.util.Scanner;
import java.util.Arrays;

class Q8 {
    public static void mergeArr(int[] arr1, int[] arr2, int n, int m) {
        int i = n - 1, j = 0;
        
        // Swap elements if needed
        while (i >= 0 && j < m) {
            if (arr1[i] > arr2[j]) {
                int temp = arr1[i];
                arr1[i] = arr2[j];
                arr2[j] = temp;
            }
            i--;
            j++;
        }

        // Sort both arrays separately
        Arrays.sort(arr1);
        Arrays.sort(arr2);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter size of first sorted array:");
        int n = sc.nextInt();
        int[] arr1 = new int[n];
        System.out.println("Enter elements of first sorted array:");
        for (int i = 0; i < n; i++) arr1[i] = sc.nextInt();

        System.out.println("Enter size of second sorted array:");
        int m = sc.nextInt();
        int[] arr2 = new int[m];
        System.out.println("Enter elements of second sorted array:");
        for (int i = 0; i < m; i++) arr2[i] = sc.nextInt();

        mergeArr(arr1, arr2, n, m);

        System.out.println("Merged sorted arrays:");
        for (int num : arr1) System.out.print(num + " ");
        for (int num : arr2) System.out.print(num + " ");

        sc.close();
    }
}