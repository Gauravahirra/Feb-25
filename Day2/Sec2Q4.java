class Sec2Q4
{
public static void main(String[] args)
{
int P= 470;
String c = "No";
if(c =="Yes"){

if(P>=1000)
{
System.out.println(P-(P*20/100));
}
else if(P>=500)
{
System.out.println(P-(P*15/100));
}
else
{
System.out.println(P-(P*10/100));
}
}
else
{
if(P>=1000)
{
System.out.println(P-(P*15/100));
}
else if(P>=500)
{
System.out.println(P-(P*10/100));
}
else
{
System.out.println(P-(P*5/100));
}
}
}
}



