class Ball(object):

	def __init__(self, pos, vel):
		self.pos = pos
		self.vel = vel
		
	def update(self):
		self.pos = [self.pos[i] + self.vel[i]*0.7 for i in range(3)]
		self.vel[1] = self.vel[1] - 7

	def collision(self, speed, coordinates):
		norm_mag = sum(map(lambda x: x**2, coordinates))
		unit_norm = map(lambda x: float(x)/norm_mag, coordinates)
		dot_product = sum([self.vel[i]*unit_norm[i] for i in range(3)])
		self.vel = [self.vel[i] - 2*dot_product*unit_norm[i] + speed[i] for i in range(3)]

	def disappearBall(self):
		self.pos[1] = -100






