
if (typeof gdjs.evtsExt__Enemy__IsFlyDead !== "undefined") {
  gdjs.evtsExt__Enemy__IsFlyDead.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Enemy__IsFlyDead = {};
gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1= [];
gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects2= [];


gdjs.evtsExt__Enemy__IsFlyDead.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Fly"), gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1[i].getVariableBoolean(gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1[i].getVariables().get("Dead"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1[k] = gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Enemy__IsFlyDead.func = function(runtimeScene, Fly, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Fly": Fly
},
  _objectArraysMap: {
"Fly": gdjs.objectsListsToArray(Fly)
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects1.length = 0;
gdjs.evtsExt__Enemy__IsFlyDead.GDFlyObjects2.length = 0;

gdjs.evtsExt__Enemy__IsFlyDead.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Enemy__IsFlyDead.registeredGdjsCallbacks = [];