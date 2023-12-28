
if (typeof gdjs.evtsExt__Player__TriggerDeath !== "undefined") {
  gdjs.evtsExt__Player__TriggerDeath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Player__TriggerDeath = {};
gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects1= [];
gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects2= [];


gdjs.evtsExt__Player__TriggerDeath.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595TriggerDeath_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects1});
gdjs.evtsExt__Player__TriggerDeath.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595TriggerDeath_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects1});
gdjs.evtsExt__Player__TriggerDeath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects1);
{gdjs.evtsExt__Checkpoints__LoadCheckpoint.func(runtimeScene, gdjs.evtsExt__Player__TriggerDeath.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595TriggerDeath_9546GDPlayerObjects1Objects, gdjs.evtsExt__Player__TriggerDeath.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595TriggerDeath_9546GDPlayerObjects1Objects, "Checkpoint", false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "death.mp3", false, 50, 1);
}}

}


};

gdjs.evtsExt__Player__TriggerDeath.func = function(runtimeScene, Player, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
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

gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Player__TriggerDeath.GDPlayerObjects2.length = 0;

gdjs.evtsExt__Player__TriggerDeath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Player__TriggerDeath.registeredGdjsCallbacks = [];