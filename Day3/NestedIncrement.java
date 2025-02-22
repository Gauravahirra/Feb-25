//Snippet 7:
  
public class NestedIncrement { 
    public static void main(String[] args) { 
        int a = 10; 
        int b = 5; 
        int result = ++a * b-- - --a + b++; 
        System.out.println(result); 
    } 
} 
// Guess the output of this code snippet.

/*

Output:

49

Dry Run:

Initialization:
a = 10, b = 5

Expression Evaluation:
result = ++a * b-- - --a + b++

Let's break it down step by step:

++a (Pre-increment a)

a becomes 11
Expression so far: 11 * b-- - --a + b++
b-- (Post-decrement b)

Returns 5 (old value of b)
b becomes 4
Expression so far: 11 * 5 - --a + b++
--a (Pre-decrement a)

a becomes 10
Expression so far: 11 * 5 - 10 + b++
b++ (Post-increment b)

Returns 4 (old value of b)
b becomes 5
Final expression: 11 * 5 - 10 + 4
Final Calculation:
55 - 10 + 4 = 49
Final value of result = 49

*/