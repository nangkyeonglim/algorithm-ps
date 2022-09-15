from itertools import permutations

def solution(mylist):
    mylist.sort()
    return list(permutations(mylist))

print(solution([2,1]))
