# from math import radians, cos, sin # (this way you don't call math.radians just radians, not math.cos just cos, etc.)
import math

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