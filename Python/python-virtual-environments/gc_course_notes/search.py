# linear search for use in unsorted list
def isIn(myList, valueToFind):
    i = 0
    while (i<len(myList)):
        if myList[i] == valueToFind:
            return True
        else:
            i+=1
    return False

# binary search more efficient for sorted list
def binaryIn(myList, valueToFind):
    if len(myList) < 1:
        return False
    low = 0
    high = len(myList)-1
    if myList[low] == valueToFind or myList[high] == valueToFind:
        return True
    while low < (high-1):
        midpoint = low + (high-low) // 2 #integer division (drops remainder)
        if myList[midpoint] == valueToFind:
            return True
        elif myList[midpoint] < valueToFind:
            low = midpoint
        else:
            high = midpoint
    return False

# search that returns location of value found (or invalid index)
def binaryRtnIndexIn(myList, valueToFind):
    if len(myList) < 1:
        return False
    low = 0
    high = len(myList)-1
    if myList[low] == valueToFind:
        return low
    elif myList[high] == valueToFind:
        return high
    while low < (high-1):
        midpoint = low + (high-low) // 2 #integer division (drops remainder)
        if myList[midpoint] == valueToFind:
            return midpoint
        elif myList[midpoint] < valueToFind:
            low = midpoint
        else:
            high = midpoint
    return -1

favorite_foods = ['barbeque', 'chicken and dumplings', 'gumbo', 'ice cream', 'pecan pie', 'pizza']
print(binaryIn(favorite_foods, 'gumbo'))
print(binaryIn(favorite_foods, 'coconut'))