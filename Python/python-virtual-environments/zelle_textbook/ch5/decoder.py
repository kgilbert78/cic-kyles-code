def decode():
    encodedString = input("Please enter the encoded phrase: ")
    characters = []
    for num_as_string in encodedString.split():
        num = int(num_as_string)
        # chr converts unicode number to it's corresponding character
        characters.append(chr(num))
    
    decoded_message = "".join(characters)
    print(decoded_message)


# 2 expansions of book example above to "decode" messages saved to a file

def decodeFile():
    messagesFile = open("messages.txt", "r")
    encodedString = messagesFile.read()
    characters = []
    for num_as_string in encodedString.split():
        num = int(num_as_string)
        characters.append(chr(num))
    decoded_message = "".join(characters)
    print(decoded_message)
    messagesFile.close()

def decodeFileNewLines():
    # with open("messages.txt", "r") as messagesFile: 
    #     for encodedString in messagesFile.readlines():
    #         characters = []
    #         for num_as_string in encodedString.split():
    #             num = int(num_as_string)
    #             characters.append(chr(num))
    #         decoded_message = "".join(characters)
    #         print(decoded_message)
    with open("messages.txt", "r") as messagesFile:
        for encodedString in messagesFile:
            characters = []
            for num_as_string in encodedString.split():
                num = int(num_as_string)
                characters.append(chr(num))
            decoded_message = "".join(characters)
            print(decoded_message)

# decode()
# decodeFile()
decodeFileNewLines()