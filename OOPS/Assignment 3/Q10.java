// 10.  Find Intersection and Union of Two Arrays 
// ○  Find the intersection and union of two unsorted arrays

import java.util.Scanner;
import java.util.Arrays;
class Q10{
    public static void interSectNum(int[] arr1, int[] arr2, int n, int m) {
        int intter[]=new int[n+m];
		System.arraycopy(arr1, 0, intter, 0, n);
		int count=n;
		for(int i=0;i<m;i++){
			for(int j=0;j<n;j++){
				if(arr2[i]!=arr1[j]){
					intter[count++]= arr2[i];
					break;
				}
			}
		}
		Arrays.sort(intter);
		System.out.println( "Array after Intersection");
		for (int num : intter) System.out.print(num + " ");
    }
	public static void unionNum(int[] arr1, int[] arr2, int n, int m) {
		int []un=new int[n+m];
		int ind=0;
        for(int i=0;i<n;i++){
			int count=0;
			for(int j=0;j<n;j++){
				if(arr1[i]==arr1[j] && count==0){
					un[ind++]=arr1[i];
					count++;
				}
				else{
					break;
				}
			}
		}
        java.util.Arrays.sort(un);
		System.out.println();
		for (int num : un) System.out.print(num + " ");
		for()
        
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
		System.out.println( "array 1 length");
        int n = sc.nextInt();
        int[] arr1 = new int[n];
		System.out.println( "array 1 val");
        for (int i = 0; i < n; i++) arr1[i] = sc.nextInt();
		System.out.println( "array 2 length");
        int m = sc.nextInt();
        int[] arr2 = new int[m];
		System.out.println( "array 2 val");
        for (int i = 0; i < m; i++) arr2[i] = sc.nextInt();

        interSectNum(arr1, arr2, n, m);
		
        unionNum(arr1, arr2, n, m);

        sc.close();
    }
}