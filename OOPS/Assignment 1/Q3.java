public class Q3{

		public static void main(String args[])
		{
			//Implicit typecasting -- widening
			int a=122312;
			double d = a;
			System.out.println("int a = "+a );
			System.out.println("double d = "+d);
			
			//Explicit typecasting -- narrowing
			double d1 = 123434.24123123;
			int a1 = (int) d1;
			System.out.println("double d1 = "+d1);
			System.out.println("int a1="+a1);

		}

}