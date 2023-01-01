from itertools import combinations_with_replacement

n, m = map(int, input().split())
data = list(map(int, input().split()))

for i in sorted(combinations_with_replacement(sorted(data), m)):
    print(*i)
