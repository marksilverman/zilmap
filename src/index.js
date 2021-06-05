import * as vis from "vis";

const container = document.getElementById("app");
// provide data in the DOT language
var DOTstring = `// zork1
digraph {
	"WEST-OF-HOUSE" [label="West of House
WEST-OF-HOUSE
contains: door,
small mailbox" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"WEST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NORTH]
	"WEST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SOUTH]
	"WEST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NE]
	"WEST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SE]
	"WEST-OF-HOUSE" -> "FOREST-1" [label=WEST]
	"WEST-OF-HOUSE" -> "STONE-BARROW" [label=SW]
	"WEST-OF-HOUSE" -> "STONE-BARROW" [label=IN]
	"STONE-BARROW" [label="Stone Barrow
STONE-BARROW
contains: stone door,
stone barrow" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"STONE-BARROW" -> "WEST-OF-HOUSE" [label=NE]
	"NORTH-OF-HOUSE" [label="North of House
NORTH-OF-HOUSE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"NORTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=SW]
	"NORTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=SE]
	"NORTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=WEST]
	"NORTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=EAST]
	"NORTH-OF-HOUSE" -> PATH [label=NORTH]
	"SOUTH-OF-HOUSE" [label="South of House
SOUTH-OF-HOUSE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SOUTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=WEST]
	"SOUTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=EAST]
	"SOUTH-OF-HOUSE" -> "EAST-OF-HOUSE" [label=NE]
	"SOUTH-OF-HOUSE" -> "WEST-OF-HOUSE" [label=NW]
	"SOUTH-OF-HOUSE" -> "FOREST-3" [label=SOUTH]
	"EAST-OF-HOUSE" [label="Behind House
EAST-OF-HOUSE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"EAST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NORTH]
	"EAST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SOUTH]
	"EAST-OF-HOUSE" -> "SOUTH-OF-HOUSE" [label=SW]
	"EAST-OF-HOUSE" -> "NORTH-OF-HOUSE" [label=NW]
	"EAST-OF-HOUSE" -> CLEARING [label=EAST]
	"EAST-OF-HOUSE" -> KITCHEN [label=WEST]
	"EAST-OF-HOUSE" -> KITCHEN [label=IN]
	"FOREST-1" [label="Forest
FOREST-1" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	"FOREST-1" -> "GRATING-CLEARING" [label=NORTH]
	"FOREST-1" -> PATH [label=EAST]
	"FOREST-1" -> "FOREST-3" [label=SOUTH]
	"FOREST-2" [label="Forest
FOREST-2" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	"FOREST-2" -> MOUNTAINS [label=EAST]
	"FOREST-2" -> CLEARING [label=SOUTH]
	"FOREST-2" -> PATH [label=WEST]
	MOUNTAINS [label="Forest
MOUNTAINS
contains: mountain range" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	MOUNTAINS -> "FOREST-2" [label=NORTH]
	MOUNTAINS -> "FOREST-2" [label=SOUTH]
	MOUNTAINS -> "FOREST-2" [label=WEST]
	"FOREST-3" [label="Forest
FOREST-3" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	"FOREST-3" -> CLEARING [label=NORTH]
	"FOREST-3" -> "FOREST-1" [label=WEST]
	"FOREST-3" -> "SOUTH-OF-HOUSE" [label=NW]
	PATH [label="Forest Path
PATH" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	PATH -> "UP-A-TREE" [label=UP]
	PATH -> "GRATING-CLEARING" [label=NORTH]
	PATH -> "FOREST-2" [label=EAST]
	PATH -> "NORTH-OF-HOUSE" [label=SOUTH]
	PATH -> "FOREST-1" [label=WEST]
	"UP-A-TREE" [label="Up a Tree
UP-A-TREE
contains: bird's nest" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	"UP-A-TREE" -> PATH [label=DOWN]
	"GRATING-CLEARING" [label="Clearing
GRATING-CLEARING
contains: pile of leaves" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	"GRATING-CLEARING" -> "FOREST-2" [label=EAST]
	"GRATING-CLEARING" -> "FOREST-1" [label=WEST]
	"GRATING-CLEARING" -> PATH [label=SOUTH]
	CLEARING [label="Clearing
CLEARING" fillcolor=forestgreen fontcolor=black shape=box style=filled]
	CLEARING -> "CANYON-VIEW" [label=EAST]
	CLEARING -> "FOREST-2" [label=NORTH]
	CLEARING -> "FOREST-3" [label=SOUTH]
	CLEARING -> "EAST-OF-HOUSE" [label=WEST]
	KITCHEN [label="Kitchen
KITCHEN
contains: kitchen table" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	KITCHEN -> "EAST-OF-HOUSE" [label=EAST]
	KITCHEN -> "LIVING-ROOM" [label=WEST]
	KITCHEN -> "EAST-OF-HOUSE" [label=OUT]
	KITCHEN -> ATTIC [label=UP]
	KITCHEN -> STUDIO [label=DOWN]
	ATTIC [label="Attic
ATTIC
contains: table,
rope" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	ATTIC -> KITCHEN [label=DOWN]
	"LIVING-ROOM" [label="Living Room
LIVING-ROOM
contains: trophy case,
carpet,
trap door,
brass lantern,
wooden door,
sword" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"LIVING-ROOM" -> KITCHEN [label=EAST]
	"LIVING-ROOM" -> "STRANGE-PASSAGE" [label=WEST]
	CELLAR [label="Cellar
CELLAR" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	CELLAR -> "TROLL-ROOM" [label=NORTH]
	CELLAR -> "EAST-OF-CHASM" [label=SOUTH]
	CELLAR -> "LIVING-ROOM" [label=UP]
	"TROLL-ROOM" [label="The Troll Room
TROLL-ROOM
contains: troll" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"TROLL-ROOM" -> CELLAR [label=SOUTH]
	"TROLL-ROOM" -> "EW-PASSAGE" [label=EAST]
	"TROLL-ROOM" -> "MAZE-1" [label=WEST]
	"EAST-OF-CHASM" [label="East of Chasm
EAST-OF-CHASM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"EAST-OF-CHASM" -> CELLAR [label=NORTH]
	"EAST-OF-CHASM" -> GALLERY [label=EAST]
	GALLERY [label="Gallery
GALLERY
contains: painting" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	GALLERY -> "EAST-OF-CHASM" [label=WEST]
	GALLERY -> STUDIO [label=NORTH]
	STUDIO [label="Studio
STUDIO
contains: ZORK owner's manual" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	STUDIO -> GALLERY [label=SOUTH]
	"MAZE-1" [label="Maze
MAZE-1" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-1" -> "TROLL-ROOM" [label=EAST]
	"MAZE-1" -> "MAZE-1" [label=NORTH]
	"MAZE-1" -> "MAZE-2" [label=SOUTH]
	"MAZE-1" -> "MAZE-4" [label=WEST]
	"MAZE-2" [label="Maze
MAZE-2" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-2" -> "MAZE-1" [label=SOUTH]
	"MAZE-2" -> "MAZE-3" [label=EAST]
	"MAZE-3" [label="Maze
MAZE-3" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-3" -> "MAZE-2" [label=WEST]
	"MAZE-3" -> "MAZE-4" [label=NORTH]
	"MAZE-3" -> "MAZE-5" [label=UP]
	"MAZE-4" [label="Maze
MAZE-4" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-4" -> "MAZE-3" [label=WEST]
	"MAZE-4" -> "MAZE-1" [label=NORTH]
	"MAZE-4" -> "DEAD-END-1" [label=EAST]
	"DEAD-END-1" [label="Dead End
DEAD-END-1" fillcolor=firebrick fontcolor=gold shape=box style=filled]
	"DEAD-END-1" -> "MAZE-4" [label=SOUTH]
	"MAZE-5" [label="Maze
MAZE-5
contains: skeleton,
burned-out lantern,
leather bag of coins,
rusty knife,
skeleton key" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-5" -> "DEAD-END-2" [label=EAST]
	"MAZE-5" -> "MAZE-3" [label=NORTH]
	"MAZE-5" -> "MAZE-6" [label=SW]
	"DEAD-END-2" [label="Dead End
DEAD-END-2" fillcolor=firebrick fontcolor=gold shape=box style=filled]
	"DEAD-END-2" -> "MAZE-5" [label=WEST]
	"MAZE-6" [label="Maze
MAZE-6" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-6" -> "MAZE-5" [label=DOWN]
	"MAZE-6" -> "MAZE-7" [label=EAST]
	"MAZE-6" -> "MAZE-6" [label=WEST]
	"MAZE-6" -> "MAZE-9" [label=UP]
	"MAZE-7" [label="Maze
MAZE-7" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-7" -> "MAZE-14" [label=UP]
	"MAZE-7" -> "MAZE-6" [label=WEST]
	"MAZE-7" -> "MAZE-8" [label=EAST]
	"MAZE-7" -> "MAZE-15" [label=SOUTH]
	"MAZE-8" [label="Maze
MAZE-8" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-8" -> "MAZE-7" [label=NE]
	"MAZE-8" -> "MAZE-8" [label=WEST]
	"MAZE-8" -> "DEAD-END-3" [label=SE]
	"DEAD-END-3" [label="Dead End
DEAD-END-3" fillcolor=firebrick fontcolor=gold shape=box style=filled]
	"DEAD-END-3" -> "MAZE-8" [label=NORTH]
	"MAZE-9" [label="Maze
MAZE-9" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-9" -> "MAZE-6" [label=NORTH]
	"MAZE-9" -> "MAZE-10" [label=EAST]
	"MAZE-9" -> "MAZE-13" [label=SOUTH]
	"MAZE-9" -> "MAZE-12" [label=WEST]
	"MAZE-9" -> "MAZE-9" [label=NW]
	"MAZE-10" [label="Maze
MAZE-10" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-10" -> "MAZE-9" [label=EAST]
	"MAZE-10" -> "MAZE-13" [label=WEST]
	"MAZE-10" -> "MAZE-11" [label=UP]
	"MAZE-11" [label="Maze
MAZE-11" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-11" -> "GRATING-ROOM" [label=NE]
	"MAZE-11" -> "MAZE-10" [label=DOWN]
	"MAZE-11" -> "MAZE-13" [label=NW]
	"MAZE-11" -> "MAZE-12" [label=SW]
	"GRATING-ROOM" [label="Grating Room
GRATING-ROOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"GRATING-ROOM" -> "MAZE-11" [label=SW]
	"GRATING-ROOM" -> "GRATING-CLEARING" [label=UP]
	"MAZE-12" [label="Maze
MAZE-12" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-12" -> "MAZE-11" [label=SW]
	"MAZE-12" -> "MAZE-13" [label=EAST]
	"MAZE-12" -> "MAZE-9" [label=UP]
	"MAZE-12" -> "DEAD-END-4" [label=NORTH]
	"DEAD-END-4" [label="Dead End
DEAD-END-4" fillcolor=firebrick fontcolor=gold shape=box style=filled]
	"DEAD-END-4" -> "MAZE-12" [label=SOUTH]
	"MAZE-13" [label="Maze
MAZE-13" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-13" -> "MAZE-9" [label=EAST]
	"MAZE-13" -> "MAZE-12" [label=DOWN]
	"MAZE-13" -> "MAZE-10" [label=SOUTH]
	"MAZE-13" -> "MAZE-11" [label=WEST]
	"MAZE-14" [label="Maze
MAZE-14" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-14" -> "MAZE-15" [label=WEST]
	"MAZE-14" -> "MAZE-14" [label=NW]
	"MAZE-14" -> "MAZE-7" [label=NE]
	"MAZE-14" -> "MAZE-7" [label=SOUTH]
	"MAZE-15" [label="Maze
MAZE-15" fillcolor=dodgerblue fontcolor=black shape=box style=filled]
	"MAZE-15" -> "MAZE-14" [label=WEST]
	"MAZE-15" -> "MAZE-7" [label=SOUTH]
	"MAZE-15" -> "CYCLOPS-ROOM" [label=SE]
	"CYCLOPS-ROOM" [label="Cyclops Room
CYCLOPS-ROOM
contains: cyclops" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"CYCLOPS-ROOM" -> "MAZE-15" [label=NW]
	"CYCLOPS-ROOM" -> "STRANGE-PASSAGE" [label=EAST]
	"CYCLOPS-ROOM" -> "TREASURE-ROOM" [label=UP]
	"STRANGE-PASSAGE" [label="Strange Passage
STRANGE-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"STRANGE-PASSAGE" -> "CYCLOPS-ROOM" [label=WEST]
	"STRANGE-PASSAGE" -> "CYCLOPS-ROOM" [label=IN]
	"STRANGE-PASSAGE" -> "LIVING-ROOM" [label=EAST]
	"TREASURE-ROOM" [label="Treasure Room
TREASURE-ROOM
contains: chalice" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"TREASURE-ROOM" -> "CYCLOPS-ROOM" [label=DOWN]
	"RESERVOIR-SOUTH" [label="Reservoir South
RESERVOIR-SOUTH" fillcolor=greenyellow fontcolor=black shape=box style=filled]
	"RESERVOIR-SOUTH" -> "DEEP-CANYON" [label=SE]
	"RESERVOIR-SOUTH" -> "CHASM-ROOM" [label=SW]
	"RESERVOIR-SOUTH" -> "DAM-ROOM" [label=EAST]
	"RESERVOIR-SOUTH" -> "STREAM-VIEW" [label=WEST]
	"RESERVOIR-SOUTH" -> RESERVOIR [label=NORTH]
	RESERVOIR [label="Reservoir
RESERVOIR
contains: trunk of jewels" fillcolor=greenyellow fontcolor=black shape=box style=filled]
	RESERVOIR -> "RESERVOIR-NORTH" [label=NORTH]
	RESERVOIR -> "RESERVOIR-SOUTH" [label=SOUTH]
	RESERVOIR -> "IN-STREAM" [label=UP]
	RESERVOIR -> "IN-STREAM" [label=WEST]
	"RESERVOIR-NORTH" [label="Reservoir North
RESERVOIR-NORTH
contains: hand-held air pump" fillcolor=greenyellow fontcolor=black shape=box style=filled]
	"RESERVOIR-NORTH" -> "ATLANTIS-ROOM" [label=NORTH]
	"RESERVOIR-NORTH" -> RESERVOIR [label=SOUTH]
	"STREAM-VIEW" [label="Stream View
STREAM-VIEW" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"STREAM-VIEW" -> "RESERVOIR-SOUTH" [label=EAST]
	"IN-STREAM" [label="Stream
IN-STREAM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"IN-STREAM" -> "STREAM-VIEW" [label=LAND]
	"IN-STREAM" -> RESERVOIR [label=DOWN]
	"IN-STREAM" -> RESERVOIR [label=EAST]
	"MIRROR-ROOM-1" [label="Mirror Room
MIRROR-ROOM-1
contains: mirror" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"MIRROR-ROOM-1" -> "COLD-PASSAGE" [label=NORTH]
	"MIRROR-ROOM-1" -> "TWISTING-PASSAGE" [label=WEST]
	"MIRROR-ROOM-1" -> "SMALL-CAVE" [label=EAST]
	"MIRROR-ROOM-2" [label="Mirror Room
MIRROR-ROOM-2
contains: mirror" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"MIRROR-ROOM-2" -> "WINDING-PASSAGE" [label=WEST]
	"MIRROR-ROOM-2" -> "NARROW-PASSAGE" [label=NORTH]
	"MIRROR-ROOM-2" -> "TINY-CAVE" [label=EAST]
	"SMALL-CAVE" [label="Cave
SMALL-CAVE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SMALL-CAVE" -> "MIRROR-ROOM-1" [label=NORTH]
	"SMALL-CAVE" -> "ATLANTIS-ROOM" [label=DOWN]
	"SMALL-CAVE" -> "ATLANTIS-ROOM" [label=SOUTH]
	"SMALL-CAVE" -> "TWISTING-PASSAGE" [label=WEST]
	"TINY-CAVE" [label="Cave
TINY-CAVE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"TINY-CAVE" -> "MIRROR-ROOM-2" [label=NORTH]
	"TINY-CAVE" -> "WINDING-PASSAGE" [label=WEST]
	"TINY-CAVE" -> "ENTRANCE-TO-HADES" [label=DOWN]
	"COLD-PASSAGE" [label="Cold Passage
COLD-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"COLD-PASSAGE" -> "MIRROR-ROOM-1" [label=SOUTH]
	"COLD-PASSAGE" -> "SLIDE-ROOM" [label=WEST]
	"NARROW-PASSAGE" [label="Narrow Passage
NARROW-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"NARROW-PASSAGE" -> "ROUND-ROOM" [label=NORTH]
	"NARROW-PASSAGE" -> "MIRROR-ROOM-2" [label=SOUTH]
	"WINDING-PASSAGE" [label="Winding Passage
WINDING-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"WINDING-PASSAGE" -> "MIRROR-ROOM-2" [label=NORTH]
	"WINDING-PASSAGE" -> "TINY-CAVE" [label=EAST]
	"TWISTING-PASSAGE" [label="Twisting Passage
TWISTING-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"TWISTING-PASSAGE" -> "MIRROR-ROOM-1" [label=NORTH]
	"TWISTING-PASSAGE" -> "SMALL-CAVE" [label=EAST]
	"ATLANTIS-ROOM" [label="Atlantis Room
ATLANTIS-ROOM
contains: crystal trident" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"ATLANTIS-ROOM" -> "SMALL-CAVE" [label=UP]
	"ATLANTIS-ROOM" -> "RESERVOIR-NORTH" [label=SOUTH]
	"EW-PASSAGE" [label="East-West Passage
EW-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"EW-PASSAGE" -> "ROUND-ROOM" [label=EAST]
	"EW-PASSAGE" -> "TROLL-ROOM" [label=WEST]
	"EW-PASSAGE" -> "CHASM-ROOM" [label=DOWN]
	"EW-PASSAGE" -> "CHASM-ROOM" [label=NORTH]
	"ROUND-ROOM" [label="Round Room
ROUND-ROOM
contains: thief" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"ROUND-ROOM" -> "LOUD-ROOM" [label=EAST]
	"ROUND-ROOM" -> "EW-PASSAGE" [label=WEST]
	"ROUND-ROOM" -> "NS-PASSAGE" [label=NORTH]
	"ROUND-ROOM" -> "NARROW-PASSAGE" [label=SOUTH]
	"ROUND-ROOM" -> "ENGRAVINGS-CAVE" [label=SE]
	"DEEP-CANYON" [label="Deep Canyon
DEEP-CANYON" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"DEEP-CANYON" -> "RESERVOIR-SOUTH" [label=NW]
	"DEEP-CANYON" -> "DAM-ROOM" [label=EAST]
	"DEEP-CANYON" -> "NS-PASSAGE" [label=SW]
	"DEEP-CANYON" -> "LOUD-ROOM" [label=DOWN]
	"DAMP-CAVE" [label="Damp Cave
DAMP-CAVE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"DAMP-CAVE" -> "LOUD-ROOM" [label=WEST]
	"DAMP-CAVE" -> "WHITE-CLIFFS-NORTH" [label=EAST]
	"LOUD-ROOM" [label="Loud Room
LOUD-ROOM
contains: platinum bar" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"LOUD-ROOM" -> "DAMP-CAVE" [label=EAST]
	"LOUD-ROOM" -> "ROUND-ROOM" [label=WEST]
	"LOUD-ROOM" -> "DEEP-CANYON" [label=UP]
	"NS-PASSAGE" [label="North-South Passage
NS-PASSAGE" fillcolor=cornsilk fontcolor=black shape=box style=filled]
	"NS-PASSAGE" -> "CHASM-ROOM" [label=NORTH]
	"NS-PASSAGE" -> "DEEP-CANYON" [label=NE]
	"NS-PASSAGE" -> "ROUND-ROOM" [label=SOUTH]
	"CHASM-ROOM" [label="Chasm
CHASM-ROOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"CHASM-ROOM" -> "RESERVOIR-SOUTH" [label=NE]
	"CHASM-ROOM" -> "EW-PASSAGE" [label=SW]
	"CHASM-ROOM" -> "EW-PASSAGE" [label=UP]
	"CHASM-ROOM" -> "NS-PASSAGE" [label=SOUTH]
	"ENTRANCE-TO-HADES" [label="Entrance to Hades
ENTRANCE-TO-HADES
contains: number of ghosts" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"ENTRANCE-TO-HADES" -> "TINY-CAVE" [label=UP]
	"ENTRANCE-TO-HADES" -> "LAND-OF-LIVING-DEAD" [label=IN]
	"ENTRANCE-TO-HADES" -> "LAND-OF-LIVING-DEAD" [label=SOUTH]
	"LAND-OF-LIVING-DEAD" [label="Land of the Dead
LAND-OF-LIVING-DEAD
contains: crystal skull" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"LAND-OF-LIVING-DEAD" -> "ENTRANCE-TO-HADES" [label=OUT]
	"LAND-OF-LIVING-DEAD" -> "ENTRANCE-TO-HADES" [label=NORTH]
	"ENGRAVINGS-CAVE" [label="Engravings Cave
ENGRAVINGS-CAVE
contains: wall with engravings" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"ENGRAVINGS-CAVE" -> "ROUND-ROOM" [label=NW]
	"ENGRAVINGS-CAVE" -> "DOME-ROOM" [label=EAST]
	"EGYPT-ROOM" [label="Egyptian Room
EGYPT-ROOM
contains: gold coffin" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"EGYPT-ROOM" -> "NORTH-TEMPLE" [label=WEST]
	"EGYPT-ROOM" -> "NORTH-TEMPLE" [label=UP]
	"DOME-ROOM" [label="Dome Room
DOME-ROOM
contains: wooden railing" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"DOME-ROOM" -> "ENGRAVINGS-CAVE" [label=WEST]
	"DOME-ROOM" -> "TORCH-ROOM" [label=DOWN]
	"TORCH-ROOM" [label="Torch Room
TORCH-ROOM
contains: pedestal" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"TORCH-ROOM" -> "NORTH-TEMPLE" [label=SOUTH]
	"TORCH-ROOM" -> "NORTH-TEMPLE" [label=DOWN]
	"NORTH-TEMPLE" [label="Temple
NORTH-TEMPLE
contains: brass bell,
prayer" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"NORTH-TEMPLE" -> "EGYPT-ROOM" [label=DOWN]
	"NORTH-TEMPLE" -> "EGYPT-ROOM" [label=EAST]
	"NORTH-TEMPLE" -> "TORCH-ROOM" [label=NORTH]
	"NORTH-TEMPLE" -> "TORCH-ROOM" [label=OUT]
	"NORTH-TEMPLE" -> "TORCH-ROOM" [label=UP]
	"NORTH-TEMPLE" -> "SOUTH-TEMPLE" [label=SOUTH]
	"SOUTH-TEMPLE" [label="Altar
SOUTH-TEMPLE
contains: altar,
pair of candles" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SOUTH-TEMPLE" -> "NORTH-TEMPLE" [label=NORTH]
	"SOUTH-TEMPLE" -> "TINY-CAVE" [label=DOWN]
	"DAM-ROOM" [label="Dam
DAM-ROOM
contains: bolt,
green bubble,
dam,
control panel" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"DAM-ROOM" -> "DEEP-CANYON" [label=SOUTH]
	"DAM-ROOM" -> "DAM-BASE" [label=DOWN]
	"DAM-ROOM" -> "DAM-BASE" [label=EAST]
	"DAM-ROOM" -> "DAM-LOBBY" [label=NORTH]
	"DAM-ROOM" -> "RESERVOIR-SOUTH" [label=WEST]
	"DAM-LOBBY" [label="Dam Lobby
DAM-LOBBY
contains: matchbook,
tour guidebook" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"DAM-LOBBY" -> "DAM-ROOM" [label=SOUTH]
	"DAM-LOBBY" -> "MAINTENANCE-ROOM" [label=NORTH]
	"DAM-LOBBY" -> "MAINTENANCE-ROOM" [label=EAST]
	"MAINTENANCE-ROOM" [label="Maintenance Room
MAINTENANCE-ROOM
contains: group of tool chests,
yellow button,
brown button,
red button,
blue button,
leak,
screwdriver,
tube,
wrench" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"MAINTENANCE-ROOM" -> "DAM-LOBBY" [label=SOUTH]
	"MAINTENANCE-ROOM" -> "DAM-LOBBY" [label=WEST]
	"DAM-BASE" [label="Dam Base
DAM-BASE
contains: pile of plastic" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"DAM-BASE" -> "DAM-ROOM" [label=NORTH]
	"DAM-BASE" -> "DAM-ROOM" [label=UP]
	"RIVER-1" [label="Frigid River
RIVER-1" fillcolor=turquoise fontcolor=slateblue shape=box style=filled]
	"RIVER-1" -> "DAM-BASE" [label=WEST]
	"RIVER-1" -> "DAM-BASE" [label=LAND]
	"RIVER-1" -> "RIVER-2" [label=DOWN]
	"RIVER-2" [label="Frigid River
RIVER-2" fillcolor=turquoise fontcolor=slateblue shape=box style=filled]
	"RIVER-2" -> "RIVER-3" [label=DOWN]
	"RIVER-3" [label="Frigid River
RIVER-3" fillcolor=turquoise fontcolor=slateblue shape=box style=filled]
	"RIVER-3" -> "RIVER-4" [label=DOWN]
	"RIVER-3" -> "WHITE-CLIFFS-NORTH" [label=LAND]
	"RIVER-3" -> "WHITE-CLIFFS-NORTH" [label=WEST]
	"WHITE-CLIFFS-NORTH" [label="White Cliffs Beach
WHITE-CLIFFS-NORTH" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"WHITE-CLIFFS-NORTH" -> "WHITE-CLIFFS-SOUTH" [label=SOUTH]
	"WHITE-CLIFFS-NORTH" -> "DAMP-CAVE" [label=WEST]
	"WHITE-CLIFFS-SOUTH" [label="White Cliffs Beach
WHITE-CLIFFS-SOUTH" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"WHITE-CLIFFS-SOUTH" -> "WHITE-CLIFFS-NORTH" [label=NORTH]
	"RIVER-4" [label="Frigid River
RIVER-4
contains: red buoy" fillcolor=turquoise fontcolor=slateblue shape=box style=filled]
	"RIVER-4" -> "RIVER-5" [label=DOWN]
	"RIVER-4" -> "WHITE-CLIFFS-SOUTH" [label=WEST]
	"RIVER-4" -> "SANDY-BEACH" [label=EAST]
	"RIVER-5" [label="Frigid River
RIVER-5" fillcolor=turquoise fontcolor=slateblue shape=box style=filled]
	"RIVER-5" -> SHORE [label=EAST]
	"RIVER-5" -> SHORE [label=LAND]
	SHORE [label="Shore
SHORE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	SHORE -> "SANDY-BEACH" [label=NORTH]
	SHORE -> "ARAGAIN-FALLS" [label=SOUTH]
	"SANDY-BEACH" [label="Sandy Beach
SANDY-BEACH
contains: shovel" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SANDY-BEACH" -> "SANDY-CAVE" [label=NE]
	"SANDY-BEACH" -> SHORE [label=SOUTH]
	"SANDY-CAVE" [label="Sandy Cave
SANDY-CAVE
contains: sand,
beautiful jeweled scarab" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SANDY-CAVE" -> "SANDY-BEACH" [label=SW]
	"ARAGAIN-FALLS" [label="Aragain Falls
ARAGAIN-FALLS" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"ARAGAIN-FALLS" -> "ON-RAINBOW" [label=WEST]
	"ARAGAIN-FALLS" -> SHORE [label=NORTH]
	"ARAGAIN-FALLS" -> "ON-RAINBOW" [label=UP]
	"ON-RAINBOW" [label="On the Rainbow
ON-RAINBOW" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"ON-RAINBOW" -> "END-OF-RAINBOW" [label=WEST]
	"ON-RAINBOW" -> "ARAGAIN-FALLS" [label=EAST]
	"END-OF-RAINBOW" [label="End of Rainbow
END-OF-RAINBOW
contains: pot of gold" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"END-OF-RAINBOW" -> "ON-RAINBOW" [label=UP]
	"END-OF-RAINBOW" -> "ON-RAINBOW" [label=NE]
	"END-OF-RAINBOW" -> "ON-RAINBOW" [label=EAST]
	"END-OF-RAINBOW" -> "CANYON-BOTTOM" [label=SW]
	"CANYON-BOTTOM" [label="Canyon Bottom
CANYON-BOTTOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"CANYON-BOTTOM" -> "CLIFF-MIDDLE" [label=UP]
	"CANYON-BOTTOM" -> "END-OF-RAINBOW" [label=NORTH]
	"CLIFF-MIDDLE" [label="Rocky Ledge
CLIFF-MIDDLE" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"CLIFF-MIDDLE" -> "CANYON-VIEW" [label=UP]
	"CLIFF-MIDDLE" -> "CANYON-BOTTOM" [label=DOWN]
	"CANYON-VIEW" [label="Canyon View
CANYON-VIEW" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"CANYON-VIEW" -> "CLIFF-MIDDLE" [label=EAST]
	"CANYON-VIEW" -> "CLIFF-MIDDLE" [label=DOWN]
	"CANYON-VIEW" -> CLEARING [label=NW]
	"CANYON-VIEW" -> "FOREST-3" [label=WEST]
	"MINE-ENTRANCE" [label="Mine Entrance
MINE-ENTRANCE" fillcolor=black fontcolor=white shape=box style=filled]
	"MINE-ENTRANCE" -> "SLIDE-ROOM" [label=SOUTH]
	"MINE-ENTRANCE" -> "SQUEEKY-ROOM" [label=IN]
	"MINE-ENTRANCE" -> "SQUEEKY-ROOM" [label=WEST]
	"SQUEEKY-ROOM" [label="Squeaky Room
SQUEEKY-ROOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SQUEEKY-ROOM" -> "BAT-ROOM" [label=NORTH]
	"SQUEEKY-ROOM" -> "MINE-ENTRANCE" [label=EAST]
	"BAT-ROOM" [label="Bat Room
BAT-ROOM
contains: bat,
jade figurine" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"BAT-ROOM" -> "SQUEEKY-ROOM" [label=SOUTH]
	"BAT-ROOM" -> "SHAFT-ROOM" [label=EAST]
	"SHAFT-ROOM" [label="Shaft Room
SHAFT-ROOM
contains: basket" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SHAFT-ROOM" -> "BAT-ROOM" [label=WEST]
	"SHAFT-ROOM" -> "SMELLY-ROOM" [label=NORTH]
	"SMELLY-ROOM" [label="Smelly Room
SMELLY-ROOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SMELLY-ROOM" -> "GAS-ROOM" [label=DOWN]
	"SMELLY-ROOM" -> "SHAFT-ROOM" [label=SOUTH]
	"GAS-ROOM" [label="Gas Room
GAS-ROOM
contains: sapphire-encrusted bracelet" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"GAS-ROOM" -> "SMELLY-ROOM" [label=UP]
	"GAS-ROOM" -> "MINE-1" [label=EAST]
	"LADDER-TOP" [label="Ladder Top
LADDER-TOP" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"LADDER-TOP" -> "LADDER-BOTTOM" [label=DOWN]
	"LADDER-TOP" -> "MINE-4" [label=UP]
	"LADDER-BOTTOM" [label="Ladder Bottom
LADDER-BOTTOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"LADDER-BOTTOM" -> "DEAD-END-5" [label=SOUTH]
	"LADDER-BOTTOM" -> "TIMBER-ROOM" [label=WEST]
	"LADDER-BOTTOM" -> "LADDER-TOP" [label=UP]
	"DEAD-END-5" [label="Dead End
DEAD-END-5
contains: small pile of coal" fillcolor=firebrick fontcolor=gold shape=box style=filled]
	"DEAD-END-5" -> "LADDER-BOTTOM" [label=NORTH]
	"TIMBER-ROOM" [label="Timber Room
TIMBER-ROOM
contains: broken timber" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"TIMBER-ROOM" -> "LADDER-BOTTOM" [label=EAST]
	"TIMBER-ROOM" -> "LOWER-SHAFT" [label=WEST]
	"LOWER-SHAFT" [label="Drafty Room
LOWER-SHAFT
contains: basket" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"LOWER-SHAFT" -> "MACHINE-ROOM" [label=SOUTH]
	"LOWER-SHAFT" -> "TIMBER-ROOM" [label=OUT]
	"LOWER-SHAFT" -> "TIMBER-ROOM" [label=EAST]
	"MACHINE-ROOM" [label="Machine Room
MACHINE-ROOM
contains: machine,
switch" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"MACHINE-ROOM" -> "LOWER-SHAFT" [label=NORTH]
	"MINE-1" [label="Coal Mine
MINE-1" fillcolor=black fontcolor=white shape=box style=filled]
	"MINE-1" -> "GAS-ROOM" [label=NORTH]
	"MINE-1" -> "MINE-1" [label=EAST]
	"MINE-1" -> "MINE-2" [label=NE]
	"MINE-2" [label="Coal Mine
MINE-2" fillcolor=black fontcolor=white shape=box style=filled]
	"MINE-2" -> "MINE-2" [label=NORTH]
	"MINE-2" -> "MINE-1" [label=SOUTH]
	"MINE-2" -> "MINE-3" [label=SE]
	"MINE-3" [label="Coal Mine
MINE-3" fillcolor=black fontcolor=white shape=box style=filled]
	"MINE-3" -> "MINE-3" [label=SOUTH]
	"MINE-3" -> "MINE-4" [label=SW]
	"MINE-3" -> "MINE-2" [label=EAST]
	"MINE-4" [label="Coal Mine
MINE-4" fillcolor=black fontcolor=white shape=box style=filled]
	"MINE-4" -> "MINE-3" [label=NORTH]
	"MINE-4" -> "MINE-4" [label=WEST]
	"MINE-4" -> "LADDER-TOP" [label=DOWN]
	"SLIDE-ROOM" [label="Slide Room
SLIDE-ROOM" fillcolor=lightgrey fontcolor=black shape=box style=filled]
	"SLIDE-ROOM" -> "COLD-PASSAGE" [label=EAST]
	"SLIDE-ROOM" -> "MINE-ENTRANCE" [label=NORTH]
	"SLIDE-ROOM" -> CELLAR [label=DOWN]
}
`;
var parsedData = vis.network.convertDot(DOTstring);

var data = {
  nodes: parsedData.nodes,
  edges: parsedData.edges
};

var options = parsedData.options;
//options.physics = {
//  enabled: 'true'
//}

new vis.Network(container, data, options);
