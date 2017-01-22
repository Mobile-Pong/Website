from game_objects import Ball, Net, Table, Paddle
class game_logic(object):
	ball = Ball([700, 150, -1200], [10, 10, 10], 30)
	net = Net([50, 100, -1200], 70, 1400)
	table = Table([50, 100, -50], 3500, 1400)
	paddle = Paddle([50, 50, -20], 70)

	def check_collision(self):
		if net.collision(ball):
			restartGame()
		elif table.collision(ball):
			ball.collision([0, 0, 0], [0, 1, 0])
		elif paddle.collision(ball):
			ball.collision(paddle.speed, [0, 0, -1])
		else:
			ball.update()

	def restartGame():
		ball.disapearBall()
		


