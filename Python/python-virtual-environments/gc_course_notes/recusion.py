# BASIC EXAMPLE
def countdown(num):
    print(num)
    if num > 0:
        countdown(num - 1)
countdown(5)

# NEXT 2 FUNCTIONS - BIGGER EXAMPLE WITH SORTING BY REPEATEDLY DIVIDING & MERGING 2 LISTS

# function to divide list into two halves
def mergeSort(bigList):
    listLength = len(bigList)
    # base case - point where recursive routine stops. or if original call passes a list of one or less, it's already sorted (plus it can't be divided to sort 2 halves).
    if listLength <= 1:
        return
    # divide list in half
    listFirstHalf = bigList[:listLength//2] # slice from start to midpoint w/integer division to drop remainder
    listSecondHalf = bigList[listLength//2:] # slice from midpoint to end, integer division
    # recursive part - keep dividing lists in half until reaching the base case (list of one)
    mergeSort(listFirstHalf)
    mergeSort(listSecondHalf)
    # run all 3 through the merge function defined below: goes through the 2 list halves, pulling the smallest value from between them & putting it into the original list / current original list
    merge(bigList, listFirstHalf, listSecondHalf)
    return

# function to go through the 2 list halves, pulling the smallest value from between them & putting it into the original list / current original list
def merge(bigList, listFirstHalf, listSecondHalf):
    indexBigList = 0
    indexFirstHalf = 0
    indexSecondHalf = 0

    # 1 continue as long as haven't hit end of either list half
    while (indexFirstHalf < len(listFirstHalf) or indexSecondHalf < len(listSecondHalf)):
        # 2 check if at end of first half - if not go to else 2
        if indexFirstHalf < len(listFirstHalf):
            # 3 check if at end of second half - if not go to else 3
            if indexSecondHalf < len(listSecondHalf):
                # 4 if not at end of either half, pull value from whichever has smallest current value
                    if listFirstHalf[indexFirstHalf] < listSecondHalf[indexSecondHalf]:
                        # 5 if pulling from 1st half (or go to else 5)
                        bigList[indexBigList] = listFirstHalf[indexFirstHalf]
                        indexFirstHalf += 1
                    else: # 5 if pulling from 2nd half
                        bigList[indexBigList] = listSecondHalf[indexSecondHalf]
                        indexSecondHalf += 1
            else: # 3 pull value from first half
                bigList[indexBigList] = listFirstHalf[indexFirstHalf]
                indexFirstHalf += 1
            
        else: # 2 pull from the second half
            bigList[indexBigList] = listSecondHalf[indexSecondHalf]
            indexSecondHalf += 1

        # 6 increment big index because we've added something to the big list with 1-5
        indexBigList += 1
    return

favoriteFoods = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']
mergeSort(favoriteFoods)
print(favoriteFoods)


# Notes on "return" by itself: 
    # This is used for the same reason as break in loops. The return value doesn't matter and you only want to exit the whole function. https://stackoverflow.com/questions/15300550/return-return-none-and-no-return-at-all
    # This says it returns "none": https://realpython.com/python-return-statement/#returning-none-explicitly
# this doesn't seem to be what it's doing above. something about recursion makes it different? seems to return the parameter(s), which have been sorted. but simpler example below does as the docs above said - need to put "return param" to get the parameter to print.
def bareReturn(param):
    return
print("bare return:", bareReturn(43))

def returnParameter(param):
    return param
print("return parameter:", returnParameter(43))

# you can exit the merge & mergeSort functions without returning anything because the lists have been altered! when it finishes running the functions then it goes to the next line and prints the list AFTER it's changed. see simpler example below.
myArray = [1, 2, 3]
def bareReturn2(param):
    myArray.append(4)
    return
bareReturn2(myArray)
print("myArray after bareReturn2:", myArray)


def quickSort(bigList):
# base case - list of one or less
    if len(bigList) <= 1:
        return
# set pivot to first thing in the list
    pivot = bigList[0]
# put the rest of the elements into 2 lists - one less than the pivot & one greater than the pivot.
    listUnderPivot = []
    listOverPivot = []
    #for listItem in range(1, len(bigList)):
    # video did this:
    for listItem in bigList[1:]:
        if listItem < pivot:
            listUnderPivot.append(listItem)
        else: # video puts values equal to the pivot in this list and it works because equal values can be in either order. i could have specified elif listItem >= pivot and left else off.
            listOverPivot.append(listItem)
# do that recursively until you reach the base case
    quickSort(listUnderPivot)
    quickSort(listOverPivot)
# join the 2 lists around the pivot
    bigList[:] = [] # clear bigList by slicing all - relying on it being mutable, so can't assign bigList itself to a new value, need to modify elements in it instead.
    for listItem in listUnderPivot:
        bigList.append(listItem)
    bigList.append(pivot)
    for listItem in listOverPivot:
        bigList.append(listItem)
    return

favoriteFoods2 = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']
quickSort(favoriteFoods2)
print(favoriteFoods2)

listWithDuplicates = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream', 'barbeque', 'gumbo']
quickSort(listWithDuplicates)
print("list with duplicates:", listWithDuplicates)