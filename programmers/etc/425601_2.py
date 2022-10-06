import string


def solution(x):
    sum = 0
    num = x
    while x > 0:
        sum += x % 10
        x = x // 10

    if num % sum == 0:
        return True
    else:
        return False


def solution2(x):
    sum = 0
    for i in map(int, str(x)):
        sum += i

    if x % sum == 0:
        return True
    else:
        return False



print(solution2(18))