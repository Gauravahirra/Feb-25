class Q16
{
	public static void main(String args[])
	{
		int n=17, flag=0;
		for(int i=2; i<n; i++)
		{
			if(n%i == 0)
			{
				System.out.println("The number "+n+" is Not Prime");
				flag=1;
				break;
			}
			
		}
		if(flag == 0)
		{
			System.out.println("The number "+n+" is Prime");
		}

	}
}