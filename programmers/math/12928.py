import math

def solution(n):
    divisor = set()
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            divisor.update((i, n//i))
 
    return sum(divisor)

print(solution(int(input())))
