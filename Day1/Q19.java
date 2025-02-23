class Q19
{
	public static void main(String args[])
	{
		int base=3, exponent=4, result=1;
		for(int i=1; i<=exponent;i++)
		{
			result*=base;
		}
		System.out.println(base+" raise to the power "+exponent+ " is "+result);
	}
}