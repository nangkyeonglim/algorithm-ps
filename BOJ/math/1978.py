import math
import sys

_, *num = map(int, sys.stdin.read().split())

answer = 0
for i in num:
    if i <= 1: continue
    for j in range(2, int(math.sqrt(i))+1):
        if i % j == 0:
            break
    else:
        answer += 1
print(answer)