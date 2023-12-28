
if (typeof gdjs.evtsExt__Checkpoints__SaveCheckpoint !== "undefined") {
  gdjs.evtsExt__Checkpoints__SaveCheckpoint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Checkpoints__SaveCheckpoint = {};
gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1= [];
gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects2= [];


gdjs.evtsExt__Checkpoints__SaveCheckpoint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ToSaveObject"), gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1[i].returnVariable(gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1[i].getVariables().get("__Checkpoints").getChild("Position").getChild("X" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : ""))).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CoordinateX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1[i].returnVariable(gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1[i].getVariables().get("__Checkpoints").getChild("Position").getChild("Y" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : ""))).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CoordinateY")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkpoints__SaveCheckpoint.func = function(runtimeScene, ToSaveObject, CoordinateX, CoordinateY, CheckpointName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ToSaveObject": ToSaveObject
},
  _objectArraysMap: {
"ToSaveObject": gdjs.objectsListsToArray(ToSaveObject)
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
if (argName === "CoordinateX") return CoordinateX;
if (argName === "CoordinateY") return CoordinateY;
if (argName === "CheckpointName") return CheckpointName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects1.length = 0;
gdjs.evtsExt__Checkpoints__SaveCheckpoint.GDToSaveObjectObjects2.length = 0;

gdjs.evtsExt__Checkpoints__SaveCheckpoint.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Checkpoints__SaveCheckpoint.registeredGdjsCallbacks = [];