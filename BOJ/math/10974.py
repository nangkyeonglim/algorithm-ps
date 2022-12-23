from itertools import permutations

n = int(input())
for i in map(" ".join, permutations([str(i) for i in range(1, n + 1)])):
    print(i)
