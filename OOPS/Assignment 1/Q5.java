public class Q5{

	public static void main(String args[])
	{
		//swap two numbers using temprory variable
		int num1 = 12, num2 = 5, temp=0;
		System.out.println("-----------------------");
		System.out.println("Swap two numbers using temprory variable");
		System.out.println("-----------------------");
		System.out.println("Before swapping : ");
		System.out.println("num1 = "+num1+" num2 = "+num2);
		System.out.println("-----------------------");
		temp = num1;
		num1 = num2;
		num2 = temp;
		System.out.println("After swapping : ");
		System.out.println("num1 = "+num1+" num2 = "+num2);
		System.out.println("-----------------------");
		
		//swap two numbers without temprory variable
		int num3 = 12, num4 = 5;
		
		System.out.println("Swap two numbers without using temprory variable");
		System.out.println("-----------------------");
		System.out.println("Before swapping : ");
		System.out.println("num1 = "+num3+" num2 = "+num4);
		System.out.println("-----------------------");
		
		num3=num3+num4; // num3 = 12+5 = 17
		num4=num3-num4;//num4 = 17-5 = 12
		num3=num3-num4;//numm3 = 17-12 = 5
		System.out.println("After swapping : ");
		System.out.println("num1 = "+num3+" num2 = "+num4);
		System.out.println("-----------------------");
	}
}