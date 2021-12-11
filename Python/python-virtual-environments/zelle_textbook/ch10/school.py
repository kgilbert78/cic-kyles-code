# shows one use of classes - grouping together a set of information that describes someone/something ("records")

# MODIFY THIS SO IF MULTIPLE STUDENTS "TIE" FOR BEST STUDENT WITH THE SAME GPA IT PRINTS ALL THE TYING STUDENTS' NAMES

class Student:
    def __init__(self, id, lastName, firstName, hours, qpoints):
        self._id = id
        self._lastName = lastName
        self._firstName = firstName
        self._hours = float(hours)
        self._qpoints = float(qpoints)

    def getID(self):
        return self._id

    def getFirstName(self):
        return self._firstName
    
    def getLastName(self):
        return self._lastName
    
    def getName(self):
        return self._firstName + " " + self._lastName
    
    def getHours(self):
        return self._hours
    
    def getQPoints(self):
        return self._qpoints
    
    def gpa(self):
        return self._qpoints/self._hours
# end class Student

def makeStudent(infoStr):
    # id, lastName, firstName, hours, qpoints = infoStr.split("\t") # regex for tab, to split tab-separated file
    id, lastName, firstName, hours, qpoints = infoStr.split(",")
    return Student(id, lastName, firstName, hours, qpoints)

def main():
    fileName = input("Enter the filepath & name of the grade file: ")
    inFile = open(fileName, 'r')

    # temporarily set the best student to the first record in the file
    bestStudent = makeStudent(inFile.readline())

    for eachLine in inFile:
        currentStudent = makeStudent(eachLine)
        if currentStudent.gpa() > bestStudent.gpa():
            bestStudent = currentStudent
    
    inFile.close()


    print("The best student is: ", bestStudent.getName())
    print("GPA: ", bestStudent.gpa())
# end def main()

main()