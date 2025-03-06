/*Q6:  Write a program to find the  largest of three numbers  using only the  ternary operator 
(  ? : */
public class Q6{
	public static void main(String[] args){
		int x=7, y=4, z=1;
		int res = ((x>y && x>z)? x : (y>x && y>z)? y : z);
		System.out.println(res + " is the largest number.");
	}
}	