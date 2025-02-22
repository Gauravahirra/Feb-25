//Snippet 4:
  
public class DoWhileLoop { 
    public static void main(String[] args) { 
        int i = 1; 
        do { 
            System.out.print(i + " "); 
            i++; 
        } while (i < 5); 
        System.out.println(i); 
    } 
} 
// Guess the output of this do-while loop.

/*

Output:

1 2 3 4 5



Dry Run:

Initialization: i = 1

The do-while loop executes at least once, regardless of the condition.

Iteration 1 (i = 1):

Print 1
Increment i → i = 2
Condition i < 5 is true, so continue.
Iteration 2 (i = 2):

Print 2
Increment i → i = 3
Condition i < 5 is true, so continue.
Iteration 3 (i = 3):

Print 3
Increment i → i = 4
Condition i < 5 is true, so continue.
Iteration 4 (i = 4):

Print 4
Increment i → i = 5
Condition i < 5 is false, so exit the loop.
After exiting the loop, System.out.println(i) prints 5.

*/