export class GameData{
    
    GRASS_TILE = 'grass1';
    UNKNOWN_TILE = 'grass2';
    FOREST_TILE = 'tree_icon';
    LAKE_TILE = 'pond_icon';
    ROCK_TILE = 'rock_icon';
    SELECTION_BOX = 'selection'

    tileTypes = [
                this.UNKNOWN_TILE,
                this.GRASS_TILE,
                this.FOREST_TILE,
                this.LAKE_TILE,
                this.ROCK_TILE,
                this.SELECTION_BOX
            ];

    cityWidth = 7;
    cityHeight = 7;
    
    
    constructor(){

    }
}