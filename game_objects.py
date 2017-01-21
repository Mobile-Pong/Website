import math

class Net(object):
    def __init__(self, left_corner_pos, height, width):
        self.left_corner_pos = left_corner_pos
        self.height = height
        self.width = width

    def collision(self, ball):
        if ball.pos[1] <= self.left_corner_pos[1] and
           ball.pos[1] >= self.left_corner_pos[1] - self.height and
           ball.pos[0] >= self.left_corner_pos[0] and
           ball.pos[0] <= self.left_corner_pos[0] + self.width:
            return ball.pos[2] - ball.radius <= self.left_corner_pos[2]
                   ball.pos[2] + ball.radius >= self.left_corner_pos[2]
        else:
            return dist(ball.pos, [ball.pos[0], left_corner_pos[1], left_corner_pos[2]]) <= ball.radius


class Table(object):
    def __init__(self, left_corner_pos, length, width):
        self.left_corner_pos = left_corner_pos
        self.length = length
        self.width = width

    def collision(self, ball):
        return ball.pos[1] - ball.radius <= self.left_corner_pos[1] and
           ball.pos[1] + ball.radius >= self.left_corner_pos[1] and
           ball.pos[0] >= self.left_corner_pos[0] and
           ball.pos[0] <= self.left_corner_pos[0] + self.width and
           ball.pos[2] <= self.left_corner_pos[2] and
           ball.pos[2] >= self.left_corner_pos[2] - self.length


class Paddle(object):
    def __init__(self, center, radius, angles):
        # angles: [yaw, pitch, roll]
        self.pos = pos
        self.center = center
        self.radius = radius
        self.angles = angles

def dist(pt1, pt2):
    return math.sqrt(sum(map(lambda x: x ** 2, [pt1[i] - pt2[i] for i in range(3)])))
