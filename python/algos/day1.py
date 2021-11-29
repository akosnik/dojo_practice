# // Use the acronym function below to return the acronyms, or capitalized first letters, of each word in a sentence

myString = "free all rodents that like evil kittens"


def acronym(str):
    newStr = str[0].upper()
    for i in range(len(str)):
        if (str[i] == ' '):
            newStr += str[i + 1].upper()
    print(newStr)


acronym(myString)


# // Use the reverseString function below to take in a string and reverse the order of each character in that string

myString2 = "yo banana boy"


def reverse(str):
    newStr = ''
    for i in range(len(str)-1, -1, -1):
        newStr += str[i]
    print(newStr)


reverse(myString2)
