import math

#최소 공배수(LCM)를 구하는 함수
def lcm(a, b):
	return a * b // math.gcd(a, b)

a, b, c = map(int, input().split())

print(lcm(lcm(a, b), c))

#python 3.9버전 이상
"""
import math

a, b, c = map(int, input().split())

print(math.lcm(math.lcm(a, b), c))
"""