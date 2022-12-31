from itertools import permutations

n, m = map(int, input().split())
data = list(map(int, input().split()))

for i in sorted(set(permutations(data, m))):
    print(*i)
