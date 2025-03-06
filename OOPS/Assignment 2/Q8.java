/*Q8:  Write a program that  takes three boolean inputs  and prints  true  if at least two of 
them are  true  . 
Hint  : Use logical operators (  &&  ,  ||  ). */
public class Q8{
	public static void main(String[] args){
		boolean x = true, y = false, z = true;
		check(x,y,z);
		x = true; y = false; z = false;
		check(x,y,z);
	}
	
	public static void check(boolean a, boolean b, boolean c){
		if((a && (b||c)) || (c && (a||b)) || (b && (a||c))){
			System.out.println("true");
		} else {
			System.out.println("false");
		}
	} 
}	