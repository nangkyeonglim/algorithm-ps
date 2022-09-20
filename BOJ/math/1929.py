import math
a, b = map(int, input().split())

if a == 1:
    a = 2
    
for i in range(a, b+1):
    for j in range(2, int(math.sqrt(i))+1):
        if i % j == 0:
            break
    else:
        print(i)