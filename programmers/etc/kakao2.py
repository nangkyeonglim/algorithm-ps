def solution(cap, n, deliveries, pickups):
    d = p = n - 1
    deliver_cap = pickup_cap = cap
    answer = 0
    while d >= 0 and deliveries[d] == 0:
            d = d - 1
    while p >= 0 and pickups[p] == 0:
            p = p - 1
    while d >= 0 or p >= 0:  
        if d > p:
            answer += 2 * (d + 1)
        else:
            answer += 2 * (p + 1)

        #배달
        while d >= 0 and deliveries[d] <= deliver_cap:  
            if deliveries[d] == 0:
                d = d - 1
            else:               
                deliver_cap = deliver_cap - deliveries[d]
                deliveries[d] = 0
                d = d - 1
            if d < 0:
                break
            
        if d >= 0 and deliveries[d] > deliver_cap:                
            deliveries[d] -= deliver_cap
            deliver_cap = 0

        if deliver_cap == 0:
            deliver_cap = cap
  
        # 수거
        while p >= 0 and pickups[p] <= pickup_cap:                 
            if pickups[p] == 0:
                p = p - 1
            else:               
                pickup_cap = pickup_cap - pickups[p]
                pickups[p] = 0
                p = p - 1
            if p < 0:
                break
        if p >= 0 and pickups[p] > pickup_cap:                
            pickups[p] -= pickup_cap
            pickup_cap = 0
        if pickup_cap == 0:
            pickup_cap = cap
    return answer

print(solution(4, 3, [0, 0, 0], [0, 0, 0]))
