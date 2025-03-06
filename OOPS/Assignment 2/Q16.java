/*Q16:  Write a program that determines whether a given number is  positive, negative, or 
zero  using only the  ternary operator*/

public class Q16{
	public static void main(String[] args){
		pnz(22);
		pnz(-21);
		pnz(0);
	}
	public static void pnz(int x){
		String res = (x==0)? "zero" : (x>0)? "positive" : "negative";
		System.out.println(res);
	}
}	
