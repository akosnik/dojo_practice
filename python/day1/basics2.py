# vals greater than second

def greaterThan(list, val=0):
    newList = []
    for i in range(len(list)):
        if (list[i] > val):
            newList.append(list[i])
    return newList


array1 = [0, 5, 10, 15, 20, 25]

print(greaterThan(array1, 10))
