
if (typeof gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge !== "undefined") {
  gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge = {};
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final = [];

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final = [];

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2= [];
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2= [];


gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i].getCenterXInScene() >= (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i].getCenterXInScene() <= (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBRight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i].getCenterYInScene() >= (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i].getCenterYInScene() <= (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1 */
/* Reuse gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.min(Math.min((( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterY()) - (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBTop()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBBottom()) - (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterY())), Math.min((( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterX()) - (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBLeft()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBRight()) - (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterX()))); }}}

}


{



}


{

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length = 0;

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.length = 0;
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i].getCenterXInScene() < (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[0].getAABBLeft()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i].getCenterXInScene() > (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[0].getAABBRight()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i].getCenterYInScene() < (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[0].getAABBTop()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i].getCenterYInScene() > (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[0].getAABBBottom()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[k] = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.indexOf(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final.push(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1_1final, gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1);
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1_1final, gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1 */
/* Reuse gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterX()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterY()), gdjs.evtTools.common.clamp((( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterX()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBLeft()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBRight())), gdjs.evtTools.common.clamp((( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1[0].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBTop()), (( gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1[0].getAABBBottom()))); }}}

}


};

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.func = function(runtimeScene, CenterObject, MovingObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"CenterObject": CenterObject
, "MovingObject": MovingObject
},
  _objectArraysMap: {
"CenterObject": gdjs.objectsListsToArray(CenterObject)
, "MovingObject": gdjs.objectsListsToArray(MovingObject)
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

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.GDMovingObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.registeredGdjsCallbacks = [];