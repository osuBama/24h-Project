
if (typeof gdjs.evtsExt__RectangleMovement__MoveToNearestCorner !== "undefined") {
  gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner = {};
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachIndex2 = 0;

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachObjects2 = [];

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachTemporary2 = null;

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachTotalCount2 = 0;

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects2= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects5= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects2= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4= [];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects5= [];


gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveToNearestCorner_9546GDMovingObjectObjects1Objects = Hashtable.newFrom({"MovingObject": gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1});
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveToNearestCorner_9546GDCenterObjectObjects1Objects = Hashtable.newFrom({"CenterObject": gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects1});
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1[i].getVariables().get("__RectangleMovement").getChild("Linked"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects1);
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1 */
{gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.func(runtimeScene, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveToNearestCorner_9546GDMovingObjectObjects1Objects, eventsFunctionContext.getBehaviorName("RectangleMovement"), gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveToNearestCorner_9546GDCenterObjectObjects1Objects, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveToNearestCorner_9546GDCenterObjectObjects3Objects = Hashtable.newFrom({"CenterObject": gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3});
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].returnVariable(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getVariables().get("__RectangleMovement").getChild("ClosestCornerDistance")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getAABBCenterX()), (gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBLeft()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBTop())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).TeleportToCorner("Top-left corner", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[0].getAABBCenterX()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[0].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBRight()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBTop())) < (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[0].getVariables()).get("__RectangleMovement").getChild("ClosestCornerDistance"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4 */
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].returnVariable(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getVariables().get("__RectangleMovement").getChild("ClosestCornerDistance")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getAABBCenterX()), (gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBRight()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBTop())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).TeleportToCorner("Top-right corner", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[0].getAABBCenterX()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[0].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBLeft()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBBottom())) < (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[0].getVariables()).get("__RectangleMovement").getChild("ClosestCornerDistance"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4 */
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].returnVariable(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getVariables().get("__RectangleMovement").getChild("ClosestCornerDistance")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getAABBCenterX()), (gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBLeft()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4[0].getAABBBottom())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).TeleportToCorner("Bottom-left corner", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3 */
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[0].getAABBCenterX()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[0].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3[0].getAABBRight()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3[0].getAABBBottom())) < (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[0].getVariables()).get("__RectangleMovement").getChild("ClosestCornerDistance"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3 */
/* Reuse gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[i].returnVariable(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[i].getVariables().get("__RectangleMovement").getChild("ClosestCornerDistance")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[i].getAABBCenterX()), (gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[i].getAABBCenterY()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3[0].getAABBRight()), (( gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3[0].getAABBBottom())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).TeleportToCorner("Bottom-right corner", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects2, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveToNearestCorner_9546GDCenterObjectObjects3Objects, (gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length !== 0 ? gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1);

for (gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachIndex2 = 0;gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachIndex2 < gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1.length;++gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachIndex2) {
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects2.length = 0;


gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachTemporary2 = gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1[gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachIndex2];
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects2.push(gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.func = function(runtimeScene, MovingObject, RectangleMovement, CenterObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"MovingObject": MovingObject
, "CenterObject": CenterObject
},
  _objectArraysMap: {
"MovingObject": gdjs.objectsListsToArray(MovingObject)
, "CenterObject": gdjs.objectsListsToArray(CenterObject)
},
  _behaviorNamesMap: {
"RectangleMovement": RectangleMovement
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

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects2.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects3.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects4.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDMovingObjectObjects5.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects3.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects4.length = 0;
gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.GDCenterObjectObjects5.length = 0;

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.registeredGdjsCallbacks = [];