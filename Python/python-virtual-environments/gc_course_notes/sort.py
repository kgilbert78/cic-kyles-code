# selection sort goes through entire unsorted list on each iteration, inefficient
def selectionSort(myList):
    maxIndex = len(myList) - 1
    for sortPositionIndex in range(0, maxIndex - 1):

    # find the smallest remaining in the rest of the elements

        # assume smallest is first in remaining list
        minIndex = sortPositionIndex
        # loop thru rest & if find smaller one, update minIndex
        for remainingElementsIndex in range(sortPositionIndex + 1, maxIndex + 1):
            if myList[remainingElementsIndex] < myList[minIndex]:
                minIndex = remainingElementsIndex

    # swap that item
        temp = myList[sortPositionIndex]
        myList[sortPositionIndex] = myList[minIndex]
        myList[minIndex] = temp

favoriteFoods = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']

selectionSort(favoriteFoods)
print(favoriteFoods) # in-place sort (changes original list) 
# ... out-of-place would create a copy to sort, maintains original list unchanged.


# insertion sort is more efficient, sort elements above the index and on each iteration add one more element into the right spot
def insertionSort(myList):
    for itemToSortIndex in range(0, len(myList)):
        temp = myList[itemToSortIndex]
        # working backward through the sorted ones...
        sortedItemsIndex = itemToSortIndex - 1
        while (sortedItemsIndex >= 0) and (myList[sortedItemsIndex] > temp):
            # (move each item 1 place to make room for inserting)
            myList[sortedItemsIndex + 1] = myList[sortedItemsIndex]
            sortedItemsIndex -= 1
        # ...to find where to insert the current one (beginning of list or after element not greater than the one to insert)
        myList[sortedItemsIndex + 1] = temp

favoriteFoods2 = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']

selectionSort(favoriteFoods2)
print(favoriteFoods2)

# Use Python's built in search functions (combo of insertion sort and merge sort - very efficient):

# in-place sort (changes original list)
favoriteFoods3 = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']
favoriteFoods3.sort()

# out-of-place would create a copy to sort, maintains original list unchanged.
favoriteFoods4 = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']
sortedFavorites = sorted(favoriteFoods4)
print(favoriteFoods4)
print(sortedFavorites)