n = int(input())
data = input()
sum = 0
for i in range(n):
    sum += int(data[i])

print(sum)


input()
print(sum(map(int,input())))