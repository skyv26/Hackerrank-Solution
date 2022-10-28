# Subarray Division

> Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it. Lily decides to share a contiguous segment of the bar selected such that : 
> - The length of the segment matches Ron's birth month and 
> - The sum of the integers on the squares is equal to his birth day.

## **Example**

**s = [2, 2, 1, 3, 2]**

**d = 4**

**m = 2**

Lily wants to find segments summing to Ron's birth day, `d = 4` with a length equalling his birth month, `m = 2`.
In this case, there are two segments meeting her criteria: `[2, 2]` and `[1, 3]`.

### **Function Description**

Complete the birthday function in the editor below.
birthday has the following parameter(s):
- int s[n]: the numbers on each of the squares of chocolate
- int d: Ron's birth day
- int m: Ron's birth month

#### **Returns**
- int: the number of ways the bar can be divided

#### **Constraints**

- 1 <= n <= 100
- 1 <= s[i] <= 5 where (0 <= i <= n)
- 1 <= d <= 31
- 1 <= m <= 12

#### **Sample Input 0**

> 5 <br>1 2 1 3 2 <br>3 2

#### **Sample Output 0**

> 2

#### **Explanation 0**

Lily wants to give Ron `m = 2` squares summing to `d = 3` . The following two segments meet the criteria:

<img src='./img/img-1.png' style="background: white; padding: 2rem;">

#### **Sample Input 1**

> 6 <br>1 1 1 1 1 1<br>3 2

#### **Sample Output 0**

> 0

#### **Explanation 1**

Lily wants to give Ron `m = 2` squares summing to `d = 3` . The following two segments meet the criteria:

<img src='./img/img-2.png' style="background: white; padding: 2rem;">

Thus, we print `0` as our answer.