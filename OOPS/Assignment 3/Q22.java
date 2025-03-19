// 22.  Find the Maximum Element in a Matrix 
// ○  Find the largest element in a given matrix.
import java.util.Scanner;
class Q22 {
	public static void maxEL(int [][]a,int r,int k){
		
		int max=a[0][0];
		for (int i = 0; i < r; i++) {
            for (int j = 0; j < k; j++) {
                if (a[i][j]>max){
					max=a[i][j];
				}
            }
        }

		System.out.println("Largest Element in Matrix is: "+max);
		
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
		maxEL(a,r,k);
		
        sc.close();
    }
}