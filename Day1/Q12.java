class Q12
{
	public static void main(String args[])
	{
		int a = 12345;
                int b = 0;
		int c = a;
		while(a != 0)
		{
			int remainder = a%10;
			b = b *10 +remainder;
			a= a/10;
		}
		System.out.println("The reverse number "+ c +" is "+ b);
	}
}