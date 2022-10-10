"""import sys

n = int(sys.stdin.readline())
coordinates = []

for i in range(n):
    coordinates.append(list(map(int, sys.stdin.readline().split())))

coordinates.sort(key = lambda x: (x[0], x[1]))

for i in range(n):
    print(coordinates[i][0], coordinates[i][1])"""

import sys
_, *dot = sys.stdin.readlines()
dot.sort(key=lambda x: (int(x.split()[0]), int(x.split()[1])))
print(''.join(dot))