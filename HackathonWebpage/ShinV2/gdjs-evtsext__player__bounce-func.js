
if (typeof gdjs.evtsExt__Player__Bounce !== "undefined") {
  gdjs.evtsExt__Player__Bounce.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Player__Bounce = {};
gdjs.evtsExt__Player__Bounce.GDPlayerObjects1= [];
gdjs.evtsExt__Player__Bounce.GDPlayerObjects2= [];


gdjs.evtsExt__Player__Bounce.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Player__Bounce.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__Player__Bounce.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Bounce.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setCanJump();
}
}{for(var i = 0, len = gdjs.evtsExt__Player__Bounce.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Bounce.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).simulateJumpKey();
}
}}

}


};

gdjs.evtsExt__Player__Bounce.func = function(runtimeScene, Player, PlatformerObject, parentEventsFunctionContext) {
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

gdjs.evtsExt__Player__Bounce.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Player__Bounce.GDPlayerObjects2.length = 0;

gdjs.evtsExt__Player__Bounce.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Player__Bounce.registeredGdjsCallbacks = [];