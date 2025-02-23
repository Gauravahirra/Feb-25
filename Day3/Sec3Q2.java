//Write a program to compute the factorial of the number 10.
public class Sec3Q2{
public static void main(String[] args)
{
int number = 10;
long factorial = 1;
for(int i=1;i<=number;i++)
{
factorial *= i;
}
System.out.println("The factorial of the number 10 is :" + factorial);
}
}