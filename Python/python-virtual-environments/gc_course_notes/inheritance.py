class FootballPlayer:
    name = "John Doe"
    team = "None"
    years_in_league = 0
    def printPlayer(self):
        print(self.name+" playing for the "+self.team+":")
    def isGood(self):
        print("Error! isGood is not defined!")
        return False

# pass name of parent class as parameter so it inherits the parent's attributes
class Quarterback(FootballPlayer):
    pass_attempts = 0
    completions = 0
    pass_yards = 0
    def completionRate(self):
        return self.completions/self.pass_attempts
    def yardsPerAttempt(self):
        return self.pass_yards/self.pass_attempts
    def isGood(self):
        return (self.yardsPerAttempt() > 7)

class RunningBack(FootballPlayer):
    rushes = 0
    rush_yards = 0
    def yardsPerRush(self):
        return self.rush_yards/self.rushes
    def isGood(self):
        return (self.yardsPerRush() > 4)

player1 = Quarterback()
player1.name = "John"
player1.team = "Cowboys"
player1.pass_attempts = 10
player1.completions = 6
player1.pass_yards = 57
player2 = RunningBack()
player2.name = "Joe"
player2.team = "Eagles"
player2.rushes = 12
player2.rush_yards = 73
playerlist = []
playerlist.append(player1)
playerlist.append(player2)
for player in playerlist:
    player.printPlayer()
    if (player.isGood()):
        print("  is a GOOD player")
    else:
        print("  is NOT a good player")

        # When the Python compiler sees the call to isGood, it first looks at the definition of isGood in the child class. If there’s not a definition of that method there, it will look at the parent to see if the method is defined there.

# player1.printPlayer()
# print(player1.yardsPerAttempt())
# player2.printPlayer()
# print(player2.yardsPerRush())