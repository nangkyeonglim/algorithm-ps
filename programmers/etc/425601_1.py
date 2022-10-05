def solution(arr, divisor):
    answer = [ i for i in arr if i % divisor == 0 ]
    if answer == []:
        return [-1]
    return sorted(answer)

print(solution([2, 36, 1, 3], 7))