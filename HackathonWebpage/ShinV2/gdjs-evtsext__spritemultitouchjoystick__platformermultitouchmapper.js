
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper || {};

/**
 * Behavior generated from Platformer multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper = class PlatformerMultitouchMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Property = behaviorData.Property !== undefined ? behaviorData.Property : "";
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.JoystickIdentifier = behaviorData.JoystickIdentifier !== undefined ? behaviorData.JoystickIdentifier : "Primary";
    this._behaviorData.JumpButton = behaviorData.JumpButton !== undefined ? behaviorData.JumpButton : "A";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Property !== newBehaviorData.Property)
      this._behaviorData.Property = newBehaviorData.Property;
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.JoystickIdentifier !== newBehaviorData.JoystickIdentifier)
      this._behaviorData.JoystickIdentifier = newBehaviorData.JoystickIdentifier;
    if (oldBehaviorData.JumpButton !== newBehaviorData.JumpButton)
      this._behaviorData.JumpButton = newBehaviorData.JumpButton;

    return true;
  }

  // Properties:
  
  _getProperty() {
    return this._behaviorData.Property !== undefined ? this._behaviorData.Property : "";
  }
  _setProperty(newValue) {
    this._behaviorData.Property = newValue;
  }
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getJoystickIdentifier() {
    return this._behaviorData.JoystickIdentifier !== undefined ? this._behaviorData.JoystickIdentifier : "Primary";
  }
  _setJoystickIdentifier(newValue) {
    this._behaviorData.JoystickIdentifier = newValue;
  }
  _getJumpButton() {
    return this._behaviorData.JumpButton !== undefined ? this._behaviorData.JumpButton : "A";
  }
  _setJumpButton(newValue) {
    this._behaviorData.JumpButton = newValue;
  }
}

/**
 * Shared data generated from Platformer multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.SharedData = class PlatformerMultitouchMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_PlatformerMultitouchMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_PlatformerMultitouchMapperSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_PlatformerMultitouchMapperSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Property")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Property")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Property")).simulateUpKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Property")).simulateLadderKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Property")).simulateDownKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsButtonPressed.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Property")).simulateJumpKey();
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Property": this._getProperty()
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

gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::PlatformerMultitouchMapper", gdjs.evtsExt__SpriteMultitouchJoystick__PlatformerMultitouchMapper.PlatformerMultitouchMapper);
