/* Q5:  Write a Java program to  swap two numbers  using the  +=  and  -=  operators only. */


public class Q5{
	
	public static void main(String[] args){
		int x = 7, y = 4;
		System.out.println("Before Swapping: \nX = " + x + "\nY = " + y); 
		x += y;
		y -= x;
		y = -y;
		x -= y;
		System.out.println("After Swapping: \nX = " + x + "\nY = " + y); 
	}
}