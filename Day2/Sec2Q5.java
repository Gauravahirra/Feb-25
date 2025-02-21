class Sec2Q5
{
public static void main(String[] args)
{
int Grade1 = 35;
int Grade2 = 45;
int Grade3 = 20;
int Failedsubjects = 0;


switch( Grade1 > 40 ? 1 : 0)
{
case 0 :
Failedsubjects++;
break;
case 1:
break;
}
switch(Grade2 > 40 ? 1 : 0)

{
case 0:
Failedsubjects++;
break;
case 1:
break;
}

switch(Grade3 > 40 ? 1 : 0)
{
case 0 :
Failedsubjects++;
break;
case 1 :
break;
}
switch(Failedsubjects)
{
case 0:
System.out.println("The Student Passes");
break;
default:
System.out.println("The Student Failed in " + Failedsubjects + " Subjects");
break;
}
}
}

