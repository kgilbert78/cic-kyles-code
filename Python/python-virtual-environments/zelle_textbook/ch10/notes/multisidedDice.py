from random import randrange

class multisidedDie:
    def __init__(self, sides): # object constructor, provides initial values for instance variables
        self.sides = sides
        self.value = 1

    def roll(self):
        self.value = randrange(1, self.sides + 1)

    def getValue(self):
        return self.value

    def setValue(self, value):
        self.value = value # instance variable, use to remember state of a particular object (class instance). value doesn't disappear when function terminates.

def main():
    die1 = multisidedDie(12)
    die1.roll()
    print(die1.getValue())
main()