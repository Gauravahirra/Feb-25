// Find the Diagonal Sum 
// ○  Compute the sum of both diagonals in a square matrix.
import java.util.Scanner;
class Q25{
	public static void diagonalSum(int [][]a){
		int k=a.length;
		int sumPrim=0;
		int sumSec=0;
		for (int i = 0; i < k; i++) {
            
               sumPrim += a[i][i];         
               sumSec += a[i][k - 1 - i]; 
            
        }		
		if (k % 2 == 1) {
            int center = a[k / 2][k / 2];
            sumSec -= center;
		}
		int total=sumPrim +sumSec;
		System.out.println("Sum Primary Diagonal is:"+sumPrim);
		System.out.println("Sum Secondary Diagonal is:"+sumSec);
		System.out.println("Sum total sum of Diagonal is:"+total);
		
	}
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter length");
        int k = sc.nextInt();
        int[][] a = new int[k][k];

        System.out.println("Enter elements for first matrix:");
        for (int i = 0; i < k; i++) {
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
		diagonalSum(a);
		
        sc.close();
    }
}