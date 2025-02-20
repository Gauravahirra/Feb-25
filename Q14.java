class Q14
{
	public static void main(String args[])
	{
		int a=1, a1=0, a2=1,fib=0;
		System.out.print(a1 + " ");
		while(a<10)
		{	
			System.out.print(a2 + " ");
			fib=a1+a2;
			a1 = a2;
			a2 = fib;
			a++;	
		}
			
	}
}