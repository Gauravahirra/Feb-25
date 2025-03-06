/*
Create a program that declares and initializes all primitive data types in Java and prints their values.
*/
public class Q1
{
	
	public static void main(String srgs[])
	{
		//primitive data types : byte, short, int, long, float, double, boolean, char
		byte b=127;
		short s=231;
		int a=12321;
		long l=12312231;
		float f=3123.232f;//4
		double d=12312.123125454454;//8
		boolean b1=true;
		char c='k';
		
		
		System.out.println("byte:"+b);
		System.out.println("short:"+s);
		System.out.println("int:"+a);
		System.out.println("long:"+l);
		System.out.println("float:"+f);
		System.out.println("double:"+d);
		System.out.println("boolean:"+b1);
		System.out.println("char:"+c);//empty because it is '\u0000'
		
	}
}