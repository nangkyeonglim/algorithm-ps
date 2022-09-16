from collections import Counter

my_str = input().strip()
stats = dict(Counter(my_str))
print(''.join(sorted([k for k, v in stats.items() if max(stats.values()) == v])))

