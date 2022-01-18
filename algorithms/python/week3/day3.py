test_a = [3, 7, 5, 4, 0, 2]


def bubble_sort(arr):
    for i in range(len(arr)):                       #
        for j in range(len(arr) - i - 1):           #
            if (arr[j] > arr[j + 1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


bubble_sort(test_a)

print(test_a)
