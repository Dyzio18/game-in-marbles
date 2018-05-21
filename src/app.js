import renderView from './controllers/viewController';
import startView from './views/startView';

renderView(startView);

/**
 * TODO:
 *  - [DONE] make [GRAPH from Board] and then use algoritm
 *  - [OPEN] find path (gameControler) - use A* (astar) ALGO 
 *           (check open ways)/(give signal to user if way was close)
 *  - [OPEN] move ball to tile (with astar)
 *  - [OPEN] check balls in row and column
 *  - [OPEN] add new balls to board after player move
 */
