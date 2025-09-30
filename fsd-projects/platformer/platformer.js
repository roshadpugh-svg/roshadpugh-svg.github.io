$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms\
    createPlatform(200,550,80,50,"green");
    createPlatform(350,650,80,100,"green");
    createPlatform(400,430,100,100,"green");
    createPlatform(550,650,80,100,"green");
    createPlatform(680,350,100,150,"green");
    createPlatform(850,630,100,30,"green");
    createPlatform(1120,530,100,30,"green");



    // TODO 3 - Create Collectables
    createCollectable("database",1180,500);
    createCollectable("database",900,600);
    createCollectable("database",230,530);
    createCollectable("database",710,320);
    createCollectable("database",600,620);
  


    
    // TODO 4 - Create Cannons
    createCannon("right", 300, 2000);
    createCannon("right", 700, 1000);
    createCannon("left", 500, 3000);
    createCannon("left", 290, 4500);






    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
