import itertools

my_list = [[1, 2], [3, 4], [5, 6]]

#2차원 리스트를 1차원 리스트로 만들기
# 방법 1 - sum 함수
print(sum(my_list, []))

# 방법 2 - itertools.chain
print(list(itertools.chain.from_iterable(my_list)))

# 방법 3 - itertools와 unpacking
print(list(itertools.chain(*my_list)))

# 방법 4 - list comprehension 이용
print([element for array in my_list for element in array])
