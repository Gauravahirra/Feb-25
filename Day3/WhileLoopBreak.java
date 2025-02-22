//Snippet 3:

  
public class WhileLoopBreak { 
    public static void main(String[] args) { 
        int count = 0; 
        while (count < 5) { 
            System.out.print(count + " "); 
            count++; 
            if (count == 3) break; 
        } 
        System.out.println(count); 
    } 
} 
// Guess the output of this while loop.

/*
Output:

0 1 2 3 

Dry Run:

Initialization: count = 0
While condition (count < 5) is true, so enter the loop.

Iteration 1 (count = 0):
                            Print 0
                            Increment count → count = 1
                            count != 3, so continue
Iteration 2 (count = 1):
                            Print 1
                            Increment count → count = 2
                            count != 3, so continue
Iteration 3 (count = 2):
                            Print 2
                            Increment count → count = 3
                            count == 3, so break (exit the loop)

After exiting the loop, print count (which is 3).

*/