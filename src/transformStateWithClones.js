'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const addProperties = (extraData) => {
    for (const key in extraData) {
      newState[key] = extraData[key];
    }
  };

  const removeProperties = (KeysToRemove) => {
    for (const value of KeysToRemove) {
      delete newState[value];
    }
  };

  const clear = () => {
    for (const key in newState) {
      delete newState[key];
    }
  };

  const states = [];
  const newState = { ...state };

  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        addProperties(obj.extraData);
        break;

      case 'removeProperties':
        removeProperties(obj.keysToRemove);
        break;

      case 'clear':
        clear();
        break;
    }
    states.push(Object.assign({}, newState));
  }

  return states;
}

module.exports = transformStateWithClones;
