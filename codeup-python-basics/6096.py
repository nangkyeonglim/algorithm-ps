board = []
for i in range(19):
    data = list(map(int, input().split()))
    board.append(data)

n = int(input())

for i in range(n):
    x, y = map(int, input().split())
    for j in range(19):
        if board[j][y - 1] == 0:
            board[j][y - 1] = 1
        else:
            board[j][y - 1] = 0

        if board[x - 1][j] == 0:
            board[x - 1][j] = 1
        else:
            board[x - 1][j] = 0

for i in range(19):
    for j in range(19):
        print(board[i][j], end = " ")
    print()