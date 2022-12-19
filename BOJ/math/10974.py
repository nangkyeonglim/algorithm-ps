from itertools import permutations

n = int(input())
result = list(permutations([i for i in range(1, n + 1)], n))
for i in result:
    print(*i)
