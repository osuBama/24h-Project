
if (typeof gdjs.evtsExt__Enemy__TriggerFlyDeath !== "undefined") {
  gdjs.evtsExt__Enemy__TriggerFlyDeath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Enemy__TriggerFlyDeath = {};
gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1= [];
gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects2= [];


gdjs.evtsExt__Enemy__TriggerFlyDeath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Fly"), gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1);
{for(var i = 0, len = gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("RectangularMovement"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1[i].addPolarForce(90, 150, 1);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeObject_PositionAngle")).ShakeObject_PositionAngle(300, 0, 0, 30, 0.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1[i].setVariableBoolean(gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1[i].getVariables().get("Dead"), true);
}
}}

}


};

gdjs.evtsExt__Enemy__TriggerFlyDeath.func = function(runtimeScene, Fly, RectangularMovement, ShakeObject_PositionAngle, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Fly": Fly
},
  _objectArraysMap: {
"Fly": gdjs.objectsListsToArray(Fly)
},
  _behaviorNamesMap: {
"RectangularMovement": RectangularMovement
, "ShakeObject_PositionAngle": ShakeObject_PositionAngle
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

gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects1.length = 0;
gdjs.evtsExt__Enemy__TriggerFlyDeath.GDFlyObjects2.length = 0;

gdjs.evtsExt__Enemy__TriggerFlyDeath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Enemy__TriggerFlyDeath.registeredGdjsCallbacks = [];