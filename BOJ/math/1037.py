import sys

_ , *num = map(int, sys.stdin.read().split())
print(max(num)*min(num))