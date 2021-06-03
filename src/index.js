import * as vis from "vis";

const container = document.getElementById("app");
// provide data in the DOT language
var DOTstring = `digraph {
	"WEST-OF-HOUSE" [label="West of House
WEST-OF-HOUSE" shape=box style=filled]
	"WEST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NORTH portPos=NORTH]
	"WEST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SOUTH portPos=SOUTH]
	"WEST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NE portPos=NE]
	"WEST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SE portPos=SE]
	"WEST-OF-HOUSE" -> "FOREST-1" [label=WEST portPos=WEST]
	"WEST-OF-HOUSE" -> "STONE-BARROW" [label=SW portPos=SW]
	"WEST-OF-HOUSE" -> "STONE-BARROW" [label=IN portPos=IN]
	"STONE-BARROW" [label="Stone Barrow
STONE-BARROW" shape=box style=filled]
	"STONE-BARROW" -> "WEST-OF-HOUSE" [label=NE portPos=NE]
	"NORTH-OF-HOUSE" [label="North of House
NORTH-OF-HOUSE" shape=box style=filled]
	"NORTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=SW portPos=SW]
	"NORTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=SE portPos=SE]
	"NORTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=WEST portPos=WEST]
	"NORTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=EAST portPos=EAST]
	"NORTH-OF-HOUSE" -> PATH [label=NORTH portPos=NORTH]
	"SOUTH-OF-HOUSE" [label="South of House
SOUTH-OF-HOUSE" shape=box style=filled]
	"SOUTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=WEST portPos=WEST]
	"SOUTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=EAST portPos=EAST]
	"SOUTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=NE portPos=NE]
	"SOUTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=NW portPos=NW]
	"SOUTH-OF-HOUSE" -> "FOREST-3" [label=SOUTH portPos=SOUTH]
	"EAST-OF-HOUSE" [label="Behind House
EAST-OF-HOUSE" shape=box style=filled]
	"EAST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NORTH portPos=NORTH]
	"EAST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SOUTH portPos=SOUTH]
	"EAST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SW portPos=SW]
	"EAST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NW portPos=NW]
	"EAST-OF-HOUSE" -> CLEARING [label=EAST portPos=EAST]
	"EAST-OF-HOUSE" -> KITCHEN [label=WEST portPos=WEST]
	"EAST-OF-HOUSE" -> KITCHEN [label=IN portPos=IN]
	"FOREST-1" [label="Forest
FOREST-1" shape=box style=filled]
	"FOREST-1" -> "GRATING-CLEARING" [label=NORTH portPos=NORTH]
	"FOREST-1" -> PATH [label=EAST portPos=EAST]
	"FOREST-1" -> "FOREST-3" [label=SOUTH portPos=SOUTH]
	"FOREST-2" [label="Forest
FOREST-2" shape=box style=filled]
	"FOREST-2" -> MOUNTAINS [label=EAST portPos=EAST]
	"FOREST-2" -> CLEARING [label=SOUTH portPos=SOUTH]
	"FOREST-2" -> PATH [label=WEST portPos=WEST]
	MOUNTAINS [label="Forest
MOUNTAINS" shape=box style=filled]
	MOUNTAINS -> "FOREST-2" [label=NORTH portPos=NORTH]
	MOUNTAINS -> "FOREST-2" [label=SOUTH portPos=SOUTH]
	MOUNTAINS -> "FOREST-2" [label=WEST portPos=WEST]
	"FOREST-3" [label="Forest
FOREST-3" shape=box style=filled]
	"FOREST-3" -> CLEARING [label=NORTH portPos=NORTH]
	"FOREST-3" -> "FOREST-1" [label=WEST portPos=WEST]
	"FOREST-3" -> "SOUTH-OF-HOUSE" [label=NW portPos=NW]
	PATH [label="Forest Path
PATH" shape=box style=filled]
	PATH -> "UP-A-TREE" [label=UP portPos=UP]
	PATH -> "GRATING-CLEARING" [label=NORTH portPos=NORTH]
	PATH -> "FOREST-2" [label=EAST portPos=EAST]
	PATH -> "NORTH-OF-HOUSE" [label=SOUTH portPos=SOUTH]
	PATH -> "FOREST-1" [label=WEST portPos=WEST]
	"UP-A-TREE" [label="Up a Tree
UP-A-TREE" shape=box style=filled]
	"UP-A-TREE" -> PATH [label=DOWN portPos=DOWN]
	"GRATING-CLEARING" [label="Clearing
GRATING-CLEARING" shape=box style=filled]
	"GRATING-CLEARING" -> "FOREST-2" [label=EAST portPos=EAST]
	"GRATING-CLEARING" -> "FOREST-1" [label=WEST portPos=WEST]
	"GRATING-CLEARING" -> PATH [label=SOUTH portPos=SOUTH]
	CLEARING [label="Clearing
CLEARING" shape=box style=filled]
	CLEARING -> "CANYON-VIEW" [label=EAST portPos=EAST]
	CLEARING -> "FOREST-2" [label=NORTH portPos=NORTH]
	CLEARING -> "FOREST-3" [label=SOUTH portPos=SOUTH]
	CLEARING -> "EAST-OF-HOUSE" [label=WEST portPos=WEST]
	KITCHEN [label="Kitchen
KITCHEN" shape=box style=filled]
	KITCHEN -> "EAST-OF-HOUSE" [label=EAST portPos=EAST]
	KITCHEN -> "LIVING-ROOM" [label=WEST portPos=WEST]
	KITCHEN -> "EAST-OF-HOUSE" [label=OUT portPos=OUT]
	KITCHEN -> ATTIC [label=UP portPos=UP]
	KITCHEN -> STUDIO [label=DOWN portPos=DOWN]
	ATTIC [label="Attic
ATTIC" shape=box style=filled]
	ATTIC -> KITCHEN [label=DOWN portPos=DOWN]
	"LIVING-ROOM" [label="Living Room
LIVING-ROOM" shape=box style=filled]
	"LIVING-ROOM" -> KITCHEN [label=EAST portPos=EAST]
	"LIVING-ROOM" -> "STRANGE-PASSAGE" [label=WEST portPos=WEST]
	CELLAR [label="Cellar
CELLAR" shape=box style=filled]
	CELLAR -> "TROLL-ROOM" [label=NORTH portPos=NORTH]
	CELLAR -> "EAST-OF-CHASM" [label=SOUTH portPos=SOUTH]
	CELLAR -> "LIVING-ROOM" [label=UP portPos=UP]
	"TROLL-ROOM" [label="The Troll Room
TROLL-ROOM" shape=box style=filled]
	"TROLL-ROOM" -> CELLAR [label=SOUTH portPos=SOUTH]
	"TROLL-ROOM" -> "EW-PASSAGE" [label=EAST portPos=EAST]
	"TROLL-ROOM" -> "MAZE-1" [label=WEST portPos=WEST]
	"EAST-OF-CHASM" [label="East of Chasm
EAST-OF-CHASM" shape=box style=filled]
	"EAST-OF-CHASM" -> CELLAR [label=NORTH portPos=NORTH]
	"EAST-OF-CHASM" -> GALLERY [label=EAST portPos=EAST]
	GALLERY [label="Gallery
GALLERY" shape=box style=filled]
	GALLERY -> "EAST-OF-CHASM" [label=WEST portPos=WEST]
	GALLERY -> STUDIO [label=NORTH portPos=NORTH]
	STUDIO [label="Studio
STUDIO" shape=box style=filled]
	STUDIO -> GALLERY [label=SOUTH portPos=SOUTH]
	"MAZE-1" [label="Maze
MAZE-1" shape=box style=filled]
	"MAZE-1" -> "TROLL-ROOM" [label=EAST portPos=EAST]
	"MAZE-1" -> "MAZE-1" [label=NORTH portPos=NORTH]
	"MAZE-1" -> "MAZE-2" [label=SOUTH portPos=SOUTH]
	"MAZE-1" -> "MAZE-4" [label=WEST portPos=WEST]
	"MAZE-2" [label="Maze
MAZE-2" shape=box style=filled]
	"MAZE-2" -> "MAZE-1" [label=SOUTH portPos=SOUTH]
	"MAZE-2" -> "MAZE-3" [label=EAST portPos=EAST]
	"MAZE-3" [label="Maze
MAZE-3" shape=box style=filled]
	"MAZE-3" -> "MAZE-2" [label=WEST portPos=WEST]
	"MAZE-3" -> "MAZE-4" [label=NORTH portPos=NORTH]
	"MAZE-3" -> "MAZE-5" [label=UP portPos=UP]
	"MAZE-4" [label="Maze
MAZE-4" shape=box style=filled]
	"MAZE-4" -> "MAZE-3" [label=WEST portPos=WEST]
	"MAZE-4" -> "MAZE-1" [label=NORTH portPos=NORTH]
	"MAZE-4" -> "DEAD-END-1" [label=EAST portPos=EAST]
	"DEAD-END-1" [label="Dead End
DEAD-END-1" shape=box style=filled]
	"DEAD-END-1" -> "MAZE-4" [label=SOUTH portPos=SOUTH]
	"MAZE-5" [label="Maze
MAZE-5" shape=box style=filled]
	"MAZE-5" -> "DEAD-END-2" [label=EAST portPos=EAST]
	"MAZE-5" -> "MAZE-3" [label=NORTH portPos=NORTH]
	"MAZE-5" -> "MAZE-6" [label=SW portPos=SW]
	"DEAD-END-2" [label="Dead End
DEAD-END-2" shape=box style=filled]
	"DEAD-END-2" -> "MAZE-5" [label=WEST portPos=WEST]
	"MAZE-6" [label="Maze
MAZE-6" shape=box style=filled]
	"MAZE-6" -> "MAZE-5" [label=DOWN portPos=DOWN]
	"MAZE-6" -> "MAZE-7" [label=EAST portPos=EAST]
	"MAZE-6" -> "MAZE-6" [label=WEST portPos=WEST]
	"MAZE-6" -> "MAZE-9" [label=UP portPos=UP]
	"MAZE-7" [label="Maze
MAZE-7" shape=box style=filled]
	"MAZE-7" -> "MAZE-14" [label=UP portPos=UP]
	"MAZE-7" -> "MAZE-6" [label=WEST portPos=WEST]
	"MAZE-7" -> "MAZE-8" [label=EAST portPos=EAST]
	"MAZE-7" -> "MAZE-15" [label=SOUTH portPos=SOUTH]
	"MAZE-8" [label="Maze
MAZE-8" shape=box style=filled]
	"MAZE-8" -> "MAZE-7" [label=NE portPos=NE]
	"MAZE-8" -> "MAZE-8" [label=WEST portPos=WEST]
	"MAZE-8" -> "DEAD-END-3" [label=SE portPos=SE]
	"DEAD-END-3" [label="Dead End
DEAD-END-3" shape=box style=filled]
	"DEAD-END-3" -> "MAZE-8" [label=NORTH portPos=NORTH]
	"MAZE-9" [label="Maze
MAZE-9" shape=box style=filled]
	"MAZE-9" -> "MAZE-6" [label=NORTH portPos=NORTH]
	"MAZE-9" -> "MAZE-10" [label=EAST portPos=EAST]
	"MAZE-9" -> "MAZE-13" [label=SOUTH portPos=SOUTH]
	"MAZE-9" -> "MAZE-12" [label=WEST portPos=WEST]
	"MAZE-9" -> "MAZE-9" [label=NW portPos=NW]
	"MAZE-10" [label="Maze
MAZE-10" shape=box style=filled]
	"MAZE-10" -> "MAZE-9" [label=EAST portPos=EAST]
	"MAZE-10" -> "MAZE-13" [label=WEST portPos=WEST]
	"MAZE-10" -> "MAZE-11" [label=UP portPos=UP]
	"MAZE-11" [label="Maze
MAZE-11" shape=box style=filled]
	"MAZE-11" -> "GRATING-ROOM" [label=NE portPos=NE]
	"MAZE-11" -> "MAZE-10" [label=DOWN portPos=DOWN]
	"MAZE-11" -> "MAZE-13" [label=NW portPos=NW]
	"MAZE-11" -> "MAZE-12" [label=SW portPos=SW]
	"GRATING-ROOM" [label="Grating Room
GRATING-ROOM" shape=box style=filled]
	"GRATING-ROOM" -> "MAZE-11" [label=SW portPos=SW]
	"GRATING-ROOM" -> "GRATING-CLEARING" [label=UP portPos=UP]
	"MAZE-12" [label="Maze
MAZE-12" shape=box style=filled]
	"MAZE-12" -> "MAZE-11" [label=SW portPos=SW]
	"MAZE-12" -> "MAZE-13" [label=EAST portPos=EAST]
	"MAZE-12" -> "MAZE-9" [label=UP portPos=UP]
	"MAZE-12" -> "DEAD-END-4" [label=NORTH portPos=NORTH]
	"DEAD-END-4" [label="Dead End
DEAD-END-4" shape=box style=filled]
	"DEAD-END-4" -> "MAZE-12" [label=SOUTH portPos=SOUTH]
	"MAZE-13" [label="Maze
MAZE-13" shape=box style=filled]
	"MAZE-13" -> "MAZE-9" [label=EAST portPos=EAST]
	"MAZE-13" -> "MAZE-12" [label=DOWN portPos=DOWN]
	"MAZE-13" -> "MAZE-10" [label=SOUTH portPos=SOUTH]
	"MAZE-13" -> "MAZE-11" [label=WEST portPos=WEST]
	"MAZE-14" [label="Maze
MAZE-14" shape=box style=filled]
	"MAZE-14" -> "MAZE-15" [label=WEST portPos=WEST]
	"MAZE-14" -> "MAZE-14" [label=NW portPos=NW]
	"MAZE-14" -> "MAZE-7" [label=NE portPos=NE]
	"MAZE-14" -> "MAZE-7" [label=SOUTH portPos=SOUTH]
	"MAZE-15" [label="Maze
MAZE-15" shape=box style=filled]
	"MAZE-15" -> "MAZE-14" [label=WEST portPos=WEST]
	"MAZE-15" -> "MAZE-7" [label=SOUTH portPos=SOUTH]
	"MAZE-15" -> "CYCLOPS-ROOM" [label=SE portPos=SE]
	"CYCLOPS-ROOM" [label="Cyclops Room
CYCLOPS-ROOM" shape=box style=filled]
	"CYCLOPS-ROOM" -> "MAZE-15" [label=NW portPos=NW]
	"CYCLOPS-ROOM" -> "STRANGE-PASSAGE" [label=EAST portPos=EAST]
	"CYCLOPS-ROOM" -> "TREASURE-ROOM" [label=UP portPos=UP]
	"STRANGE-PASSAGE" [label="Strange Passage
STRANGE-PASSAGE" shape=box style=filled]
	"STRANGE-PASSAGE" -> "CYCLOPS-ROOM" [label=WEST portPos=WEST]
	"STRANGE-PASSAGE" -> "CYCLOPS-ROOM" [label=IN portPos=IN]
	"STRANGE-PASSAGE" -> "LIVING-ROOM" [label=EAST portPos=EAST]
	"TREASURE-ROOM" [label="Treasure Room
TREASURE-ROOM" shape=box style=filled]
	"TREASURE-ROOM" -> "CYCLOPS-ROOM" [label=DOWN portPos=DOWN]
	"RESERVOIR-SOUTH" [label="Reservoir South
RESERVOIR-SOUTH" shape=box style=filled]
	"RESERVOIR-SOUTH" -> "DEEP-CANYON" [label=SE portPos=SE]
	"RESERVOIR-SOUTH" -> "CHASM-ROOM" [label=SW portPos=SW]
	"RESERVOIR-SOUTH" -> "DAM-ROOM" [label=EAST portPos=EAST]
	"RESERVOIR-SOUTH" -> "STREAM-VIEW" [label=WEST portPos=WEST]
	"RESERVOIR-SOUTH" -> RESERVOIR [label=NORTH portPos=NORTH]
	RESERVOIR [label="Reservoir
RESERVOIR" shape=box style=filled]
	RESERVOIR -> "RESERVOIR-NORTH" [label=NORTH portPos=NORTH]
	RESERVOIR -> "RESERVOIR-SOUTH" [label=SOUTH portPos=SOUTH]
	RESERVOIR -> "IN-STREAM" [label=UP portPos=UP]
	RESERVOIR -> "IN-STREAM" [label=WEST portPos=WEST]
	"RESERVOIR-NORTH" [label="Reservoir North
RESERVOIR-NORTH" shape=box style=filled]
	"RESERVOIR-NORTH" -> "ATLANTIS-ROOM" [label=NORTH portPos=NORTH]
	"RESERVOIR-NORTH" -> RESERVOIR [label=SOUTH portPos=SOUTH]
	"STREAM-VIEW" [label="Stream View
STREAM-VIEW" shape=box style=filled]
	"STREAM-VIEW" -> "RESERVOIR-SOUTH" [label=EAST portPos=EAST]
	"IN-STREAM" [label="Stream
IN-STREAM" shape=box style=filled]
	"IN-STREAM" -> "STREAM-VIEW" [label=LAND portPos=LAND]
	"IN-STREAM" -> RESERVOIR [label=DOWN portPos=DOWN]
	"IN-STREAM" -> RESERVOIR [label=EAST portPos=EAST]
	"MIRROR-ROOM-1" [label="Mirror Room
MIRROR-ROOM-1" shape=box style=filled]
	"MIRROR-ROOM-1" -> "COLD-PASSAGE" [label=NORTH portPos=NORTH]
	"MIRROR-ROOM-1" -> "TWISTING-PASSAGE" [label=WEST portPos=WEST]
	"MIRROR-ROOM-1" -> "SMALL-CAVE" [label=EAST portPos=EAST]
	"MIRROR-ROOM-2" [label="Mirror Room
MIRROR-ROOM-2" shape=box style=filled]
	"MIRROR-ROOM-2" -> "WINDING-PASSAGE" [label=WEST portPos=WEST]
	"MIRROR-ROOM-2" -> "NARROW-PASSAGE" [label=NORTH portPos=NORTH]
	"MIRROR-ROOM-2" -> "TINY-CAVE" [label=EAST portPos=EAST]
	"SMALL-CAVE" [label="Cave
SMALL-CAVE" shape=box style=filled]
	"SMALL-CAVE" -> "MIRROR-ROOM-1" [label=NORTH portPos=NORTH]
	"SMALL-CAVE" -> "ATLANTIS-ROOM" [label=DOWN portPos=DOWN]
	"SMALL-CAVE" -> "ATLANTIS-ROOM" [label=SOUTH portPos=SOUTH]
	"SMALL-CAVE" -> "TWISTING-PASSAGE" [label=WEST portPos=WEST]
	"TINY-CAVE" [label="Cave
TINY-CAVE" shape=box style=filled]
	"TINY-CAVE" -> "MIRROR-ROOM-2" [label=NORTH portPos=NORTH]
	"TINY-CAVE" -> "WINDING-PASSAGE" [label=WEST portPos=WEST]
	"TINY-CAVE" -> "ENTRANCE-TO-HADES" [label=DOWN portPos=DOWN]
	"COLD-PASSAGE" [label="Cold Passage
COLD-PASSAGE" shape=box style=filled]
	"COLD-PASSAGE" -> "MIRROR-ROOM-1" [label=SOUTH portPos=SOUTH]
	"COLD-PASSAGE" -> "SLIDE-ROOM" [label=WEST portPos=WEST]
	"NARROW-PASSAGE" [label="Narrow Passage
NARROW-PASSAGE" shape=box style=filled]
	"NARROW-PASSAGE" -> "ROUND-ROOM" [label=NORTH portPos=NORTH]
	"NARROW-PASSAGE" -> "MIRROR-ROOM-2" [label=SOUTH portPos=SOUTH]
	"WINDING-PASSAGE" [label="Winding Passage
WINDING-PASSAGE" shape=box style=filled]
	"WINDING-PASSAGE" -> "MIRROR-ROOM-2" [label=NORTH portPos=NORTH]
	"WINDING-PASSAGE" -> "TINY-CAVE" [label=EAST portPos=EAST]
	"TWISTING-PASSAGE" [label="Twisting Passage
TWISTING-PASSAGE" shape=box style=filled]
	"TWISTING-PASSAGE" -> "MIRROR-ROOM-1" [label=NORTH portPos=NORTH]
	"TWISTING-PASSAGE" -> "SMALL-CAVE" [label=EAST portPos=EAST]
	"ATLANTIS-ROOM" [label="Atlantis Room
ATLANTIS-ROOM" shape=box style=filled]
	"ATLANTIS-ROOM" -> "SMALL-CAVE" [label=UP portPos=UP]
	"ATLANTIS-ROOM" -> "RESERVOIR-NORTH" [label=SOUTH portPos=SOUTH]
	"EW-PASSAGE" [label="East-West Passage
EW-PASSAGE" shape=box style=filled]
	"EW-PASSAGE" -> "ROUND-ROOM" [label=EAST portPos=EAST]
	"EW-PASSAGE" -> "TROLL-ROOM" [label=WEST portPos=WEST]
	"EW-PASSAGE" -> "CHASM-ROOM" [label=DOWN portPos=DOWN]
	"EW-PASSAGE" -> "CHASM-ROOM" [label=NORTH portPos=NORTH]
	"ROUND-ROOM" [label="Round Room
ROUND-ROOM" shape=box style=filled]
	"ROUND-ROOM" -> "LOUD-ROOM" [label=EAST portPos=EAST]
	"ROUND-ROOM" -> "EW-PASSAGE" [label=WEST portPos=WEST]
	"ROUND-ROOM" -> "NS-PASSAGE" [label=NORTH portPos=NORTH]
	"ROUND-ROOM" -> "NARROW-PASSAGE" [label=SOUTH portPos=SOUTH]
	"ROUND-ROOM" -> "ENGRAVINGS-CAVE" [label=SE portPos=SE]
	"DEEP-CANYON" [label="Deep Canyon
DEEP-CANYON" shape=box style=filled]
	"DEEP-CANYON" -> "RESERVOIR-SOUTH" [label=NW portPos=NW]
	"DEEP-CANYON" -> "DAM-ROOM" [label=EAST portPos=EAST]
	"DEEP-CANYON" -> "NS-PASSAGE" [label=SW portPos=SW]
	"DEEP-CANYON" -> "LOUD-ROOM" [label=DOWN portPos=DOWN]
	"DAMP-CAVE" [label="Damp Cave
DAMP-CAVE" shape=box style=filled]
	"DAMP-CAVE" -> "LOUD-ROOM" [label=WEST portPos=WEST]
	"DAMP-CAVE" -> "WHITE-CLIFFS-NORTH" [label=EAST portPos=EAST]
	"LOUD-ROOM" [label="Loud Room
LOUD-ROOM" shape=box style=filled]
	"LOUD-ROOM" -> "DAMP-CAVE" [label=EAST portPos=EAST]
	"LOUD-ROOM" -> "ROUND-ROOM" [label=WEST portPos=WEST]
	"LOUD-ROOM" -> "DEEP-CANYON" [label=UP portPos=UP]
	"NS-PASSAGE" [label="North-South Passage
NS-PASSAGE" shape=box style=filled]
	"NS-PASSAGE" -> "CHASM-ROOM" [label=NORTH portPos=NORTH]
	"NS-PASSAGE" -> "DEEP-CANYON" [label=NE portPos=NE]
	"NS-PASSAGE" -> "ROUND-ROOM" [label=SOUTH portPos=SOUTH]
	"CHASM-ROOM" [label="Chasm
CHASM-ROOM" shape=box style=filled]
	"CHASM-ROOM" -> "RESERVOIR-SOUTH" [label=NE portPos=NE]
	"CHASM-ROOM" -> "EW-PASSAGE" [label=SW portPos=SW]
	"CHASM-ROOM" -> "EW-PASSAGE" [label=UP portPos=UP]
	"CHASM-ROOM" -> "NS-PASSAGE" [label=SOUTH portPos=SOUTH]
	"ENTRANCE-TO-HADES" [label="Entrance to Hades
ENTRANCE-TO-HADES" shape=box style=filled]
	"ENTRANCE-TO-HADES" -> "TINY-CAVE" [label=UP portPos=UP]
	"ENTRANCE-TO-HADES" -> "LAND-OF-LIVING-DEAD" [label=IN portPos=IN]
	"ENTRANCE-TO-HADES" -> "LAND-OF-LIVING-DEAD" [label=SOUTH portPos=SOUTH]
	"LAND-OF-LIVING-DEAD" [label="Land of the Dead
LAND-OF-LIVING-DEAD" shape=box style=filled]
	"LAND-OF-LIVING-DEAD" -> "ENTRANCE-TO-HADES" [label=OUT portPos=OUT]
	"LAND-OF-LIVING-DEAD" -> "ENTRANCE-TO-HADES" [label=NORTH portPos=NORTH]
	"ENGRAVINGS-CAVE" [label="Engravings Cave
ENGRAVINGS-CAVE" shape=box style=filled]
	"ENGRAVINGS-CAVE" -> "ROUND-ROOM" [label=NW portPos=NW]
	"ENGRAVINGS-CAVE" -> "DOME-ROOM" [label=EAST portPos=EAST]
	"EGYPT-ROOM" [label="Egyptian Room
EGYPT-ROOM" shape=box style=filled]
	"EGYPT-ROOM" -> "NORTH-TEMPLE" [label=WEST portPos=WEST]
	"EGYPT-ROOM" -> "NORTH-TEMPLE" [label=UP portPos=UP]
	"DOME-ROOM" [label="Dome Room
DOME-ROOM" shape=box style=filled]
	"DOME-ROOM" -> "ENGRAVINGS-CAVE" [label=WEST portPos=WEST]
	"DOME-ROOM" -> "TORCH-ROOM" [label=DOWN portPos=DOWN]
	"TORCH-ROOM" [label="Torch Room
TORCH-ROOM" shape=box style=filled]
	"TORCH-ROOM" -> "NORTH-TEMPLE" [label=SOUTH portPos=SOUTH]
	"TORCH-ROOM" -> "NORTH-TEMPLE" [label=DOWN portPos=DOWN]
	"NORTH-TEMPLE" [label="Temple
NORTH-TEMPLE" shape=box style=filled]
	"NORTH-TEMPLE" -> "EGYPT-ROOM" [label=DOWN portPos=DOWN]
	"NORTH-TEMPLE" -> "EGYPT-ROOM" [label=EAST portPos=EAST]
	"NORTH-TEMPLE" -> "TORCH-ROOM" [label=NORTH portPos=NORTH]
	"NORTH-TEMPLE" -> "TORCH-ROOM" [label=OUT portPos=OUT]
	"NORTH-TEMPLE" -> "TORCH-ROOM" [label=UP portPos=UP]
	"NORTH-TEMPLE" -> "SOUTH-TEMPLE" [label=SOUTH portPos=SOUTH]
	"SOUTH-TEMPLE" [label="Altar
SOUTH-TEMPLE" shape=box style=filled]
	"SOUTH-TEMPLE" -> "NORTH-TEMPLE" [label=NORTH portPos=NORTH]
	"SOUTH-TEMPLE" -> "TINY-CAVE" [label=DOWN portPos=DOWN]
	"DAM-ROOM" [label="Dam
DAM-ROOM" shape=box style=filled]
	"DAM-ROOM" -> "DEEP-CANYON" [label=SOUTH portPos=SOUTH]
	"DAM-ROOM" -> "DAM-BASE" [label=DOWN portPos=DOWN]
	"DAM-ROOM" -> "DAM-BASE" [label=EAST portPos=EAST]
	"DAM-ROOM" -> "DAM-LOBBY" [label=NORTH portPos=NORTH]
	"DAM-ROOM" -> "RESERVOIR-SOUTH" [label=WEST portPos=WEST]
	"DAM-LOBBY" [label="Dam Lobby
DAM-LOBBY" shape=box style=filled]
	"DAM-LOBBY" -> "DAM-ROOM" [label=SOUTH portPos=SOUTH]
	"DAM-LOBBY" -> "MAINTENANCE-ROOM" [label=NORTH portPos=NORTH]
	"DAM-LOBBY" -> "MAINTENANCE-ROOM" [label=EAST portPos=EAST]
	"MAINTENANCE-ROOM" [label="Maintenance Room
MAINTENANCE-ROOM" shape=box style=filled]
	"MAINTENANCE-ROOM" -> "DAM-LOBBY" [label=SOUTH portPos=SOUTH]
	"MAINTENANCE-ROOM" -> "DAM-LOBBY" [label=WEST portPos=WEST]
	"DAM-BASE" [label="Dam Base
DAM-BASE" shape=box style=filled]
	"DAM-BASE" -> "DAM-ROOM" [label=NORTH portPos=NORTH]
	"DAM-BASE" -> "DAM-ROOM" [label=UP portPos=UP]
	"RIVER-1" [label="Frigid River
RIVER-1" shape=box style=filled]
	"RIVER-1" -> "DAM-BASE" [label=WEST portPos=WEST]
	"RIVER-1" -> "DAM-BASE" [label=LAND portPos=LAND]
	"RIVER-1" -> "RIVER-2" [label=DOWN portPos=DOWN]
	"RIVER-2" [label="Frigid River
RIVER-2" shape=box style=filled]
	"RIVER-2" -> "RIVER-3" [label=DOWN portPos=DOWN]
	"RIVER-3" [label="Frigid River
RIVER-3" shape=box style=filled]
	"RIVER-3" -> "RIVER-4" [label=DOWN portPos=DOWN]
	"RIVER-3" -> "WHITE-CLIFFS-NORTH" [label=LAND portPos=LAND]
	"RIVER-3" -> "WHITE-CLIFFS-NORTH" [label=WEST portPos=WEST]
	"WHITE-CLIFFS-NORTH" [label="White Cliffs Beach
WHITE-CLIFFS-NORTH" shape=box style=filled]
	"WHITE-CLIFFS-NORTH" -> "WHITE-CLIFFS-SOUTH" [label=SOUTH portPos=SOUTH]
	"WHITE-CLIFFS-NORTH" -> "DAMP-CAVE" [label=WEST portPos=WEST]
	"WHITE-CLIFFS-SOUTH" [label="White Cliffs Beach
WHITE-CLIFFS-SOUTH" shape=box style=filled]
	"WHITE-CLIFFS-SOUTH" -> "WHITE-CLIFFS-NORTH" [label=NORTH portPos=NORTH]
	"RIVER-4" [label="Frigid River
RIVER-4" shape=box style=filled]
	"RIVER-4" -> "RIVER-5" [label=DOWN portPos=DOWN]
	"RIVER-4" -> "WHITE-CLIFFS-SOUTH" [label=WEST portPos=WEST]
	"RIVER-4" -> "SANDY-BEACH" [label=EAST portPos=EAST]
	"RIVER-5" [label="Frigid River
RIVER-5" shape=box style=filled]
	"RIVER-5" -> SHORE [label=EAST portPos=EAST]
	"RIVER-5" -> SHORE [label=LAND portPos=LAND]
	SHORE [label="Shore
SHORE" shape=box style=filled]
	SHORE -> "SANDY-BEACH" [label=NORTH portPos=NORTH]
	SHORE -> "ARAGAIN-FALLS" [label=SOUTH portPos=SOUTH]
	"SANDY-BEACH" [label="Sandy Beach
SANDY-BEACH" shape=box style=filled]
	"SANDY-BEACH" -> "SANDY-CAVE" [label=NE portPos=NE]
	"SANDY-BEACH" -> SHORE [label=SOUTH portPos=SOUTH]
	"SANDY-CAVE" [label="Sandy Cave
SANDY-CAVE" shape=box style=filled]
	"SANDY-CAVE" -> "SANDY-BEACH" [label=SW portPos=SW]
	"ARAGAIN-FALLS" [label="Aragain Falls
ARAGAIN-FALLS" shape=box style=filled]
	"ARAGAIN-FALLS" -> "ON-RAINBOW" [label=WEST portPos=WEST]
	"ARAGAIN-FALLS" -> SHORE [label=NORTH portPos=NORTH]
	"ARAGAIN-FALLS" -> "ON-RAINBOW" [label=UP portPos=UP]
	"ON-RAINBOW" [label="On the Rainbow
ON-RAINBOW" shape=box style=filled]
	"ON-RAINBOW" -> "END-OF-RAINBOW" [label=WEST portPos=WEST]
	"ON-RAINBOW" -> "ARAGAIN-FALLS" [label=EAST portPos=EAST]
	"END-OF-RAINBOW" [label="End of Rainbow
END-OF-RAINBOW" shape=box style=filled]
	"END-OF-RAINBOW" -> "ON-RAINBOW" [label=UP portPos=UP]
	"END-OF-RAINBOW" -> "ON-RAINBOW" [label=NE portPos=NE]
	"END-OF-RAINBOW" -> "ON-RAINBOW" [label=EAST portPos=EAST]
	"END-OF-RAINBOW" -> "CANYON-BOTTOM" [label=SW portPos=SW]
	"CANYON-BOTTOM" [label="Canyon Bottom
CANYON-BOTTOM" shape=box style=filled]
	"CANYON-BOTTOM" -> "CLIFF-MIDDLE" [label=UP portPos=UP]
	"CANYON-BOTTOM" -> "END-OF-RAINBOW" [label=NORTH portPos=NORTH]
	"CLIFF-MIDDLE" [label="Rocky Ledge
CLIFF-MIDDLE" shape=box style=filled]
	"CLIFF-MIDDLE" -> "CANYON-VIEW" [label=UP portPos=UP]
	"CLIFF-MIDDLE" -> "CANYON-BOTTOM" [label=DOWN portPos=DOWN]
	"CANYON-VIEW" [label="Canyon View
CANYON-VIEW" shape=box style=filled]
	"CANYON-VIEW" -> "CLIFF-MIDDLE" [label=EAST portPos=EAST]
	"CANYON-VIEW" -> "CLIFF-MIDDLE" [label=DOWN portPos=DOWN]
	"CANYON-VIEW" -> CLEARING [label=NW portPos=NW]
	"CANYON-VIEW" -> "FOREST-3" [label=WEST portPos=WEST]
	"MINE-ENTRANCE" [label="Mine Entrance
MINE-ENTRANCE" shape=box style=filled]
	"MINE-ENTRANCE" -> "SLIDE-ROOM" [label=SOUTH portPos=SOUTH]
	"MINE-ENTRANCE" -> "SQUEEKY-ROOM" [label=IN portPos=IN]
	"MINE-ENTRANCE" -> "SQUEEKY-ROOM" [label=WEST portPos=WEST]
	"SQUEEKY-ROOM" [label="Squeaky Room
SQUEEKY-ROOM" shape=box style=filled]
	"SQUEEKY-ROOM" -> "BAT-ROOM" [label=NORTH portPos=NORTH]
	"SQUEEKY-ROOM" -> "MINE-ENTRANCE" [label=EAST portPos=EAST]
	"BAT-ROOM" [label="Bat Room
BAT-ROOM" shape=box style=filled]
	"BAT-ROOM" -> "SQUEEKY-ROOM" [label=SOUTH portPos=SOUTH]
	"BAT-ROOM" -> "SHAFT-ROOM" [label=EAST portPos=EAST]
	"SHAFT-ROOM" [label="Shaft Room
SHAFT-ROOM" shape=box style=filled]
	"SHAFT-ROOM" -> "BAT-ROOM" [label=WEST portPos=WEST]
	"SHAFT-ROOM" -> "SMELLY-ROOM" [label=NORTH portPos=NORTH]
	"SMELLY-ROOM" [label="Smelly Room
SMELLY-ROOM" shape=box style=filled]
	"SMELLY-ROOM" -> "GAS-ROOM" [label=DOWN portPos=DOWN]
	"SMELLY-ROOM" -> "SHAFT-ROOM" [label=SOUTH portPos=SOUTH]
	"GAS-ROOM" [label="Gas Room
GAS-ROOM" shape=box style=filled]
	"GAS-ROOM" -> "SMELLY-ROOM" [label=UP portPos=UP]
	"GAS-ROOM" -> "MINE-1" [label=EAST portPos=EAST]
	"LADDER-TOP" [label="Ladder Top
LADDER-TOP" shape=box style=filled]
	"LADDER-TOP" -> "LADDER-BOTTOM" [label=DOWN portPos=DOWN]
	"LADDER-TOP" -> "MINE-4" [label=UP portPos=UP]
	"LADDER-BOTTOM" [label="Ladder Bottom
LADDER-BOTTOM" shape=box style=filled]
	"LADDER-BOTTOM" -> "DEAD-END-5" [label=SOUTH portPos=SOUTH]
	"LADDER-BOTTOM" -> "TIMBER-ROOM" [label=WEST portPos=WEST]
	"LADDER-BOTTOM" -> "LADDER-TOP" [label=UP portPos=UP]
	"DEAD-END-5" [label="Dead End
DEAD-END-5" shape=box style=filled]
	"DEAD-END-5" -> "LADDER-BOTTOM" [label=NORTH portPos=NORTH]
	"TIMBER-ROOM" [label="Timber Room
TIMBER-ROOM" shape=box style=filled]
	"TIMBER-ROOM" -> "LADDER-BOTTOM" [label=EAST portPos=EAST]
	"TIMBER-ROOM" -> "LOWER-SHAFT" [label=WEST portPos=WEST]
	"LOWER-SHAFT" [label="Drafty Room
LOWER-SHAFT" shape=box style=filled]
	"LOWER-SHAFT" -> "MACHINE-ROOM" [label=SOUTH portPos=SOUTH]
	"LOWER-SHAFT" -> "TIMBER-ROOM" [label=OUT portPos=OUT]
	"LOWER-SHAFT" -> "TIMBER-ROOM" [label=EAST portPos=EAST]
	"MACHINE-ROOM" [label="Machine Room
MACHINE-ROOM" shape=box style=filled]
	"MACHINE-ROOM" -> "LOWER-SHAFT" [label=NORTH portPos=NORTH]
	"MINE-1" [label="Coal Mine
MINE-1" shape=box style=filled]
	"MINE-1" -> "GAS-ROOM" [label=NORTH portPos=NORTH]
	"MINE-1" -> "MINE-1" [label=EAST portPos=EAST]
	"MINE-1" -> "MINE-2" [label=NE portPos=NE]
	"MINE-2" [label="Coal Mine
MINE-2" shape=box style=filled]
	"MINE-2" -> "MINE-2" [label=NORTH portPos=NORTH]
	"MINE-2" -> "MINE-1" [label=SOUTH portPos=SOUTH]
	"MINE-2" -> "MINE-3" [label=SE portPos=SE]
	"MINE-3" [label="Coal Mine
MINE-3" shape=box style=filled]
	"MINE-3" -> "MINE-3" [label=SOUTH portPos=SOUTH]
	"MINE-3" -> "MINE-4" [label=SW portPos=SW]
	"MINE-3" -> "MINE-2" [label=EAST portPos=EAST]
	"MINE-4" [label="Coal Mine
MINE-4" shape=box style=filled]
	"MINE-4" -> "MINE-3" [label=NORTH portPos=NORTH]
	"MINE-4" -> "MINE-4" [label=WEST portPos=WEST]
	"MINE-4" -> "LADDER-TOP" [label=DOWN portPos=DOWN]
	"SLIDE-ROOM" [label="Slide Room
SLIDE-ROOM" shape=box style=filled]
	"SLIDE-ROOM" -> "COLD-PASSAGE" [label=EAST portPos=EAST]
	"SLIDE-ROOM" -> "MINE-ENTRANCE" [label=NORTH portPos=NORTH]
	"SLIDE-ROOM" -> CELLAR [label=DOWN portPos=DOWN]
}`;
var parsedData = vis.network.convertDot(DOTstring);

var data = {
  nodes: parsedData.nodes,
  edges: parsedData.edges
};

var options = parsedData.options;
//options.physics = {
//  enabled: 'true'
//}

var network = new vis.Network(container, data, options);
