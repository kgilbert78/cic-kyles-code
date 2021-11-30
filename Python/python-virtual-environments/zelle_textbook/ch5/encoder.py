def encode():
    message = input("Please enter a phrase to encode: ")
    for character in message:
        # ord converts character to it's unicode number (ordinal)
        print(ord(character), end=" ")

# expansion of book example above to write to a file
def encodeToFile():
    messagesFile = open("messages.txt", "a")
    message = input("Please enter a phrase to encode: ")
    phrase = ""
    for character in message:
        phrase = phrase + str(ord(character)) + " "
    phrase = phrase + str(ord(" ")) # for when the decoder prints without line breaks
    messagesFile.write(phrase)
    messagesFile.write("\n")
    messagesFile.close()

#encode()
encodeToFile()