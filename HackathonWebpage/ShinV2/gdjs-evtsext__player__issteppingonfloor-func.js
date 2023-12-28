
if (typeof gdjs.evtsExt__Player__IsSteppingOnFloor !== "undefined") {
  gdjs.evtsExt__Player__IsSteppingOnFloor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Player__IsSteppingOnFloor = {};
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final = [];

gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1= [];
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2= [];


gdjs.evtsExt__Player__IsSteppingOnFloor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1[k] = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == "Run" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1[k] = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1, gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[i].getAnimationFrame() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[k] = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final.indexOf(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[j]) === -1 )
            gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final.push(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1, gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[i].getAnimationFrame() == 14 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[k] = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final.indexOf(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[j]) === -1 )
            gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final.push(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1_1final, gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Player__IsSteppingOnFloor.func = function(runtimeScene, Player, PlatformerObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
},
  _behaviorNamesMap: {
"PlatformerObject": PlatformerObject
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Player__IsSteppingOnFloor.GDPlayerObjects2.length = 0;

gdjs.evtsExt__Player__IsSteppingOnFloor.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Player__IsSteppingOnFloor.registeredGdjsCallbacks = [];