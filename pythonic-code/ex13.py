mylist = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
new_list =  list(zip(*mylist[::-1]))

print(new_list)