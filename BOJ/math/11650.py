import sys

_, *coordinates = map(lambda s: s.strip(), sys.stdin.readlines())

for i in sorted(coordinates):
    print(i)