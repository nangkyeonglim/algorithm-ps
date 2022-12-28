from itertools import permutations

n, m = map(int, input().split())
for i in map(" ".join, permutations([str(i) for i in range(1, n + 1)], m)):
    print(i)
