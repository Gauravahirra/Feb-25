//Snippet 8:  

public class LoopIncrement { 
    public static void main(String[] args) { 
        int count = 0; 
        for (int i = 0; i < 4; i++) { 
            count += i++ - ++i; 
        } 
        System.out.println(count); 
    } 
 
 
} 
// Guess the output of this code snippet.


/*
Output:

-4


Dry Run:

Initialization:
count = 0

Loop Execution:
for (int i = 0; i < 4; i++)

Each iteration updates count using:
count += i++ - ++i;

Let's break it down step by step:

Iteration 1 (i = 0):
i++ (Post-increment i) → Returns 0, then i = 1
++i (Pre-increment i) → i = 2
Calculation: count += 0 - 2 → count = 0 - 2 = -2
The for loop increments i → i = 3
Iteration 2 (i = 3):
i++ (Post-increment i) → Returns 3, then i = 4
++i (Pre-increment i) → i = 5
Calculation: count += 3 - 5 → count = -2 + (-2) = -4
The for loop increments i → i = 6 (Loop condition i < 4 is false, exit loop)



*/