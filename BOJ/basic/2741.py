'''첫 풀이: 1~n까지 for문으로 출력
n = int(input())

for i in range(1, n+1):
    print(i)
'''

# 더 나은 풀이
# 1~n까지 range를 만들고 join 함수('구분자'.join(iterable)) 사용
n = range(1, int(input()) + 1)

print('\n'.join(map(str, n)))