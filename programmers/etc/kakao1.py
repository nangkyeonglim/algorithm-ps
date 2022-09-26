def solution(today, terms, privacies):
    terms_dict = dict()
    answer = []

    for i in terms:
        terms_type, terms_deadline = i.split()
        terms_dict[terms_type] = int(terms_deadline)

    tag = 1   
    for i in privacies:
        pri_date, pri_type = i.split()
        y, m, d = map(int, pri_date.split("."))
        d -= 1
        if d == 0:
            d = 28
            m -= 1
            if m == 0:
                m = 12
                y -= 1
        m = m + terms_dict[pri_type]
        while m > 12:
            y += 1
            m -= 12
        deadline = f"{y}.{m:0>2}.{d:0>2}"

        if today > deadline:
            answer.append(tag)
        tag += 1

    return answer


print(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))