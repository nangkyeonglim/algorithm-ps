"""재귀함수 사용: 시간복잡도, 공간복잡도O(2^N)
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

n = int(input())
print(fibonacci(n))
"""

n = int(input())
a = b = result = 1
for i in range(3, n+1):
    result = a + b
    a = b
    b = result

print(result)