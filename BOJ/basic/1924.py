'''첫 풀이: 리스트에 각 달을 적고, slicing을 이용하여 날짜를 구함
x, y = map(int, input().split())

cal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day_week = ['MON', 'TUE' , 'WED', 'THU', 'FRI', 'SAT', 'SUN'] 

print(day_week[(sum(cal[0: x - 1]) + y - 1) % 7])
'''

# 시간, 메모리상 차이는 없지만 좀 더 직관적이고 보기에 간단
import sys
x, y = map(int, sys.stdin.readline().split())

for i in range(1, x):
    if i in [4, 6, 9, 11]:
        y += 30
    elif i == 2:
        y += 28
    else:
        y += 31

day_week = ['SUN', 'MON', 'TUE' , 'WED', 'THU', 'FRI', 'SAT'] 
print(day_week[y % 7])
