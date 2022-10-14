import sys
import math

def lcm(a, b):
    return a * b // math.gcd(a, b)

_, *person = map(lambda x: x.split() , sys.stdin.read().splitlines())

for i in person:
    print(lcm(int(i[0]), int(i[1])))