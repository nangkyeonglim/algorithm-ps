import sys
import math

def gcd_lcm(n, m):
    return [math.gcd(n, m), n * m // math.gcd(n , m)]

n, m = map(int, sys.stdin.readline().split())
print(gcd_lcm(n ,m))