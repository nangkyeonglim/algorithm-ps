route = []
for i in range(10):
    data = list(map(int, input().split()))
    route.append(data)

x, y = 1, 1
while True:
    route[x][y] = 9
    if route[x + 1][y] == 1 and route[x][y + 1] == 1:
        break

    if route[x][y + 1] == 0:
        y += 1
        continue
    elif route[x + 1][y] == 0:
        x += 1
        continue

    if route[x + 1][y] == 2:
        route[x + 1][y] = 9
        break
    elif route[x][y + 1] == 2:
        route[x][y + 1] = 9
        break
    
   
for i in range(10):
    for j in range(10):
        print(route[i][j], end = " ")
    print()