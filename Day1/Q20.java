class Q20
{
	public static void main(String args[])
	{
		int no=123456, temp=no, count=0, n=0;
		while(temp>0)
		{
			temp=temp/10;
			count ++;
		}
		System.out.println(" The Number "+no+ " has "+count+" digits.");
		System.out.print("------");
		while(n<count)
		{
			System.out.print("X--------");
			n++;
		}
	}
}