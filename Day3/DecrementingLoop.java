//Snippet 2:
  
public class DecrementingLoop { 
    public static void main(String[] args) { 
        int total = 0; 
        for (int i = 5; i > 0; i--) { 
            total += i; 
            if (i == 3) continue; 
            total -= 1; 
        } 
        System.out.println(total); 
    } 
} 
// Guess the output of this loop. 

/*
Output:

11


Dry Run:

Initialization:
total = 0
Loop runs from i = 5 to i > 0, decrementing by 1 each time.

Step of Execution:

Iteration (i = 5)

total += 5 → total = 5
i ≠ 3, so execute total -= 1 → total = 4
Iteration (i = 4)

total += 4 → total = 8
i ≠ 3, so execute total -= 1 → total = 7
Iteration (i = 3)

total += 3 → total = 10
i == 3, so continue is executed (skips total -= 1).
Iteration (i = 2)

total += 2 → total = 12
i ≠ 3, so execute total -= 1 → total = 11
Iteration (i = 1)

total += 1 → total = 12
i ≠ 3, so execute total -= 1 → total = 11

*/