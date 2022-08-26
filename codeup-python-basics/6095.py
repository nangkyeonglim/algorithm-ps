n = int(input())

board = [[0 for i in range(19)] for j in range(19)]

for i in range(n):
    x, y = map(int, input().split())
    board[x - 1][y - 1] = 1

for i in range(19):
    for j in range(19):
        print(board[i][j], end = " ")
    print()