import sys

n, m = map(int, sys.stdin.readline().split())
person = sys.stdin.read().splitlines()

not_hear = set(person[:n])
not_see = set(person[n:])
not_hear_see = list(not_hear & not_see)

not_hear_see.sort()
print(len(not_hear_see))

for i in not_hear_see:
    print(i)