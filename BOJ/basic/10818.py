'''첫 풀이: list에 저장시키고 최대, 최솟값
n = int(input())
num = list(map(int, input().split()))
print(min(num), max(num))
'''

#더 나은 풀이: 굳이 n개의 정수는 저장할 필요없으므로 (_)언더스코어 사용
#첫 번째 수 빼고 나머지는 *a로 packing
import sys

_, *a = map(int, sys.stdin.read().split())
print(min(a), max(a))