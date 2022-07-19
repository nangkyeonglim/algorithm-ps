def func1(data):
    sum = 0
    for i in range(data, 0, -1):
        if(i % 3 == 0 or i % 5 == 0):
            sum += i
    return sum

n = int(input())
print(func1(n))