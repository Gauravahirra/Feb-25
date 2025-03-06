/*Q9:  Implement a Java program that checks if a number is  within a specific range (20 to 
50)  without using  if-else  . 
Hint  : Use  logical AND (  &&  ) in a print statement */
public class Q9{
	public static void main(String[] args){
		int x = 30, y = 45;
		check(x);
		check(y);
	}
	
	public static void check(int a){
		System.out.println((a>=20 && a<=50)? a + " lies in the range." : a + " doesn't lie within the range");
	} 
}	