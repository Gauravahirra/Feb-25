// 21.  Row-wise and Column-wise Sum 
// ○  Find the sum of each row and each column of a given matrix. 

import java.util.Scanner;
class Q21 {
	public static void sum(int [][]a,int r,int k){
		
		int rowSum;
		int columnSum;
		for (int i = 0; i < r; i++) {
			rowSum=0;
            for (int j = 0; j < k; j++) {
                rowSum +=a[i][j];
            }
			System.out.println("Sum of "+i+" Row in Matrix is: "+rowSum);
        }
        for (int i = 0; i < k; i++) {
			columnSum=0;
            for (int j = 0; j < r; j++) {
                columnSum +=a[j][i];
            }
			System.out.println("Sum of "+i+" Column in Matrix is: "+columnSum);
        }

		
		
	}
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Row length");
        int r = sc.nextInt();
        System.out.println("Enter Column length");
        int k = sc.nextInt();
        int[][] a = new int[r][k];

        System.out.println("Enter elements for first matrix:");
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < k; j++) {
                a[i][j] = sc.nextInt();
            }
        }
		System.out.println("Element before Swapping:");
        for (int[] row : a) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
		sum(a,r,k);
		
        sc.close();
    }
}