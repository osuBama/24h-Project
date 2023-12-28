
if (typeof gdjs.evtsExt__UserInterface__StretchToFillScreen !== "undefined") {
  gdjs.evtsExt__UserInterface__StretchToFillScreen.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UserInterface__StretchToFillScreen = {};
gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1= [];
gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects2= [];


gdjs.evtsExt__UserInterface__StretchToFillScreen.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("EndScreenBackground"), gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1);
{for(var i = 0, len = gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, (gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1[i].getLayer()), 0));
}
}{for(var i = 0, len = gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, (gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1[i].getLayer()), 0));
}
}}

}


};

gdjs.evtsExt__UserInterface__StretchToFillScreen.func = function(runtimeScene, EndScreenBackground, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"EndScreenBackground": EndScreenBackground
},
  _objectArraysMap: {
"EndScreenBackground": gdjs.objectsListsToArray(EndScreenBackground)
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

gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__UserInterface__StretchToFillScreen.GDEndScreenBackgroundObjects2.length = 0;

gdjs.evtsExt__UserInterface__StretchToFillScreen.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__UserInterface__StretchToFillScreen.registeredGdjsCallbacks = [];