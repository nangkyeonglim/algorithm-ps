'''첫 풀이
# string 타입의 한 글자가 10의 배수인지 판별

data = sys.stdin.readline()

count = 0
for i in data:
    print(i, end='')
    count += 1
    if count % 10 == 0:
        print()
'''

#더 나은 풀이: range와 슬라이싱(Slincing) 이용
import sys

s = sys.stdin.readline()

for i in range(0, len(s), 10):
    print(s[i: i+10])