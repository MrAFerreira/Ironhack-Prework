// Rover Object and Obstacles
// ======================
let rover = {direction:"N", x: 0, y: 0, travelLog:[] };
let obstacles = [{x:2, y:2}, {x:7, y:4}, {x:2, y:8}, {x:9, y:7}]
let newPosition = {x:rover.x, y:rover.y}; // Declaring here so it becomes available globaly
// ======================
function turnLeft(rover){
  let direction = rover.direction;
  switch(direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
      }
  console.log("turnLeft was called!");
  console.log(`The rover direction is ${rover.direction}`);
}

function turnRight(rover){
  let direction = rover.direction;
  switch(direction){
       case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
  console.log("turnRight was called!");
  console.log(`The rover direction is ${rover.direction}`); 
}

function checkBounds(){
  if(rover.y<0){
    rover.y++;
    console.log("Invalid input, the rover would go off bounds!")
  }else if(rover.y>9){
    rover.y--;
    console.log("Invalid input, the rover would go off bounds!")
  }else if(rover.x<0){
    rover.x++;
    console.log("Invalid input, the rover would go off bounds!")
  }else if(rover.x>9){
    rover.x--;
    console.log("Invalid input, the rover would go off bounds!")
  }
};

function moveForward(rover){
  let direction = rover.direction;
  switch(direction){
    case "N":
      rover.y--;
      checkBounds();
      break;
    case "W":
      rover.x--;
      checkBounds();
      break;
    case "S":
      rover.y++;
      checkBounds();
      break;
    case "E":
      rover.x++;
      checkBounds();
      break;
   }
  newPosition = {x:rover.x, y:rover.y};
  rover.travelLog.push(newPosition);
  console.log("moveForward was called")
  console.log(`The rover's position is x:${rover.x}, y:${rover.y}`);
}

function moveBackward(rover){
  let direction = rover.direction;
  switch(direction){
    case "N":
      rover.y++;
      checkBounds();
      break;
    case "W":
      rover.x++;
      checkBounds();
      break;
    case "S":
      rover.y--;
      checkBounds();
      break;
    case "E":
      rover.x--;
      checkBounds();
      break;
   }
  let newPosition = {x:rover.x, y:rover.y};
  rover.travelLog.push(newPosition);
  console.log("moveBackward was called")
  console.log(`The rover's position is x:${rover.x}, y:${rover.y}`);
};


function control(commands){
  for (const value of commands){
    switch(value){
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        console.log("Invalid input! Accepted inputs are r, l, f and b.")
        break;
    }   
  }
  for(let i=0; i<rover.travelLog.length; i++){
    console.log(`Path ${i} => x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
  }
};