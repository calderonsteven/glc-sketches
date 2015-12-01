function onGLC(glc) {
    glc.loop();
    glc.size(600, 200);
    // glc.setDuration(5);
    // glc.setFPS(20);
    glc.setMode("single");
    glc.setEasing(false);
    // glc.setMaxColors(256);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    //color = 'red';
    //glc.styles.backgroundColor = '#000';
    //glc.styles.strokeStyle = '#FFF';

    glc.renderList.addCube({
        //rotationX: [0, 180],
        rotationY: [0, 180],
        //rotationZ: [0, 180],
        x: [-100, width/3]
    });

    glc.renderList.addCube({
        size: 25,
        rotationY: [0, 180],
        rotationZ: [0, 180],
        x: [-100, width/3]
    });


    glc.renderList.addCube({
        //rotationX: [0, 180],
        //rotationY: [0, 180],
        rotationZ: [0, 180],
        x: [width/3, width-(width/3)]
    });

    glc.renderList.addCube({
        rotationX: [0, 180],
        //rotationY: [0, 180],
        size: 25,
        rotationZ: [0, 180],
        x: [width/3, width-(width/3)]
    });

    
    glc.renderList.addCube({
        rotationX: [0, 180],
        //rotationY: [0, 180],
        //rotationZ: [0, 180],
        x: [width-(width/3), width+100]
    });

    glc.renderList.addCube({
        rotationX: [0, 180],
        rotationY: [0, 180],
        //rotationZ: [0, 180],
        size: 25,
        x: [width-(width/3), width+100]
    });
    
}