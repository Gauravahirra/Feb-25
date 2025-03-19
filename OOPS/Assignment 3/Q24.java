// 24.  Rotate a Matrix by 90 Degrees 
// ○  Rotate a given N x N matrix by 90 degrees clockwise. 
 
import java.util.Scanner;
class Q24 {
	public static void rotate(int [][]a){
		int k=a.length;
		for (int i = 0; i < k; i++) {
            for (int j = i; j < k; j++) {
                int temp =a[i][j];
				a[i][j]=a[j][i];
				a[j][i]=temp;
            }
        }
		System.out.println("Element After Rotate:");
		for (int[] row : a) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
		for (int i = 0; i < k; i++) {
            for (int j = 0; j < k/2; j++) {
                int temp =a[i][j];
				a[i][j]=a[i][k-j-1];
				a[i][k-j-1]=temp;
            }
        }
		System.out.println("Element After Rotate:");
		for (int[] row : a) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
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
		rotate(a);
		
        sc.close();
    }
}