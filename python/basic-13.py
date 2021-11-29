# #1
# for i in range(0, 256, 1):
#     print(i)

# #2
# for i in range(0, 256, 1):
#     if (i % 2 != 0):
#         print(i)

# #3
# sum = 0
# for i in range(0, 256, 1):
#     sum += i
#     print(sum)


# #4
# array1 = [0, 5, 2, 1, 5, 3, 2, 1, 3, 5, 3, 12, 3, 4, 2]

# def printArrayVals(arr):
#     for i in range(0, len(arr), 1):
#         print(arr[i])

# printArrayVals(array1)


# #5
# array1 = [0, 5, 2, 1, 5, 3, 2, 1, 3, 5, 3, 12, 3, 4, 2]


# def printMaxOfArray(arr):
#     max = arr[0]
#     for item in arr:
#         if item > max:
#             max = item
#     print(max)


# printMaxOfArray(array1)


# #6
# array1 = [0, 5, 2, 1, 5, 3, 2, 1, 3, 5, 3, 12, 3, 4, 2]


# def printAverageOfArray(arr):
#     sum = 0
#     for item in arr:
#         sum += item
#         print(sum)
#     print(sum / len(arr))


# printAverageOfArray(array1)


# #7
# def returnOddsArray1To255():
#     arr = []
#     for i in range(1, 256, 2):
#         arr.append(i)
#     print(arr)


# returnOddsArray1To255()


# #8
# array1 = [0, 5, 2, 1, 5, 3, 2, 1, 3, 5, 3, 12, 3, 4, 2]


# def squareArrayVals(arr):
#     for i in range(0, len(arr), 1):
#         arr[i] = arr[i]**2
#     print(arr)


# squareArrayVals(array1)


# #9
# array1 = [0, 5, 2, 1, 5, 3, 2, 1, 3, 5, 3, 12, 3, 4, 2]


# def returnArrayCountGreaterThanY(arr, y):
#     count = 0
#     for item in arr:
#         if item > y:
#             count += 1
#             print(item)
#     print("total count: " + str(count))


# returnArrayCountGreaterThanY(array1, 4)


# #10
# array1 = [0, -5, 2, 1, -5, -3, 2, -1, 3, 5, 3, -12, 3, 4, 2]


# def zeroOutArrayNegativeVals(arr):
#     for i in range(0, len(arr), 1):
#         if arr[i] < 0:
#             arr[i] = arr[i]*(-1)
#     print(arr)


# zeroOutArrayNegativeVals(array1)


# #11
# array1 = [0, -5, 2, 1, -5, -3, 2, -1, 3, 5, 3, -12, 3, 4, 2]


# def printMaxMinAverageArrayVals(arr):
#     min = arr[0]
#     max = arr[0]
#     sum = 0
#     for item in arr:
#         sum += item
#         if item > max:
#             max = item
#         elif item < min:
#             min = item
#     avg = sum / len(arr)
#     print("max: " + str(max) + ", min: " + str(min) + ", avg: " + str(avg))


# printMaxMinAverageArrayVals(array1)


# #12
# array1 = [0, -5, 2, 1, -5, -3, 2, -1, 3, 5, 3, -12, 3, 4, 2]


# def shiftArrayValsLeft(arr):
#     for i in range(0, len(arr), 1):
#         if i == len(arr)-1:
#             arr[i] = 0
#         else:
#             arr[i] = arr[i+1]
#     print(arr)


# shiftArrayValsLeft(array1)


# #13
# array1 = [0, -5, 2, 1, -5, -3, 2, -1, 3, 5, 3, -12, 3, 4, 2]


# def swapStringForArrayNegativeVals(arr):
#     for i in range(0, len(arr), 1):
#         if arr[i] < 0:
#             arr[i] = "dojo"
#     print(arr)


# swapStringForArrayNegativeVals(array1)
