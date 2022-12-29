from itertools import combinations

while True:
    k, *s = map(int, input().split())
    if k == 0:
        break
    for i in combinations(s, 6):
        print(*i)
    print()
