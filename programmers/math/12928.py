import math

def solution(n):
    list = set()
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            list.update((i, n//i))
 
    return sum(list)

print(solution(int(input())))
