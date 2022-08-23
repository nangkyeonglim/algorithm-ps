n = int(input())
called = list(map(int, input().split()))
student = [0] * 23

for i in called:
    student[i - 1] += 1

for i in student:
    print(i, end=" ")