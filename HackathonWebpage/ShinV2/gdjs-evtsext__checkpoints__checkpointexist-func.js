
if (typeof gdjs.evtsExt__Checkpoints__CheckpointExist !== "undefined") {
  gdjs.evtsExt__Checkpoints__CheckpointExist.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Checkpoints__CheckpointExist = {};
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final = [];

gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1= [];
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2= [];


gdjs.evtsExt__Checkpoints__CheckpointExist.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ToCheckObject"), gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[i].variableChildExists(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[i].getVariables().get("__Checkpoints").getChild("Position"), "Y" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : "")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[k] = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[i].variableChildExists(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[i].getVariables().get("__Checkpoints").getChild("Position"), "X" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : "")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[k] = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ToCheckObject"), gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[i].variableChildExists(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[i].getVariables().get("__Checkpoints").getChild("Position"), "X" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : ""))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[k] = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final.indexOf(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final.push(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("ToCheckObject"), gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[i].variableChildExists(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[i].getVariables().get("__Checkpoints").getChild("Position"), "Y" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : ""))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[k] = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final.indexOf(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final.push(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1_1final, gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__Checkpoints__CheckpointExist.func = function(runtimeScene, ToCheckObject, CheckpointName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ToCheckObject": ToCheckObject
},
  _objectArraysMap: {
"ToCheckObject": gdjs.objectsListsToArray(ToCheckObject)
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
if (argName === "CheckpointName") return CheckpointName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects1.length = 0;
gdjs.evtsExt__Checkpoints__CheckpointExist.GDToCheckObjectObjects2.length = 0;

gdjs.evtsExt__Checkpoints__CheckpointExist.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Checkpoints__CheckpointExist.registeredGdjsCallbacks = [];