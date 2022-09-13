s, n = input().strip().split(' ')
n = int(n)
print(s.ljust(n), s.center(n), s.rjust(n), sep="\n")