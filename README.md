# snake-client

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

## Configuration

Configurations can be done within the constants.js file.

## Getting Started

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side
- Run the development snake client using the `node play.js` command
- Enter your initials or leave it blank, then press `Enter`
- Your snake should appear on the board at a random position with your initials or ??? with a simple greeting

## Final Product

![Player with name](./game-screenshot.png)
![Player without name](./game-screenshot-anon.png)

## How to Play

- Use WASD to control the snake to eat the "apple" appears on the borad
- Game over if the snake hits the edge of the screen or eats its own tail
- press `ctrl + c` to exit game and use the same method above to restart game
