function augHideFields(fieldsArray, delayTimer, loop) {
  try {
    // Check whether the fields are concatenated
    // PS: Only concatenate the string one time (Example: '[data-cid="UF_CRM_1605592069446"]')
    // Else it will be '[data-cid="UF_CRM_data-cid="UF_CRM_1605592069446"]' etc
    if (Object.values(fieldsArray)[0].substring(1, 9) !== "data-cid") {
      // Get the string for the array
      fieldsArray = augBuildDataCid(fieldsArray);
    }

    // Get the element of the "edit" text
    var element = document.querySelector(Object.values(fieldsArray)[0]);
    var sectionElement = element.parentElement.parentElement;
    var editField = sectionElement
      .getElementsByClassName("ui-entity-editor-section-header")[0]
      .getElementsByClassName("ui-entity-editor-header-actions")[0]
      .childNodes[0];

    // Bind the click event for the main function on the "edit" text as callback
    BX.bind(editField, "click", function () {
      augHideFields(fieldsArray, delayTimer, loop);
    });

    // Container undefined when clicked on "Edit" text so have to wait for rendering
    if (
      element.getElementsByClassName("ui-entity-editor-content-block")[0]
        .children.length === 0
    ) {
      var augTimerObject = {
        className: Object.values(fieldsArray)[0],

        // Run the main function to add classes to hide the address field
        runInput: function () {
          augAddClass(fieldsArray, delayTimer, loop);
        },
      };

      augSetTimerLoop(delayTimer, loop, augTimerObject);
    } else {
      augAddClass(fieldsArray, delayTimer, loop);
    }
  } catch (error) {
    console.log("Error");
    return;
  }
}



function augHideFields(fieldsArray, delayTimer, loop) {
  try {
    // Check whether the fields are concatenated
    // PS: Only concatenate the string one time (Example: '[data-cid="UF_CRM_1605592069446"]')
    // Else it will be '[data-cid="UF_CRM_data-cid="UF_CRM_1605592069446"]' etc
    if (Object.values(fieldsArray)[0].substring(1, 9) !== "data-cid") {
      // Get the string for the array
      fieldsArray = augBuildDataCid(fieldsArray);
    }

    // Get the element of the "edit" text
    var element = document.querySelector(Object.values(fieldsArray)[0]);
    var sectionElement = element.parentElement.parentElement;
    var editField = sectionElement
      .getElementsByClassName("ui-entity-editor-section-header")[0]
      .getElementsByClassName("ui-entity-editor-header-actions")[0]
      .childNodes[0];

    // Bind the click event for the main function on the "edit" text as callback
    BX.bind(editField, "click", function () {
      augHideFields(fieldsArray, delayTimer, loop);
    });

    // Container undefined when clicked on "Edit" text so have to wait for rendering
    if (
      element.getElementsByClassName("ui-entity-editor-content-block")[0]
        .children.length === 0
    ) {
      var augTimerObject = {
        className: Object.values(fieldsArray)[0],

        // Run the main function to add classes to hide the address field
        runInput: function () {
          augAddClass(fieldsArray, delayTimer, loop);
        },
      };

      augSetTimerLoop(delayTimer, loop, augTimerObject);
    } else {
      augAddClass(fieldsArray, delayTimer, loop);
    }
  } catch (error) {
    console.log("Error");
    return;
  }
}

function augHideFields(fieldsArray, delayTimer, loop) {
  try {
    // Check whether the fields are concatenated
    // PS: Only concatenate the string one time (Example: '[data-cid="UF_CRM_1605592069446"]')
    // Else it will be '[data-cid="UF_CRM_data-cid="UF_CRM_1605592069446"]' etc
    if (Object.values(fieldsArray)[0].substring(1, 9) !== "data-cid") {
      // Get the string for the array
      fieldsArray = augBuildDataCid(fieldsArray);
    }

    // Get the element of the "edit" text
    var element = document.querySelector(Object.values(fieldsArray)[0]);
    var sectionElement = element.parentElement.parentElement;
    var editField = sectionElement
      .getElementsByClassName("ui-entity-editor-section-header")[0]
      .getElementsByClassName("ui-entity-editor-header-actions")[0]
      .childNodes[0];

    // Bind the click event for the main function on the "edit" text as callback
    BX.bind(editField, "click", function () {
      augHideFields(fieldsArray, delayTimer, loop);
    });

    // Container undefined when clicked on "Edit" text so have to wait for rendering
    if (
      element.getElementsByClassName("ui-entity-editor-content-block")[0]
        .children.length === 0
    ) {
      var augTimerObject = {
        className: Object.values(fieldsArray)[0],

        // Run the main function to add classes to hide the address field
        runInput: function () {
          augAddClass(fieldsArray, delayTimer, loop);
        },
      };

      augSetTimerLoop(delayTimer, loop, augTimerObject);
    } else {
      augAddClass(fieldsArray, delayTimer, loop);
    }
  } catch (error) {
    console.log("Error");
    return;
  }
}



function augHideFields(fieldsArray, delayTimer, loop) {
  try {
    // Check whether the fields are concatenated
    // PS: Only concatenate the string one time (Example: '[data-cid="UF_CRM_1605592069446"]')
    // Else it will be '[data-cid="UF_CRM_data-cid="UF_CRM_1605592069446"]' etc
    if (Object.values(fieldsArray)[0].substring(1, 9) !== "data-cid") {
      // Get the string for the array
      fieldsArray = augBuildDataCid(fieldsArray);
    }

    // Get the element of the "edit" text
    var element = document.querySelector(Object.values(fieldsArray)[0]);
    var sectionElement = element.parentElement.parentElement;
    var editField = sectionElement
      .getElementsByClassName("ui-entity-editor-section-header")[0]
      .getElementsByClassName("ui-entity-editor-header-actions")[0]
      .childNodes[0];

    // Bind the click event for the main function on the "edit" text as callback
    BX.bind(editField, "click", function () {
      augHideFields(fieldsArray, delayTimer, loop);
    });

    // Container undefined when clicked on "Edit" text so have to wait for rendering
    if (
      element.getElementsByClassName("ui-entity-editor-content-block")[0]
        .children.length === 0
    ) {
      var augTimerObject = {
        className: Object.values(fieldsArray)[0],

        // Run the main function to add classes to hide the address field
        runInput: function () {
          augAddClass(fieldsArray, delayTimer, loop);
        },
      };

      augSetTimerLoop(delayTimer, loop, augTimerObject);
    } else {
      augAddClass(fieldsArray, delayTimer, loop);
    }
  } catch (error) {
    console.log("Error");
    return;
  }
}





