a, b = map(int, input().split())
a = bool(a)
b = bool(b)

print((not(a) or b) and (a or not(b)))