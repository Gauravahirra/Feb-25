//Snippet 6:

  
public class IncrementDecrement { 
    public static void main(String[] args) { 
        int x = 5; 
        int y = ++x - x-- + --x + x++; 
        System.out.println(y); 
    } 
} 
// Guess the output of this code snippet. 

/*

Output:

8


Dry Run:

Initialization:
x = 5

Expression Evaluation:
y = ++x - x-- + --x + x++

Let's evaluate step by step:

++x (Pre-increment x)

x becomes 6
Expression so far: 6 - x-- + --x + x++
x-- (Post-decrement x)

Returns 6 (old value of x)
x becomes 5
Expression so far: 6 - 6 + --x + x++
--x (Pre-decrement x)

x becomes 4
Expression so far: 6 - 6 + 4 + x++
x++ (Post-increment x)

Returns 4 (old value of x)
x becomes 5
Final expression: 6 - 6 + 4 + 4

Final Calculation:
6 - 6 + 4 + 4 = 8
Final value of y = 8


*/