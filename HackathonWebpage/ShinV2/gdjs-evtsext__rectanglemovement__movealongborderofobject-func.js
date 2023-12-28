
if (typeof gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject !== "undefined") {
  gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject = {};
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2 = 0;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4 = 0;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachObjects2 = [];

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachObjects4 = [];

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary2 = null;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary4 = null;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTotalCount2 = 0;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTotalCount4 = 0;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects6= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects2= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5= [];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects6= [];


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDCenterObjectObjects3Objects = Hashtable.newFrom({"CenterObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects3Objects = Hashtable.newFrom({"MovingObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDCenterObjectObjects5Objects = Hashtable.newFrom({"CenterObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects5Objects = Hashtable.newFrom({"MovingObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].returnVariable(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].getVariables().get("__RectangleMovement").getChild("DistanceToClosestEdge")).setNumber(Math.min((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].getVariables().get("__RectangleMovement").getChild("DistanceToClosestEdge"))), gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.func(runtimeScene, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDCenterObjectObjects5Objects, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects5Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3);

for (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4 = 0;gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4 < gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length;++gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4) {
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length = 0;


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary4 = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.push(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDCenterObjectObjects5Objects = Hashtable.newFrom({"CenterObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects5Objects = Hashtable.newFrom({"MovingObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].getVariables().get("__RectangleMovement").getChild("Linked"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[k] = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.func(runtimeScene, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDCenterObjectObjects5Objects, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects5Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[0].getVariables()).get("__RectangleMovement").getChild("DistanceToClosestEdge"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5 */
/* Reuse gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length !== 0 ? gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[0] : null), (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5.length !== 0 ? gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5[i].getVariables().get("__RectangleMovement").getChild("Linked"), true);
}
}}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3);

for (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4 = 0;gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4 < gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length;++gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4) {
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length = 0;


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary4 = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex4];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.push(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].returnVariable(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getVariables().get("__RectangleMovement").getChild("DistanceToClosestEdge")).setNumber(gdjs.evtsExt__RectangleMovement__DistanceToClosestEdge.func(runtimeScene, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDCenterObjectObjects3Objects, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList3(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1 */

for (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2 = 0;gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2 < gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1.length;++gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2) {
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2.length = 0;


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary2 = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1[gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2.push(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList5(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1[i].getVariables().get("__RectangleMovement").getChild("Linked"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects3Objects = Hashtable.newFrom({"MovingObject": gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3});
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PositionOnBorder") : "") == "Inside");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PositionOnBorder") : "") == "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetTop((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBTop()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetBottom((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBBottom()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetLeft((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBLeft()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetRight((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBRight()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PositionOnBorder") : "") == "Center");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetTop((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBTop()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getHeight()) / 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetBottom((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBBottom()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getHeight()) / 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetLeft((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBLeft()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getWidth()) / 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetRight((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4[0].getAABBRight()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4[i].getWidth()) / 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PositionOnBorder") : "") == "Outside");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3 */
/* Reuse gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetTop((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[0].getAABBTop()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetBottom((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[0].getAABBBottom()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetLeft((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[0].getAABBLeft()) - (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RectangleMovement")).SetRight((( gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[0].getAABBRight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList10(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects2, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("MovingObject"), gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.mapOfGDgdjs_9546evtsExt_9595_9595RectangleMovement_9595_9595MoveAlongBorderOfObject_9546GDMovingObjectObjects3Objects, (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length !== 0 ? gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects1);

for (gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2 = 0;gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2 < gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects1.length;++gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2) {
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects2.length = 0;


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary2 = gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects1[gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachIndex2];
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects2.push(gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList12(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList13(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.func = function(runtimeScene, MovingObject, RectangleMovement, CenterObject, PositionOnBorder, parentEventsFunctionContext) {
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
if (argName === "PositionOnBorder") return PositionOnBorder;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects2.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects3.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects4.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects5.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDMovingObjectObjects6.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects3.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects4.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects5.length = 0;
gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.GDCenterObjectObjects6.length = 0;

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.eventsList14(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.registeredGdjsCallbacks = [];