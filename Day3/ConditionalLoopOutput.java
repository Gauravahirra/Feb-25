//Snippet 5:  


public class ConditionalLoopOutput { 
    public static void main(String[] args) { 
        int num = 1; 
        for (int i = 1; i <= 4; i++) { 
            if (i % 2 == 0) { 
                num += i; 
            } else { 
                num -= i; 
            } 
        } 
        System.out.println(num); 
    } 
} 
// Guess the output of this loop.


/*

Output:

3


Dry Run:

Initialization: num = 1

Loop runs from i = 1 to i = 4

Iteration 1 (i = 1):

i % 2 != 0 (odd), so num -= i → num = 1 - 1 = 0
Iteration 2 (i = 2):

i % 2 == 0 (even), so num += i → num = 0 + 2 = 2
Iteration 3 (i = 3):

i % 2 != 0 (odd), so num -= i → num = 2 - 3 = -1
Iteration 4 (i = 4):

i % 2 == 0 (even), so num += i → num = -1 + 4 = 3
Final value of num = 3

Print 3

*/