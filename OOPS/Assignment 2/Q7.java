/* Q7:  Implement a Java program that checks whether a given year is a  leap year or not  using 
logical (  &&  ,  ||  ) operators */ 

import java.util.Scanner;
public class Q7{
	public static void main(String[] args){
		Scanner sc = new Scanner (System.in);
		int y = sc.nextInt();
		if(y%400==0 || (y%4==0 && y%100!=0))
			System.out.println(y + " is a leap year.");
		else
			System.out.println(y + " is not a leap year."); 
	}
}	