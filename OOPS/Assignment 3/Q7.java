// 7.  Rotate an Array 
// ○  Rotate the array to the right by k positions.

import java.util.Scanner;

class Q7 {
    public static void rotateRight(int[] arr, int k) {
        int n = arr.length;
        k = k % n; 
        if (k == 0) return; 

        int[] temp = new int[n];

        
        for (int i = 0; i < k; i++) {
            temp[i] = arr[n - k + i];
        }

        
        for (int i = 0; i < n - k; i++) {
            temp[k + i] = arr[i];
        }

       
        for (int i = 0; i < n; i++) {
            arr[i] = temp[i];
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Array length:");
        int n = sc.nextInt();
        
        if (n < 1) {
            System.out.println("No element in array");
            return;
        }

        int[] arr = new int[n];

        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter positions to rotate:");
        int k = sc.nextInt();

        rotateRight(arr, k);

        System.out.println("Rotated Array:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }

        sc.close();
    }
}