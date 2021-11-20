def mergeSort(bigList):
    listlength = len(bigList)
    if listlength <= 1:
        return
    listFirstHalf = bigList[:listlength//2]
    listSecondHalf = bigList[listlength//2:]
    mergeSort(listFirstHalf)
    mergeSort(listSecondHalf)
    merge(bigList, listFirstHalf, listSecondHalf)
    return

def merge(bigList, listFirstHalf, listSecondHalf): 
    indexBigList = 0
    indexFirstHalf = 0
    indexSecondHalf = 0
    while (indexFirstHalf < len(listFirstHalf)) or (indexSecondHalf < len(listSecondHalf)):
        if indexFirstHalf < len(listFirstHalf):
            if indexSecondHalf < len(listSecondHalf):
                if listFirstHalf[indexFirstHalf] < listSecondHalf[indexSecondHalf]:
                    bigList[indexBigList] = listFirstHalf[indexFirstHalf]
                    indexFirstHalf += 1 
                else:
                    bigList[indexBigList] = listSecondHalf[indexSecondHalf]
                    indexSecondHalf += 1 
            else:
                bigList[indexBigList] = listFirstHalf[indexFirstHalf]
                indexFirstHalf += 1 
        else:
            bigList[indexBigList] = listSecondHalf[indexSecondHalf]
            indexSecondHalf += 1
        indexBigList += 1
    return

favoriteFoods = ['pizza', 'barbeque', 'gumbo', 'chicken and dumplings', 'pecan pie', 'ice cream']
mergeSort(favoriteFoods)
print(favoriteFoods)
