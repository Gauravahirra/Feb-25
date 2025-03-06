/*Q12:  Write a Java program to  multiply a number by 8  without using  *  or  /  operators. 
Hint  : Use bitwise left shift (  <<  ).*/

public class Q12{
	public static void main(String[] args){
		check(8);
		check(10);
		check(-7);
	}
	
	public static void check(int a){
		//Use bitwise left shift (  <<  ) 
		int result = a << 3;
		System.out.println(result);
	} 
}	