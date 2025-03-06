/* Q1:  Write a program to swap two numbers  without using a third variable  and without 
using arithmetic operators like  +  or  -  . 
Hint  : Use bitwise XOR  ^  operator.
*/

public class SwappingNum{
public static void main(String[] args){
int n1 = 5;
int n2 = 4;
System.out.println("Before swapping the n1= " + n1 + ", n2= " + n2);
 n1 =n1^n2;
 n2 =n1^n2;
  n1 =n1^n2;
System.out.println("After swapping the n1= "+ n1 + ", n2= " + n2);

}
}