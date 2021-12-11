# from math import radians, cos, sin # (this way you don't call math.radians just radians, not math.cos just cos, etc.)
import math

def main():
    # input the simulation parameters: angle, velocity, height, interval
    angle = float(input("Enter the launch angle in degrees: "))
    velocity = float(input("Enter the initial velocity (speed) in meters/second: "))
    startingHeight = float(input("Enter the initial height in meters: "))
    time = float(input("Enter the time interval between position calculations: "))

    # calculate the initial position of the cannonball: xPosition, yPosition
    xPosition = 0.0
    yPosition = startingHeight

    # calculate the initial velocities of the cannonball: xVelocity, yVelocity
    theta = math.radians(angle)
        # this ^ converts degrees entered to what python uses, 2π radians in a circle, so (π * angle) / 180 degrees
    xVelocity = velocity * math.cos(theta)
    yVelocity = velocity * math.sin(theta)
        # ^ see figure 10.1 on pg. 317
    
    # while the cannonball is still flying...
    while yPosition >= 0.0: # (ground = 0, use >= so we can start the ball on the ground)
        # update the values of xPosition, yPosition, xVelocity, yVelocity for interval seconds further into the flight
        xPosition = xPosition + time * xVelocity
        new_yVelocity = yVelocity - time * 9.8 # decrease by 9.8 meters per second, which is the acceleration of gravity
        yPosition = yPosition + time * (yVelocity + new_yVelocity)/2 # last part is * average velocity
        yVelocity = new_yVelocity

    # output the distance traveled as xPosition
    print("Distance traveled: {0:01f} meters.".format(xPosition))

main()
