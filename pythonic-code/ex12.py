from collections import defaultdict

movie_review = [('Clementine', 5), ('Parasite', 4.5), ('Clementine', 5)]

index = defaultdict(list)

for review in movie_review:
    index[review[0]].append(review[1]) # {'Clementine': [5, 5], 'Parasite': [4.5]}

print(index['Train to Busan'])
print(index)