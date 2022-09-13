# pythonic 하지 않은 코드(low-level 언어처럼 짬)
def solution(mylist):
    answer = []
    for i in mylist:
        answer.append(len(i))
    return answer   

# pythonic 한 코드들
def solution1(mylist):
    return list(map(len, mylist))

def solution2(mylist):
    return [len(i) for i in mylist]
