def solution(mylist):
    return list(map(list,zip(*mylist)))

print(solution([[1,2,3], [4,5,6], [7,8,9]]))