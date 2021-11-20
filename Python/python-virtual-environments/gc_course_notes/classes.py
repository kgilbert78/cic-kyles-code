from datetime import date

class BankAccount:
    # because lists are mutable, if you set the deposits in the master then each instance's list would just be a reference to where the list is stored in the master, and updating that instance would affect all instances.
    # init method sets these attributes within each instance instead of the master class, using self parameter (special like "event" in js)
    def __init__(self, initial_amount=0.0):
        # start method name with underscore as reminder not to access it directly ("private")
        # direct access would eliminate record of the deposit in the list, etc.
        self._balance = initial_amount
        self._deposits = []
        self._withdrawals = []
        # class within a class, from datetime library imported at top
        self.opendate = date(2021, 3, 15)

    # methods
    def makeDeposit(self, amount):
        self._balance += amount
        self._deposits.append(amount)
    def makeWithdrawal(self, amount):
        self._balance -= amount
        self._withdrawals.append(amount)

    # create methods to get "private" data that shouldn't be accessed directly.
    def getBalance(self):
        return self._balance

    def getDeposits(self):
        ## prevent what users do w/list from affecting what's inside the object by returning a copy:
        copied_list = self._deposits[:] # slice without starting/ending points to copy whole list
        return copied_list
        
    def getWithdrawals(self):
        return self._withdrawals
        ## avoid this direct way because of this:
        # x = checking_account.getWithdrawals()
        # x.append(10.00)
        # print(checking_account.getWithdrawals()) ## returns [25.0, 10.0] (but the checking_account balance is does not reflect the 10.00 withdrawal)

savings_account = BankAccount()
checking_account = BankAccount(200.00)
checking_account.makeDeposit(50.00)
checking_account.makeWithdrawal(25.00)

print("savings acct balance:", savings_account.getBalance())
print("checking acct balance:", checking_account.getBalance())
print("checking acct deposits:", checking_account.getDeposits())
print("checking acct withdrawals:", checking_account.getWithdrawals())
print("date checking acct opened:", checking_account.opendate)

## example of objects being mutable inside of other objects:
def winLottery(account):
    account.makeDeposit(1000000.00)

checking_account2 = BankAccount()
winLottery(checking_account2)
print("checking acct 2 balance:", checking_account2.getBalance())
## if you don't want a mutable datatype to be changed, return a copy

## use classes & objects whenever data and actions on that data can naturally be grouped together. 
## keeps related code together & makes it easier to design & manage different parts of the software

# setting attribute that doesn't exist on an instance will create that attribute on that instance only, not the class, and when you try to access the attribute on another instance it will throw an error.