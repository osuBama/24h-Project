
if (typeof gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff !== "undefined") {
  gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff = {};
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1= [];
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects2= [];
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1= [];
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects2= [];


gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AudioType") : "") == "Sound");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Source"), gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Target"), gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1);
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Channel")) || 0 : 0), gdjs.evtTools.common.lerp((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinVol")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxVol")) || 0 : 0), Math.max(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxDistance")) || 0 : 0) - gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1[0].getX()), (( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1[0].getY()), (( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1[0].getX()), (( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1[0].getY()))) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxDistance")) || 0 : 0), 0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AudioType") : "") == "Music");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Source"), gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Target"), gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1);
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Channel")) || 0 : 0), gdjs.evtTools.common.lerp((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinVol")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxVol")) || 0 : 0), Math.max(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxDistance")) || 0 : 0) - gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1[0].getX()), (( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1[0].getY()), (( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1[0].getX()), (( gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1.length === 0 ) ? 0 :gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1[0].getY()))) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxDistance")) || 0 : 0), 0)));
}}

}


};

gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.func = function(runtimeScene, Channel, AudioType, Source, Target, MinVol, MaxVol, MaxDistance, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Source": Source
, "Target": Target
},
  _objectArraysMap: {
"Source": gdjs.objectsListsToArray(Source)
, "Target": gdjs.objectsListsToArray(Target)
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
if (argName === "Channel") return Channel;
if (argName === "AudioType") return AudioType;
if (argName === "MinVol") return MinVol;
if (argName === "MaxVol") return MaxVol;
if (argName === "MaxDistance") return MaxDistance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects1.length = 0;
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDSourceObjects2.length = 0;
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects1.length = 0;
gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.GDTargetObjects2.length = 0;

gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.registeredGdjsCallbacks = [];