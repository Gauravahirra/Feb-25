/*Q23:  Given a number, find whether it is  odd or even  using the  &  bitwise operator and print 
the result without using  if-else */

public class Q23{
	public static void main(String[] args){
		int a = 7, b = 10;
		check(a);
		check(b);
	}
	
	public static void check(int a){
		if((a&1) == 0){
			System.out.println(a + " is even");
		} else {
			System.out.println(a + " is odd");
		}
	}
}	