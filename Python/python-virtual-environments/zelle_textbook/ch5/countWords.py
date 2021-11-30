# pg. 172 question 9
def wordCount():
    sentence = input("Enter a sentence to see the number of words in it: ")
    words = sentence.split(" ")
    print(len(words))
# wordCount()

# idea: modify this to open a file and do a word count for the whole document
def documentWordCount():
    userDoc = input("Please enter the path of the file for a word count: ")
    with open(userDoc, "r") as wordsToCount:
        totalWords = 0
        for line in wordsToCount:
            totalWords += len(line.split(" "))
        print(totalWords)

# documentWordCount()

# question 10
def avgWordLen():
    sentence = input("Enter a sentence to see the average length of the words in it: ")
    words = sentence.split(" ")
    numWords = len(words)
    wordLen = 0
    for word in words:
        wordLen += len(word)
    print(wordLen/numWords)
avgWordLen()


