n = int(input())
called = list(map(int, input().split()))

called.reverse()

for i in called:
    print(i, end=" ")