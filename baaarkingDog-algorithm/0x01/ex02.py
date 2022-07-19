#복잡도 0(n^2)

def func2(arr, n):
    result = 0 
    for i in range(n):
        for j in range(i + 1, n):
            if(arr[i] + arr[j] == 100):
                return 1
    return 0

print(func2([1, 52, 48], 3))
print(func2([50, 42], 2))
print(func2([4, 13, 63, 87], 4))