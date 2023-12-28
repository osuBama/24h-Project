
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator || {};

/**
 * Behavior generated from Platformer character animator
 */
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator = class PlatformerCharacterAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.EnableAnimationChanges = behaviorData.EnableAnimationChanges !== undefined ? behaviorData.EnableAnimationChanges : true;
    this._behaviorData.EnableHorizontalFlipping = behaviorData.EnableHorizontalFlipping !== undefined ? behaviorData.EnableHorizontalFlipping : true;
    this._behaviorData.IdleAnimationName = behaviorData.IdleAnimationName !== undefined ? behaviorData.IdleAnimationName : "Idle";
    this._behaviorData.RunAnimationName = behaviorData.RunAnimationName !== undefined ? behaviorData.RunAnimationName : "Run";
    this._behaviorData.JumpAnimationName = behaviorData.JumpAnimationName !== undefined ? behaviorData.JumpAnimationName : "Jump";
    this._behaviorData.FallAnimationName = behaviorData.FallAnimationName !== undefined ? behaviorData.FallAnimationName : "Fall";
    this._behaviorData.ClimbAnimationName = behaviorData.ClimbAnimationName !== undefined ? behaviorData.ClimbAnimationName : "Climb";
    this._behaviorData.PlatformerBehavior = behaviorData.PlatformerBehavior !== undefined ? behaviorData.PlatformerBehavior : "";
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.Flippable = behaviorData.Flippable !== undefined ? behaviorData.Flippable : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.EnableAnimationChanges !== newBehaviorData.EnableAnimationChanges)
      this._behaviorData.EnableAnimationChanges = newBehaviorData.EnableAnimationChanges;
    if (oldBehaviorData.EnableHorizontalFlipping !== newBehaviorData.EnableHorizontalFlipping)
      this._behaviorData.EnableHorizontalFlipping = newBehaviorData.EnableHorizontalFlipping;
    if (oldBehaviorData.IdleAnimationName !== newBehaviorData.IdleAnimationName)
      this._behaviorData.IdleAnimationName = newBehaviorData.IdleAnimationName;
    if (oldBehaviorData.RunAnimationName !== newBehaviorData.RunAnimationName)
      this._behaviorData.RunAnimationName = newBehaviorData.RunAnimationName;
    if (oldBehaviorData.JumpAnimationName !== newBehaviorData.JumpAnimationName)
      this._behaviorData.JumpAnimationName = newBehaviorData.JumpAnimationName;
    if (oldBehaviorData.FallAnimationName !== newBehaviorData.FallAnimationName)
      this._behaviorData.FallAnimationName = newBehaviorData.FallAnimationName;
    if (oldBehaviorData.ClimbAnimationName !== newBehaviorData.ClimbAnimationName)
      this._behaviorData.ClimbAnimationName = newBehaviorData.ClimbAnimationName;
    if (oldBehaviorData.PlatformerBehavior !== newBehaviorData.PlatformerBehavior)
      this._behaviorData.PlatformerBehavior = newBehaviorData.PlatformerBehavior;
    if (oldBehaviorData.Animation !== newBehaviorData.Animation)
      this._behaviorData.Animation = newBehaviorData.Animation;
    if (oldBehaviorData.Flippable !== newBehaviorData.Flippable)
      this._behaviorData.Flippable = newBehaviorData.Flippable;

    return true;
  }

  // Properties:
  
  _getEnableAnimationChanges() {
    return this._behaviorData.EnableAnimationChanges !== undefined ? this._behaviorData.EnableAnimationChanges : true;
  }
  _setEnableAnimationChanges(newValue) {
    this._behaviorData.EnableAnimationChanges = newValue;
  }
  _toggleEnableAnimationChanges() {
    this._setEnableAnimationChanges(!this._getEnableAnimationChanges());
  }
  _getEnableHorizontalFlipping() {
    return this._behaviorData.EnableHorizontalFlipping !== undefined ? this._behaviorData.EnableHorizontalFlipping : true;
  }
  _setEnableHorizontalFlipping(newValue) {
    this._behaviorData.EnableHorizontalFlipping = newValue;
  }
  _toggleEnableHorizontalFlipping() {
    this._setEnableHorizontalFlipping(!this._getEnableHorizontalFlipping());
  }
  _getIdleAnimationName() {
    return this._behaviorData.IdleAnimationName !== undefined ? this._behaviorData.IdleAnimationName : "Idle";
  }
  _setIdleAnimationName(newValue) {
    this._behaviorData.IdleAnimationName = newValue;
  }
  _getRunAnimationName() {
    return this._behaviorData.RunAnimationName !== undefined ? this._behaviorData.RunAnimationName : "Run";
  }
  _setRunAnimationName(newValue) {
    this._behaviorData.RunAnimationName = newValue;
  }
  _getJumpAnimationName() {
    return this._behaviorData.JumpAnimationName !== undefined ? this._behaviorData.JumpAnimationName : "Jump";
  }
  _setJumpAnimationName(newValue) {
    this._behaviorData.JumpAnimationName = newValue;
  }
  _getFallAnimationName() {
    return this._behaviorData.FallAnimationName !== undefined ? this._behaviorData.FallAnimationName : "Fall";
  }
  _setFallAnimationName(newValue) {
    this._behaviorData.FallAnimationName = newValue;
  }
  _getClimbAnimationName() {
    return this._behaviorData.ClimbAnimationName !== undefined ? this._behaviorData.ClimbAnimationName : "Climb";
  }
  _setClimbAnimationName(newValue) {
    this._behaviorData.ClimbAnimationName = newValue;
  }
  _getPlatformerBehavior() {
    return this._behaviorData.PlatformerBehavior !== undefined ? this._behaviorData.PlatformerBehavior : "";
  }
  _setPlatformerBehavior(newValue) {
    this._behaviorData.PlatformerBehavior = newValue;
  }
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getFlippable() {
    return this._behaviorData.Flippable !== undefined ? this._behaviorData.Flippable : "";
  }
  _setFlippable(newValue) {
    this._behaviorData.Flippable = newValue;
  }
}

/**
 * Shared data generated from Platformer character animator
 */
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.SharedData = class PlatformerCharacterAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PlatformerCharacterAnimator_PlatformerCharacterAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PlatformerCharacterAnimator_PlatformerCharacterAnimatorSharedData = new gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._PlatformerCharacterAnimator_PlatformerCharacterAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Right")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12740468);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Left")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12742676);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(false);
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnableHorizontalFlipping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12749140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRunAnimationName()));
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12750860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName()));
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12752756);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClimbAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12754452);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12755948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12745028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12746620);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12757252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnableAnimationChanges() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects4= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Right")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */
{}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Left")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1 */
{}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnableHorizontalFlipping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRunAnimationName()));
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName()));
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClimbAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnableAnimationChanges() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.onActivateContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableAnimationChanges(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableAnimationChanges") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableAnimationChanges(true);
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimations = function(EnableAnimationChanges, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "EnableAnimationChanges") return EnableAnimationChanges;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableHorizontalFlipping(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableHorizontalFlipping") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableHorizontalFlipping(true);
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlipping = function(EnableHorizontalFlipping, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "EnableHorizontalFlipping") return EnableHorizontalFlipping;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationName = function(AnimationName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRunAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationName = function(AnimationName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationName = function(AnimationName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFallAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationName = function(AnimationName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClimbAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationName = function(AnimationName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("PlatformerCharacterAnimator::PlatformerCharacterAnimator", gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator);
