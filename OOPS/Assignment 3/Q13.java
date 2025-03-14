/*
		Write a program to accept the marks in Physics, Chemistry and Maths secured by 20 class
		students in a single Dimensional Array. Find and display the following:
		○ Number of students securing 75% and above in aggregate.
		○ Number of students securing 40% and below in aggregate
*/
import java.util.*;
public class Q13 {
    public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int[] physics = new int[20];
		int[] chemistry = new int[20];
		int[] maths = new int[20];
		double avg=0;
		double[] aggregate = new double[20];
		int aggregateMore = 0, aggregateLess = 0;
		
		System.out.println("------------------------------");
		for(int i = 0; i<20; i++)
		{
			System.out.println("Enter marks of student in physics : ");
			System.out.println("------------------------------");
			System.out.print("Physics marks : ");
			physics[i]=sc.nextInt();
			System.out.print("\nChemistry marks : ");
			chemistry[i]=sc.nextInt();
			System.out.print("\nMaths marks : ");
			maths[i]=sc.nextInt();
			
			avg=(physics[i]+chemistry[i]+maths[i])/3;
			aggregate[i]=avg;
			if(avg>=75)
				aggregateMore++;
			else if(avg<=40)
				aggregateLess++;
			System.out.println("------------------------------");
		}
		System.out.println("Marks of 20 students in physics : ");
		for(int i : physics)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
		System.out.println("Marks of 20 students in chemistry : ");
		for(int i : chemistry)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
		System.out.println("Marks of 20 students in maths : ");
		for(int i : maths)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
		System.out.println("Aggregate of 20 students : ");
		for(double i : aggregate)
		{
			System.out.print(i+" ");
		}
		System.out.println("\n------------------------------");
		System.out.println("Aggregate of students have more than 75% : "+aggregateMore);
		System.out.println("Aggregate of students have less than 40% : "+aggregateLess);
		System.out.println("------------------------------");
	}
}