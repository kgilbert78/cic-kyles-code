# shows one use of classes - modeling a real world object that has complex behavior 

# from math import radians, cos, sin # (this way you don't call math.radians just radians, not math.cos just cos, etc.)
import math

def main():
    # input the simulation parameters: angle, velocity, height, interval
    angle, velocity, startingHeight, time = getInputs()

    # calculate the initial position of the cannonball: xPosition, yPosition
    xPosition, yPosition = 0.0, startingHeight

    # calculate the initial velocities of the cannonball: xVelocity, yVelocity
    cannonball1 = Projectile(angle, velocity, startingHeight)
    
    # while the cannonball is still flying...
    while cannonball1.getY() >= 0.0: # (ground = 0, use >= so we can start the ball on the ground)
        # update the values of xPosition, yPosition, xVelocity, yVelocity for interval seconds further into the flight
        cannonball1.update(time)

    # output the distance traveled as xPosition
    print("Distance traveled: {0:01f} meters.".format(cannonball1.getX()))

def getInputs():
    angle = float(input("Enter the launch angle in degrees: "))
    velocity = float(input("Enter the initial velocity (speed) in meters/second: "))
    startingHeight = float(input("Enter the initial height in meters: "))
    time = float(input("Enter the time interval between position calculations in seconds: "))
    return angle, velocity, startingHeight, time

class Projectile:
    def __init__(self, angle, velocity, height):
        self.xPosition = 0.0
        self.yPosition = height
        theta = math.radians(angle) # not instance variable because not needed after init function terminates
        self.xVelocity = velocity * math.cos(theta)
        self.yVelocity = velocity * math.sin(theta)

    def getX(self):
        return self.xPosition
    
    def getY(self):
        return self.yPosition
    
    def update(self, time):
        self.xPosition = self.xPosition + time * self.xVelocity
        new_yVelocity = self.yVelocity - time * 9.8
        self.yPosition = self.yPosition + time * (self.yVelocity + new_yVelocity) / 2
        self.yVelocity = new_yVelocity

# see pg. 215-216
if __name__ == '__main__':
    main()