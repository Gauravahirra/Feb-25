
//Snippet 1:  


public class NestedLoopOutput { 
    public static void main(String[] args) { 
        for (int i = 1; i <= 3; i++) { 
            for (int j = 1; j <= 2; j++) { 
                System.out.print(i + " " + j + " "); 
            } 
            System.out.println(); 
 
 
        } 
    } 
} 

// Guess the output of this nested loop.

/*

Output:

1 1 1 2 
2 1 2 2 
3 1 3 2 

Dry Run:

Outer Loop (i) starts from 1 and runs until 3.
Inner Loop (j) starts from 1 and runs until 2.
For each iteration of i, the inner loop prints i and j values on the same line.
After the inner loop completes, a new line is printed.



Step of Execution:

First Iteration (i = 1):
j = 1 → Prints: 1 1
j = 2 → Prints: 1 2
System.out.println(); → Moves to a new line.

Second Iteration (i = 2):
j = 1 → Prints: 2 1
j = 2 → Prints: 2 2
System.out.println(); → Moves to a new line.

Third Iteration (i = 3):
j = 1 → Prints: 3 1
j = 2 → Prints: 3 2
System.out.println(); → Moves to a new line.

*/
